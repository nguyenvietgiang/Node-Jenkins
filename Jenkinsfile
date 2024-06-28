pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/nguyenvietgiang/Node-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Server') {
            steps {
                sh 'node src/server.js'
            }
        }
    }
}
