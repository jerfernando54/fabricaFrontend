FROM node:20.3-alpine3.17 AS build

WORKDIR /dist/src/app

RUN npm cache clean --force

COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/fabricaFrontend /usr/share/nginx/html
EXPOSE 4200