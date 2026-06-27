
export class BilliardSessionRuntime {

  static create(table){

    return {
      table,
      active:true,
      startedAt:Date.now()
    }

  }

}
