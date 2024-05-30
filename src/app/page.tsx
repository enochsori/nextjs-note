import os from 'os';
import Counter from './components/Counter';

const Homepage = () => {
  // server component : only working in server side not client side
  // only available node apis
  // not useState()
  console.log('Hello - server');
  console.log(os.hostname());

  return (
    <div>
      <h1>Home</h1>
      <Counter />
    </div>
  );
};

export default Homepage;
