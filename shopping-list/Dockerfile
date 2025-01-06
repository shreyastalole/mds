# Use a Node.js base image
FROM node:20
# Dockerfile for frontend
ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}

# Proceed with your Dockerfile instructions (copy files, build app, etc.)

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
