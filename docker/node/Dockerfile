FROM node:12.8-alpine

RUN npm cache clean --force
RUN npm install system-sleep

ADD ./app.js /app/app.js
WORKDIR /app

CMD [ "node", "app.js" ]