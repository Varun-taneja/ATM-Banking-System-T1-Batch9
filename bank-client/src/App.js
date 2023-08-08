import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className='gridContainer'>
      <Link to="create">
        <button >Create Customer</button>
      </Link>
      <Link to="create">
        <button >View Customer</button>
      </Link>
      </div>
    </div>
  );
}

export default App;
