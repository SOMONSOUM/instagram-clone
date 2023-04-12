FROM node:16.14.0

ARG PORT
ENV PORT=$PORT

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

EXPOSE ${PORT}
CMD [ "yarn", "start" ]