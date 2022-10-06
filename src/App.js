import './App.css';
import InfoPage from './components/InfoPage/InfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navber/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <InfoPage></InfoPage>
            
    </div>
  );
}

export default App;
