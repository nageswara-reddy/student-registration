pipeline {
    agent any

    stages {

        stage('Clone Source Code') {
            steps {
                echo 'Downloading project from GitHub'
            }
        }

        stage('Verify Node') {
            steps {
                sh 'node -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Complete') {
            steps {
                echo 'Node.js project is ready!'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t student-registration .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {

                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

                        docker tag student-registration:latest $DOCKER_USERNAME/student-registration:latest

                        docker push $DOCKER_USERNAME/student-registration:latest
                    '''
                }
            }
        }
    }
}