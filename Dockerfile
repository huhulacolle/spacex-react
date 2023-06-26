FROM node:lts-alpine as dev
WORKDIR /develop
RUN npm install -g npm@9.7.2
EXPOSE 5173

FROM node:lts-alpine as build
WORKDIR /build
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:stable-alpine3.17-slim as prod
COPY --from=build /build/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]