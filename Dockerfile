FROM node:14.15.1

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install --no-cache

# 서버 소스 복사
COPY ./server /app

# 실행 명령어
CMD ["npm", "run", "server"]