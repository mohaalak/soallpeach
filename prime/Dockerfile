
FROM node:13.12.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

ENTRYPOINT ["node", "src/index.js"]
