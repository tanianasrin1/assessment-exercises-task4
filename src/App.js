import './App.css';
import InfoPage from './components/InfoPage/InfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navber/Navigation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <InfoPage></InfoPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
