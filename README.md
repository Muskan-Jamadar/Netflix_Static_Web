# Netflix Static Web Application - Tomcat Deployment

A static Netflix-inspired web application developed using HTML, CSS, and JavaScript.

The application is packaged as a web application and deployed on Apache Tomcat. Docker is used for containerization and Jenkins is used to automate the deployment process.

## Technologies Used

- HTML
- CSS
- JavaScript
- Apache Tomcat
- Docker
- Jenkins
- Maven
- Git
- GitHub

## Project Structure

The main web application files are located inside:

    src/main/webapp/

The directory contains:

    src/main/webapp/
    ├── WEB-INF/
    ├── index.html
    ├── script.js
    └── style.css

Other important project files:

    Dockerfile
    Jenkinsfile
    pom.xml

## Deployment Procedure

### Step 1: Clone the Repository

Clone the repository from GitHub:

    git clone https://github.com/Muskan-Jamadar/Netflix_Static_Web.git

Move into the project directory:

    cd Netflix_Static_Web

Check the project files:

    ls

### Step 2: Check Java

Check whether Java is installed:

    java -version

### Step 3: Check Maven

Check the Maven version:

    mvn -version

If Maven Wrapper is available in the project, it can also be used:

    ./mvnw -version

### Step 4: Build the Web Application

Build the project using Maven:

    ./mvnw clean package

For Windows:

    mvnw.cmd clean package

The generated deployment file will be available inside the `target` directory.

Check the generated files:

    ls target/

### Step 5: Install Apache Tomcat

Download and install Apache Tomcat.

After extracting Tomcat, move into the Tomcat directory:

    cd apache-tomcat

