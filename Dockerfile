# Use an appropriate Node.js base image, specifying a version
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Specify the command to start your Node.js application
CMD ["node", "app.js"]
