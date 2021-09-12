pipeline {
    agent {
        label 'agent-jenkins-chrome-1'
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