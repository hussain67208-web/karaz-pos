
import os from 'os'

export class IPRuntime {

  static get(){

    return os.networkInterfaces()

  }

}
