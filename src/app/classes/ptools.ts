export class PTools {
  public static getRandomInt(min: number, max: number): number {
    let x=Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
  }

  static shuffleNumber(array:number[]) {
    return array.sort(() => Math.random() - 0.5);
  }
}
