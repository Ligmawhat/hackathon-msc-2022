FROM node:16.15.1

WORKDIR /use/scr/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]