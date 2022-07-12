FROM node:14

#1
# WORKDIR /myfolder/
# COPY . /myfolder/

# RUN yarn install      #img를 만들고 나면 위에 yarn install까지 설치된 내용 캐시에 저장됨.

#2
# RUN mkdir aaa   
RUN mkdir qqq
RUN cd aaa
RUN mkdir bbb
#RUN mkdir aaa가 캐시에 저장되어있었는데, RUN mkdir qqq라고 수정되면 다시 build를 한다고 했을 때 캐시에 없으니까 가지고 오지 못하고 새로 만듬.
#그런데 위에 qqq만 바뀌었을 뿐인데 위에부터 비교하는거라 qqq줄이 캐시에 없다고 하면 그 아래로부터는 죄다 새로 만듬(캐시에서 가져오지 않음))

#3
#위에 1번에서 COPY 부분에서 바뀌면 yarn install 다시 해야 함.. 이러면 시간적 손실이 매우 큼.. 따라서 지금의 이 순서는 적합하지 않다.
#설치를 먼저 하는 쪽으로 위로 올라와야 한다.

#바람직한 구조
WORKDIR /myfolder/
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install
#소스코드를 고치더라도 여기까지는 캐시에서 가지고 오기 때문에 순식간이다!
#패키지파일이 변경되면 어쩔 수 없다. 소스코드만 변경했다면 얘네는 크게 바뀔 일이 없다.

COPY . /myfolder/
#얘는 그 다음에 다시 만들어도 시간이 오래 안걸리기 때문에 상관없다.

CMD yarn dev

