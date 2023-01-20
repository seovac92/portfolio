import './App.css';
import Header from './components/header/index';
import Main from './components/main/index'
import Footer from './components/Footer/index';
import MatrixBG from './components/Matrix';

function App() {

  return (
    <div className="app">
      <Header />
      <MatrixBG />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
