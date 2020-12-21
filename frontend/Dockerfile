FROM node:12-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install
# RUN npm install react-scripts@3.4.3 -g

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]