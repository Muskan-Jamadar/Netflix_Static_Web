pipeline {

    agent any

    tools {
        maven 'Maven'
    }

    environment {
        IMAGE_NAME = "jamadar21/netflix:v1"
        CONTAINER_NAME = "netflix-app"
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Muskan-Jamadar/Netflix_Static_Web.git'
            }
        }

        stage('Build WAR') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'docker-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                    echo "$DOCKER_PASS" | docker login \
                    -u "$DOCKER_USER" \
                    --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true

                docker run -d \
                    --name $CONTAINER_NAME \
                    -p 8080:8080 \
                    $IMAGE_NAME
                '''
            }
        }

    }

    post {

        success {
            echo "Application deployed successfully."
        }

        failure {
            echo "Deployment failed."
        }

        always {
            sh 'docker logout || true'
        }
    }
}