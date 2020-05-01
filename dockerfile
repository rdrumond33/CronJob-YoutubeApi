FROM node:lts
WORKDIR /app
COPY . .
RUN yarn install
CMD [ "yarn","start" ]