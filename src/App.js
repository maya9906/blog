// App.js
import Header from './components/Header';
import Home from './components/Home';
import Blogpage from './components/Blogpage';
// import Nasa from './components/NasaImage';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Blogpage />
      {/* <Nasa /> */}
    </div>
  );
}

export default App;
