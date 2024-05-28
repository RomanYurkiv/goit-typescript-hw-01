interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const petro: User = {
  name: 'Petro',
  age: 26,
  email: 'petro@gmail.com',
  address: {
    city: 'Lviv',
    country: 'Ukraine'
  }
};

const pavlo: User = {
  name: 'Petro',
  age: 26,
  email: 'petro@gmail.com'
};
