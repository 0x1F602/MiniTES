# FROM nginx AS base
# COPY app /usr/share/nginx/html/
# https://dockerize.io/guides/node-express-guide
FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 80
CMD ["node", "app/index.js"]