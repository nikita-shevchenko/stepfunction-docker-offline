FROM ubuntu:18.04

WORKDIR /app

COPY scripts/run-state-machine.sh .
COPY scripts/state-machine.json .

RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash && \
    apt-get install -y jq \
    python3-pip && \
    pip3 install awscli

RUN mkdir -p ~/.aws/ && \
    echo "[default]" >> ~/.aws/config && \
    echo "region = $AWS_DEFAULT_REGION" >> ~/.aws/config && \
    echo "output = json" >> ~/.aws/config && \
    echo "[default]" >> ~/.aws/credentials && \
    echo "aws_access_key_id = $AWS_ACCESS_KEY_ID" >> ~/.aws/credentials && \
    echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/credentials

CMD [ "tail", "-f", "/dev/null" ]
