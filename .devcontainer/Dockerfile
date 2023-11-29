FROM node:lts-alpine

RUN npm install -g npm@latest

RUN apk add --update python3 py3-pip &\
    pip3 install -r ./utils/requirements.txt

RUN npm i -D

