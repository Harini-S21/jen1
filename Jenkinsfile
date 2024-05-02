pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('simple-interest-calculator:tag')
                }
            }
        }
        stage('Push Docker Image to Minikube Docker Daemon') {
            steps {
                script {
                    def minikubeEnv = sh(script: 'minikube -p minikube docker-env', returnStdout: true).trim()
                    echo "Minikube Docker environment variables: ${minikubeEnv}"
                    sh "eval ${minikubeEnv} && docker push simple-interest-calculator:tag"
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                script {
                    sh 'kubectl apply -f deployment.yaml'
                }
            }
        }
    }
}
