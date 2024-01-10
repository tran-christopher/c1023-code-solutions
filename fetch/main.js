async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    throw new Error(error);
  }
}

getData();
