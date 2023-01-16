import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Employees } from './components/Employees';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
