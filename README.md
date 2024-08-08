# WebSocket Chat App

This is a basic WebSocket chat application built using Node.js, Express, and Socket.io. The app allows real-time communication between users and includes Server-Sent Events (SSE) for additional features.

## How to Run Locally

### Prerequisites

- Node.js and npm installed
- Docker installed (if you want to run in a container)

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/chat_app.git
   cd chat_app
   ```

2. **Run**
    ```bash
   npm run dev  
   ```

3. Open your browser and navigate to http://localhost:3000 to access the chat app.

### Dockerize the Application
Build the Docker Image
To containerize the application, use the following steps:

Build the Docker image:
1. **Clone the repository**:
   ```bash
   docker build -t chat_app .
   ```

2. **Run**
    ```bash
   docker run -p 3000:3000 chat_app
   ```
### Hosting and Dockerization

Hosted the chat app on an EC2 instance. Installed Docker on an Ubuntu server, pulled the Docker image, and ran it to deploy the application.

   


https://github.com/user-attachments/assets/0761cfb1-de6c-4598-b81a-88324ad1bc5c

