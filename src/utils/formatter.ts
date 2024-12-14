export class Formatter {

  public static formatDate(value:Date): string {

    const day = value.getDate();
    const monthLarge = value.toLocaleString("default", { month: "long" });
    const year = value.getFullYear();
    return `${day} ${monthLarge} ${year}`;
  }
}