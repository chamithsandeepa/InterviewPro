# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Copy build artifacts from builder
COPY --from=builder /app ./

# Set environment
ENV NODE_ENV=production
ENV PORT=4060

# Expose the desired port
EXPOSE 4060

# Start the app
CMD ["npm", "run", "start"]
