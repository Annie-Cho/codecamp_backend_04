FROM node:14

#RUN mkdir myfolder
#COPY . /myfolder
#현 위치를 모두 복사해서 도커 안에 넣기
#폴더가 없으면 폴더가 자동으로 만들어져서 사실 mkdir myfolder 안 만들어도 됨.

WORKDIR /myfolder/
COPY . /myfolder/
#WORKDIR : 커서가 깜빡깜빡 될 곳..!

RUN yarn install
CMD yarn dev
#그런데 여기서 문제는 다른 사람들은 node version이 다 다를텐데 node14로 해놓고 있다. 도커 내 node 버전이므로 상관없음.
#node_modules는 도커에 가지고 들어가는 것이 아니다. 따라서 .dockerignore 쓰고 안에서 node 14버전을 가지고 yarn을 install해줘야 함.