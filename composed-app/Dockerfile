# Use a Node.js base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

ARG NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Build the application
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]

# # Use Node.js for building the image (first stage)
# FROM node:20 as builder

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package files to install dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install --frozen-lockfile

# # Copy the entire application code
# COPY . .

# # Build the Next.js application
# RUN npm run build

# # Use a smaller Node.js runtime for production (second stage)
# FROM node:20-slim

# # Set the working directory
# WORKDIR /app

# # Copy the build from the builder stage
# COPY --from=builder /app ./

# # Expose port for Next.js server
# EXPOSE 3000

# # Start the Next.js application in production mode
# CMD ["npm", "run", "start"]
