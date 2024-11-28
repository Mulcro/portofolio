FROM node:22.11.0

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install

CMD ["npm","run","build"]

EXPOSE 3000

CMD ["npm","run","start"]