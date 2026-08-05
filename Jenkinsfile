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
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Complete') {
            steps {
                echo 'Node.js project is ready!'
            }
        }
         stage('Build Docker Image') {
             steps {
                 bat 'docker build -t student-registration .'
            }
        }

    }
}