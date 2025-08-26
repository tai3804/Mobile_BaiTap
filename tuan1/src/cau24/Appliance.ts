// Abstract class Appliance
export abstract class Appliance {
  constructor(public brand: string) {}

  // Abstract method (phải override ở lớp con)
  abstract turnOn(): void;
}
