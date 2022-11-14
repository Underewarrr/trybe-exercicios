class  Tv2 {

    brand: string;
  
    private size: number;
  
    private resolution: number;

    private connections: string;  

    private connectedTo: string;
  
    constructor(b: string, s: number, r: number, c: string, ct: string) {
  
      console.log(`Starting TV ${b}`);
  
      this.brand = b;
  
      this.size = s;
  
      this.resolution = r;

      this.connections = c;

      this.connectedTo = ct;

  
    }
  
  
    turnOn() {
  
      console.log(`${this.brand}: Tv Starting`);
  
    }
  
    get status() {

        return this.connectedTo;
    
      }

    set status(ct: string) {

    if (ct === this.connections) {

        this.connectedTo = this.connections;

    } else {
         console.log('Sorry, connection unavailable!');
    }

    }
  }
  
  
  const tv12 = new Tv('Philips', 24, 1920, 'HDMI');

  const tv22 = new Tv('Philips', 14, 720, 'VGA');

  
  
  console.log(tv12.brand, tv12.size, tv12.resolution, tv12.connections);

  console.log(tv22.brand, tv22.size, tv22.resolution, tv22.connections);

  
  
  tv12.turnOn();
  
  tv22.turnOn();
  