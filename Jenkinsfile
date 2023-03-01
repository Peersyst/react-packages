pipeline {
    agent any
    environment {
        HOME = '.'
    }
    stages {
        stage('Install') {
            agent {
                docker {
                    image 'node:16'
                    reuseNode true
                }
            }
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh 'yarn --frozen-lockfile'
                }
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:16'
                    reuseNode true
                }
            }
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh 'yarn release:build'
                }
            }
        }
        stage('Publish') {
            agent {
                docker {
                    image 'node:16'
                    reuseNode true
                }
            }
            when {
                branch 'main'
            }
            steps {
                withCredentials([string(credentialsId: 'npm-publish-token', variable: 'NPM_TOKEN')]) {
                    sh "yarn release:publish --no-git-tag-version --no-push --yes"
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
