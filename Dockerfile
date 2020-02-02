FROM node:10.13-alpine

# Setting enviroments
ENV NODE_ENV development

# Crete Directory for the Container
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json /usr/src/app/
COPY tsconfig.json /usr/src/app/

# Bcrypt require python
# TODO find better solution so docker no need to to following line
RUN apk --no-cache add --virtual builds-deps build-base python


RUN npm install
ADD . /usr/src/app

RUN npm run tsc

# TODO check what exacly to copy in the docker (build file)
# COPY . .

# Starting docker
CMD [ "npm", "start" ]
EXPOSE 8080


# build docker

# docker build -t confi .

# docker run
# docker run confi:latest
