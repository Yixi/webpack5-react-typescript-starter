pipeline {
  agent {
    docker {
      image 'node:14.8'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''yarn install
yarn test'''
      }
    }

  }
}