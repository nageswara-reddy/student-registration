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
                sh 'npm -v'
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

    }
}