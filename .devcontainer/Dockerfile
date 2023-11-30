FROM node:lts-alpine

RUN npm install -g npm@latest

RUN apk add --no-cache python3 py3-pip

RUN export PATH=$PATH:/usr/local/bin

COPY ./utils/requirements.txt .

RUN pip3 install -r requirements.txt
