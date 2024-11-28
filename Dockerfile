FROM node:22.11.0

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["npm","run","start"]