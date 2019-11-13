# Dockerfile of the project.
# Selecting the base node image
FROM node:10.15.3

# Installing the yarn package manager
RUN npm install -g yarn

# Setting the working directory.
WORKDIR /app

# Adding the `/app/node_modules/.bin` to $PATH variable
ENV PATH /app/node_modules/.bin:$PATH

# Install the dependencies.
COPY . /app
RUN yarn --silent

# Exposing the port
EXPOSE 3000

# Run the application
CMD ["yarn", "start"]
