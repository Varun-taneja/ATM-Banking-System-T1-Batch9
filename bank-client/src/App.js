import logo from './logo.svg';
import './App.css';
import Snavbar from './components/Snavbar'
import { Link } from 'react-router-dom';
import Carousel from './components/Carousel';
function App() {
  return (
    // <Snavbar/>
    <div className='rowC'>
            <Snavbar />
            <Carousel/>
    </div>

    // <div className="App">
    //   <div className='gridContainer'>
    //   <Link to="create-customer-details">
    //     <button >Create Customer</button>
    //   </Link>
    //   <Link to="edit-customer-details">
    //     <button >Edit Customer</button>
    //   </Link>
    //   <Link to="transaction-details">
    //     <button >View Transactions</button>
    //   </Link>
    //   <Link to="customer-card-details">
    //     <button >View Card Details</button>
    //   </Link>
    //   <Link to="balance">
    //     <button >View Balance</button>
    //   </Link>
    //   </div>
    // </div>
  );
}

export default App;
