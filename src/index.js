import Supervisor from 'bridges-supervisor'
import path from 'path'
import fs from 'fs'

export default class BridgesApplication {
  constructor({directory, processes}) {
    if (!fs.existsSync(directory)) {
      throw new Error('options.directory must be a valid directory'); 
    }
    if (!processes) {
      processes = {
        inject: []
      }
    }
    processes.directory = path.join(directory, 'processes')
    this.supervisor = new Supervisor(processes)
  }
}

