// Vehicle interface
export interface Vehicle {
  brand: string;
  speed: number;

  drive(): void;
  stop(): void;
}
