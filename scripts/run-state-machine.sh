#!/bin/bash

STATE_MACHINE_DEFINITION=state-machine.json
STATE_MACHINE_NAME="step-functions-offline-dev"

function get_value_from_json(){
        VALUE="$(jq .$1 temporary.json)"
        VALUE="${VALUE%\"}"
        VALUE="${VALUE#\"}"
        rm temporary.json
        echo $VALUE
}

aws stepfunctions \
    --endpoint http://localhost:8083 \
    create-state-machine --definition "`cat $STATE_MACHINE_DEFINITION`" \
    --name $STATE_MACHINE_NAME \
    --role-arn "arn:aws:iam::012345678901:role/DummyRole" \
    > temporary.json

STATE_MACHINE_ARN=$(get_value_from_json "stateMachineArn")

aws stepfunctions \
    --endpoint http://localhost:8083 \
    start-execution \
        --state-machine $STATE_MACHINE_ARN \
        --name "$STATE_MACHINE_NAME-$(date +%s)" \
        > temporary.json

EXECUTION_ARN=$(get_value_from_json "executionArn")

aws stepfunctions \
    --endpoint http://localhost:8083 \
    describe-execution \
        --execution-arn $EXECUTION_ARN
