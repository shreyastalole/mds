# Start with a base image for Java
FROM eclipse-temurin:21-jre

# Set the working directory
WORKDIR /app

# Copy the built application JAR
COPY target/*-runner.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
