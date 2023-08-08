import './Home.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="Homepp">
      <div className='gridContainer'>
      <Link to="register-admin">
        <button >Register / Sign Up</button>
      </Link>
      <Link to="login-admin">
        <button >Login</button>
      </Link>
      </div>
    </div>
  );
}

export default App;