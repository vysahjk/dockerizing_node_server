FROM node:16

WORKDIR /usr/src/app

RUN git clone https://github.com/vysahjk/dockerizing_node_server.git node-app

WORKDIR /usr/src/app/node-app

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
