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

        stage('Server Testing') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        success {
            script {
                def message = "[SUCCESS] Node Server api build success!"
                bat """
                curl -X POST -H "Content-Type: application/json" -d "{\\"chat_id\\": \\"7094640728\\", \\"text\\": \\"${message}\\", \\"disable_notification\\": false}" https://api.telegram.org/bot7424260362:AAGEoPjAx2uh35FaYIdz-Y0zMVM1so7-wAQ/sendMessage
                """
            }
        }

        failure {
            script {
                def message = "[FAILURE] Node Server api build failed!"
                bat """
                curl -X POST -H "Content-Type: application/json" -d "{\\"chat_id\\": \\"7094640728\\", \\"text\\": \\"${message}\\", \\"disable_notification\\": false}" https://api.telegram.org/bot7424260362:AAGEoPjAx2uh35FaYIdz-Y0zMVM1so7-wAQ/sendMessage
                """
            }
        }
    }
}




