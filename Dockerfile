FROM node:latest
WORKDIR /app
ADD . .
RUN npm install
CMD node app.js