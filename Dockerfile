FROM node:latest

WORKDIR /MICROSERVICIOPRODUCTOS

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start" ]