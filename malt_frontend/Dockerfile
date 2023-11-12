FROM node:current-alpine3.17

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

COPY package*.json ./

RUN apk add --no-cache g++ make py3-pip libc6-compat

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME 3000

EXPOSE 3000

CMD ["npm", "start"]




