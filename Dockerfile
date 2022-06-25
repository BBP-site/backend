FROM node:16.15.1

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

COPY ./dist ./dist

ENV PORT 5000

CMD ["yarn", "start:dev"]
