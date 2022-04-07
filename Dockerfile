# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# add app
COPY package.json ./
COPY ./ ./
# install application dependencies
RUN npm i
# start app
CMD ["npm", "start"]