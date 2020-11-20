FROM keymetrics/pm2:12-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]

