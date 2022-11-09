class Tv {

    brand: string;
  
    size: number;
  
    resolution: number;

    connections: string;  
  
    constructor(b: string, s: number, r: number, c: string) {
  
      console.log(`Starting TV ${b}`);
  
      this.brand = b;
  
      this.size = s;
  
      this.resolution = r;

      this.connections = c;

  
    }
  
  
    turnOn() {
  
      console.log(`${this.brand}: Tv Starting`);
  
    }
  
  }
  
  
  const tv1 = new Tv('Philips', 24, 1920, 'HDMI');

  const tv2 = new Tv('Philips', 14, 720, 'VGA');

  
  
  console.log(tv1.brand, tv1.size, tv1.resolution, tv1.connections);

  console.log(tv2.brand, tv2.size, tv2.resolution, tv2.connections);

  
  
  tv1.turnOn();
  
  tv2.turnOn();
  