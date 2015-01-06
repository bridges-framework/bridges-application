# Bridges-Application

    npm install --save bridges-application

## Usage

    var application = new BridgesApplication({
      directory: __dirname
    })
  
    application.supervisor.start().then(function() {
      console.log('all processes in ./processes started')
    })

