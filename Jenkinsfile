pipeline {
  agent {
    docker {
      image 'node:14.8'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh '''yarn install
yarn test'''
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }

  }
}