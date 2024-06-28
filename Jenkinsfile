pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/nguyenvietgiang/Node-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Server') {
            steps {
                bat 'node src/server.js'
            }
        }
    }
}