Give execute permission to Tomcat scripts:

    chmod +x bin/*.sh

### Step 6: Deploy the Application on Tomcat

Copy the generated WAR file from the `target` directory into the Tomcat `webapps` directory:

    cp target/*.war ~/apache-tomcat/webapps/

If the project produces a specific WAR file, copy that WAR file instead.

Check the deployed application:

    ls ~/apache-tomcat/webapps/

### Step 7: Start Apache Tomcat

Go to the Tomcat `bin` directory:

    cd ~/apache-tomcat/bin

Start Tomcat:

    ./startup.sh

If Tomcat starts successfully, the server will be available on the configured port.

### Step 8: Check Tomcat Status

Check whether Tomcat is running:

    ps -ef | grep tomcat

Check the Tomcat logs:

    tail -f ~/apache-tomcat/logs/catalina.out

### Step 9: Check Tomcat Port

The Tomcat port can be checked in:

    apache-tomcat/conf/server.xml

The default Tomcat port is:

    8080

### Step 10: Access the Application

Open a browser and access:

    http://localhost:8080/

If the WAR file is deployed with the application name, use:

    http://localhost:8080/<APPLICATION_NAME>/

For example:

    http://localhost:8080/Netflix_Static_Web/

### Step 11: Verify the Application

Open the application in a browser and verify that:

- The Netflix web page loads correctly
- CSS styles are applied
- JavaScript functionality works
- Images and other resources load correctly
- Navigation and interactive elements work correctly

## Docker Deployment

### Step 12: Build the Docker Image

Build the Docker image from the project root directory:

    docker build -t netflix-static-web .

Check the Docker image:

    docker images

### Step 13: Run the Docker Container

Run the application using Docker:

    docker run -d -p 8080:8080 --name netflix-static-web netflix-static-web

Check the running container:

    docker ps

### Step 14: Check Docker Logs

View the container logs:

    docker logs netflix-static-web

To continuously monitor the logs:

    docker logs -f netflix-static-web

### Step 15: Access the Dockerized Application

Open the browser:

    http://localhost:8080/

If the application is deployed under a context path:

    http://localhost:8080/<APPLICATION_NAME>/

### Step 16: Stop the Docker Container

Stop the container:

    docker stop netflix-static-web

Remove the container:

    docker rm netflix-static-web

### Step 17: Rebuild the Docker Image

After making changes to the application, rebuild the Docker image:

    docker build -t netflix-static-web .

Run the updated container:

    docker run -d -p 8080:8080 --name netflix-static-web netflix-static-web

## Jenkins CI/CD Deployment

Jenkins is used to automate the build and deployment process.

### Step 18: Configure Jenkins

Configure Jenkins with the required tools:

- JDK
- Maven
- Git
- Docker

Make sure Jenkins has permission to execute Docker commands.

Check Docker:

    docker --version

Check Java:

    java -version

Check Maven:

    mvn -version

### Step 19: Create a Jenkins Pipeline

Create a new Jenkins Pipeline job.

Connect the pipeline to the GitHub repository:

    https://github.com/Muskan-Jamadar/Netflix_Static_Web.git

Use the `Jenkinsfile` available in the project repository.

The Jenkins pipeline can automate the following process:

    GitHub
       |
       v
    Jenkins
       |
       v
    Checkout Code
       |
       v
    Maven Build
       |
       v
    Docker Build
       |
       v
    Docker Image
       |
       v
    Application Deployment
       |
       v
    Apache Tomcat

### Step 20: Run the Jenkins Pipeline

Run the Jenkins Pipeline job.

Check the Jenkins Console Output and verify that all configured stages complete successfully.

### Step 21: Verify Deployment

After Jenkins completes the pipeline, check the Docker containers:

    docker ps

Check the application logs:

    docker logs netflix-static-web

Open the application:

    http://localhost:8080/

## Useful Tomcat Commands

Start Tomcat:

    cd ~/apache-tomcat/bin
    ./startup.sh

Stop Tomcat:

    cd ~/apache-tomcat/bin
    ./shutdown.sh

Restart Tomcat:

    cd ~/apache-tomcat/bin
    ./shutdown.sh
    ./startup.sh

Check Tomcat process:

    ps -ef | grep tomcat

Check Tomcat logs:

    tail -f ~/apache-tomcat/logs/catalina.out

Check Tomcat port:

    sudo lsof -i :8080

Check deployed applications:

    ls ~/apache-tomcat/webapps/

## Useful Docker Commands

Check Docker version:

    docker --version

List Docker images:

    docker images

List running containers:

    docker ps

List all containers:

    docker ps -a

Start container:

    docker start netflix-static-web

Stop container:

    docker stop netflix-static-web

Remove container:

    docker rm netflix-static-web

View container logs:

    docker logs netflix-static-web

Remove Docker image:

    docker rmi netflix-static-web

## Git Commands

Check Git status:

    git status

Add changes:

    git add .

Commit changes:

    git commit -m "Update Netflix static web application"

Push changes:

    git push origin main

Pull latest changes:

    git pull origin main

## Troubleshooting

### Tomcat Is Not Starting

Check the Tomcat logs:

    tail -f ~/apache-tomcat/logs/catalina.out

Check whether port 8080 is already being used:

    sudo lsof -i :8080

### Application Is Not Opening

Check whether Tomcat is running:

    ps -ef | grep tomcat

Check deployed files:

    ls ~/apache-tomcat/webapps/

Check Tomcat logs:

    tail -f ~/apache-tomcat/logs/catalina.out

### Docker Container Is Not Running

Check all containers:

    docker ps -a

Check container logs:

    docker logs netflix-static-web

Check whether port 8080 is already in use:

    sudo lsof -i :8080

## Deployment Flow

    GitHub
       |
       v
    Jenkins
       |
       v
    Maven Build
       |
       v
    Docker Build
       |
       v
    Docker Container
       |
       v
    Apache Tomcat
       |
       v
    Netflix Static Web Application
       |
       v
    Web Browser

## Project Highlights

- Static web application developed using HTML, CSS, and JavaScript
- Web application deployment using Apache Tomcat
- Docker-based containerization
- Jenkins-based CI/CD automation
- Maven-based project build
- GitHub source code management
