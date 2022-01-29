pipeline {
    agent any
    environment {
        HOME = '.'
    }
    stages {
        stage('Install') {
            agent {
                docker {
                    image 'node:12'
                    reuseNode true
                }
            }
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh 'yarn'
                }
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:12'
                    reuseNode true
                }
            }
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh 'yarn build'
                    sh 'yarn build-storybook'
                }
            }
        }
        stage('Deploy storybook') {
            when {
                branch 'main'
            }
            steps {
                sshagent(credentials : ['jenkins-ssh']) {
                    sh 'scp -rp ./storybook-static ubuntu@dev.peersyst.com:/home/ubuntu'
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@dev.peersyst.com sudo rm -rf /var/www/react-components/*'
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@dev.peersyst.com sudo mv /home/ubuntu/storybook-static/* /var/www/react-components/'
                }
            }
        }
        stage('Publish') {
            agent {
                docker {
                    image 'node:12'
                    reuseNode true
                }
            }
            when {
                branch 'main'
            }
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh "npm publish"
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}