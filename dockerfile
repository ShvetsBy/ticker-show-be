FROM node:14-alpine
WORKDIR app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
USER node
EXPOSE 8080
ENTRYPOINT [ "npm", "start" ]