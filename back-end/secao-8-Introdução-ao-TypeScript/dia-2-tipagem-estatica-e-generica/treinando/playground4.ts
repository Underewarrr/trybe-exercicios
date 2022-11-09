import axios from 'axios';

type Product = {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string
}


class ApiConsumer {
  public api;

  constructor(api: string){
    this.api = api;
  }

  async execute<T>(path: string): Promise<T> {
    const { data } = await axios.get<T>(this.api + path);

    return data;
  }
}

const json = new ApiConsumer('https://jsonplaceholder.typicode.com');
console.log(json);
const store = new ApiConsumer('https://fakestoreapi.com');
console.log(store);

json.execute<User[]>('/users').then(users => {
  const user = users[0];
  console.log(user)
});
store.execute<Product>('/products/1').then((product) => console.log(product));

store.execute<Product[]>('/products').then((products) => console.log(products.length));