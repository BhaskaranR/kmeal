FROM node:8

WORKDIR /server

COPY ./package.json /index/

RUN npm install

COPY . /index/

CMD ["npm", "start"]