import { Cat } from "../cau11/Cat";
import { Dog } from "../cau11/Dog";
import { Animal } from "../cau9/Animal";

const animal: Animal[] = [new Cat("Meo anh long ngan"), new Dog("gau dan")];

animal.forEach((a) => {
  a.sound();
});
