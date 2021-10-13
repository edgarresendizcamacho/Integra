pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Integra_Agente1"
                    }
                    steps {
                        git url: 'https://github.com/edgarresendizcamacho/Integra.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --browser chrome --record --key 84781462-61f8-4bce-9d41-d6b09d4a66c2  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Integra_Agente2"
                    }
                    steps {
                        git url: 'https://github.com/edgarresendizcamacho/Integra.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --browser chrome --record --key 84781462-61f8-4bce-9d41-d6b09d4a66c2  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Integra_Agente3"
                    }
                    steps {
                        git url: 'https://github.com/edgarresendizcamacho/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 84781462-61f8-4bce-9d41-d6b09d4a66c2  --parallel'
                    
                    }
                }

                  
            }

        }

    }
            
}