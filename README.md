# 12-Factor App Compliance for Quarkus and Next.js Project

This project is designed following the **12-Factor App** methodology to ensure modern software development best practices. The application consists of a **Next.js React frontend** and a **Quarkus backend**, both containerized using Docker and managed through Docker Compose.

## I. Codebase

The project uses a single codebase, managed in a version control system (GitHub Codespaces). The frontend and backend components are both included in the same repository, ensuring streamlined version control and traceability.

## II. Dependencies

Dependencies are explicitly declared and managed through:

- **Frontend:** `package.json` for Next.js and React dependencies.
- **Backend:** `pom.xml` for Quarkus and its extensions.

The project uses Docker containers to isolate these dependencies, ensuring consistency across environments.

## III. Config

All configurations are externalized using **environment variables** in the `docker-compose.yml` file. No hardcoded ports, URLs, or database connection properties are present.

Example: The backend URL is passed to the frontend as an environment variable, ensuring configurability across environments.

## IV. Backing Services

The project treats the **H2 database** as an attached resource. The database runs within the backend container and is managed as part of the service definition in the `docker-compose.yml` file.

## V. Build, Release, Run

The application ensures a strict separation of build and run stages:

- **Dockerfiles:** Separate Dockerfiles are created for both the frontend and backend services.
- **Docker Compose:** A combined `docker-compose.yml` file manages the build and run stages by creating container images first and deploying them as separate services.

## VI. Processes

The Quarkus backend is designed to be **stateless**. The H2 in-memory database is used for data storage during the initial exploration phase, emphasizing the stateless nature of the application logic.

## VII. Port Binding

Services are exposed via **port binding** using the `docker-compose.yml` file:

- **Frontend:** Port `3000`
- **Backend:** Port `8080`

The ports are dynamically mapped to ensure accessibility from the host machine.

## VIII. Concurrency

The application can be scaled out using the process model supported by Docker Compose. Multiple instances of the backend and frontend services can be run concurrently if needed.

## IX. Disposability

The project prioritizes fast startup and graceful shutdown:

- **Quarkus:** Designed for minimal resource consumption and fast boot times.
- **Docker Compose:** Containers can be stopped and restarted with minimal downtime using the `docker-compose down` and `docker-compose up` commands.

## X. Dev/Prod Parity

Development and production environments are kept as similar as possible:

- **Containerized Workflow:** The same Docker Compose setup is used for both development and production.
- **Externalized Config:** Configuration through environment variables ensures parity across stages.

## XI. Logs

Logs are treated as **event streams** and are accessible through container logs (`docker-compose logs`).

Future improvements can include forwarding logs to a centralized logging system for better traceability.

## XII. Admin Processes

Administrative tasks, such as database migrations, can be run as **one-off processes** using the Quarkus Dev UI or manual commands executed within the running containers.

---

## Project Overview

### Frontend

- **Framework:** Next.js (React)
- **Features:** Product listing, adding, and deleting products.
- **Data Management:** Fetches product data from the backend.

### Backend

- **Framework:** Quarkus
- **Features:** Provides RESTful API for managing products (`GET`, `POST`, `DELETE`).
- **Database:** H2 (in-memory database for development and testing purposes).

### API Specification (OpenAPI 3.1.0)

The API specifications are implemented based on the provided OpenAPI document. The `/products` endpoint supports listing, adding, retrieving, and deleting products.

### Containerization

- **Dockerfiles:** Created separately for frontend and backend services.
- **Docker Compose:** Combines both services into a multi-container setup.

---

## Technologies Used

- **Frontend:** Next.js, React
- **Backend:** Quarkus, Java
- **Database:** H2
- **Containerization:** Docker, Docker Compose

---

## Summary

This project successfully implements the **12-Factor App** methodology. The application ensures externalized configuration, containerization, and a stateless design, making it scalable and production-ready. Further improvements can include:

- Migrating to a persistent database.
- Centralizing log management.
- Adding CI/CD pipelines for automated builds and deployments.
- Adding Kubernetes in future.

