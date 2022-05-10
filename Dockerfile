FROM alpine:3.14

RUN apk update && apk add nodejs nodejs-dev yarn git tzdata && mkdir /app

RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

RUN echo "America/Sao_Paulo" >  /etc/timezone

RUN apk del tzdata

WORKDIR /app

COPY . /app/

RUN yarn install --frozen-lockfile

RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start:dev" ]