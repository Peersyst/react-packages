pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Install') {
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh 'yarn'
                }
            }
        }
        stage('Build') {
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh 'yarn release:build'
                    sh 'yarn build-storybook'
                }
            }
        }
        stage('Deploy storybook') {
           when {
               branch 'master'
           }
            steps {
                sshagent(credentials : ['jenkins-ssh']) {
                    sh 'scp -rp ./packages/react-components/storybook-static ubuntu@dev.peersyst.com:/home/ubuntu'
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@dev.peersyst.com sudo rm -rf /var/www/react-components/*'
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@dev.peersyst.com sudo mv /home/ubuntu/storybook-static/* /var/www/react-components/'
                }
            }
        }
        stage('Publish') {
            when {
                branch 'master'
            }
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh "yarn release:publish --skip-git --yes"
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
