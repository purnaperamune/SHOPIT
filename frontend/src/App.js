import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/Footer'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid"> 
          <Routes>
            <Route path="/" component={Home} exact />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
