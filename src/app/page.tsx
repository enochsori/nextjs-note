import os from 'os';

const Homepage = () => {
  // server component : only working in server side not client side
  // only available node apis
  // not useState()

  console.log('Hello');
  console.log(os.hostname());

  return <h1>Home</h1>;
};

export default Homepage;
