# Use the official Node.js 16.20.1-alpine base image
FROM node:16.20.1-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the executable app.js file to the working directory
COPY ./ .

# Expose port 3000 to the host machine
EXPOSE 3000

# Set the command to run when the container starts
CMD ["npm", "start"]
