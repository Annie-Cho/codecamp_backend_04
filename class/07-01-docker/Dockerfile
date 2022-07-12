# FROM ubuntu:20.04
FROM node:14
#FROM node:14는 node, ubuntu, yarn, npm 다 깔려있음

# RUN mkdir aaa       # ubuntu 안에  aaa를 만들었다

# RUN apt install nodejs      # ubuntu 안에 nodejs를 설치한다.
# RUN npm install -g yarn     # 안에 접속해서 node --version, npm --version, yarn --version 하면 다 나옴 그런데 이거는 다 깔려있음..

COPY ./index.js /

CMD node index.js