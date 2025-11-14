FROM node:20-alpine
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY index.js index.js
CMD ["node", "index.js"]
