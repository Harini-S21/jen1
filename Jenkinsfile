pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('simple-interset-calculator:tag')
                }
            }
        }
        stage('Push Docker Image to Minikube Docker Daemon') {
            steps {
                script {
                    sh 'eval $(minikube docker-env) && docker push simple-interset-calculator:tag'
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
