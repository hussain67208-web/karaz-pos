
export class BilliardPriceRuntime {

  static total(data){

    const games =
      data.games * 2000

    const time =
      (data.minutes / 60) * 10000

    return games + time

  }

}
