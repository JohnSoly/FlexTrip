# backend/Dockerfile

# --- Builder Stage ---
# This stage installs dependencies and builds the application
FROM node:18 AS builder
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# --- Development Stage ---
# This is the stage we will use for development with live reloading
FROM node:18
WORKDIR /usr/src/app

# Copy package files from the builder stage
COPY --from=builder /usr/src/app/package*.json ./

# Copy node_modules from the builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy the rest of the application source code
COPY . .

# The command to start the application in development mode
CMD ["npm", "run", "start:dev"]
