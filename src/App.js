import './App.css';
import ShippingContainerPage from './Components/PaymentPage/ShippingContainerPage';
import Navbar from './Components/Shared/Navbar.jsx';

function App() {
  return (
    <section className="container max-w-[2000px] mx-auto">
      <Navbar />
      <ShippingContainerPage />
    </section>
  );
}

export default App;
