import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

const url = 'https://api.example.com/user/1';

fetchData<User>(url).then(user => {
  console.log(user.id);
  console.log(user.name);  
  console.log(user.email); 
}).catch(error => {
  console.error(error.message);
});
