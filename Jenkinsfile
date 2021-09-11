pipeline {
    agent {
        docker {
            image 'cypress/browsers:node14.17.0-chrome91-ff89'
            args  '-v $(which docker):/usr/bin/docker'
        }
    }
    stages{
        stage('Install Dependencies'){
            steps{
                sh "npm ci"
            }
        }

        stage('Running Test'){
            steps{
                sh "npx cypress run -s \"cypress/integration/3-atlas-guild/**/*\""
            }
        }
    }
    post{
        always{
            echo "Finish"
        }
    }
}