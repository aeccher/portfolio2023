pipeline {
    agent any

    environment {
        NODEJS_VERSION = '18' // Adapter si besoin
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/aeccher/portfolio2023.git'
            }
        }

        stage('Setup Node.js') {
            steps {
                script {
                    def nodejsHome = tool name: "NodeJS-18", type: 'hudson.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejsHome}/bin:${env.PATH}"
                }
                sh 'node -v'  // Vérification de la version Node.js
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Ou 'yarn install' selon le projet
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build' // Modifier selon le script de build (ex: npm run export pour Next.js)
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' // Si des tests sont définis
            }
            post {
                always {
                    junit '**/reports/*.xml' // Adapter le chemin si besoin
                }
            }
        }

        stage('Deploy (Simulation)') {
            steps {
                echo "Simulation de déploiement : artefacts construits"
            }
        }
    }

    post {
        success {
            echo "🎉 Build réussi !"
        }
        failure {
            echo "❌ Échec du pipeline. Consultez les logs."
        }
    }
}
