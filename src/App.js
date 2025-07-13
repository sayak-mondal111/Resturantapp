import logo from './logo.jpg';
import './App.css';
import NavBar from './my components/NavBar';
import Header from './my components/Header';
// import Back from './my components/Back';
import Padding from './my components/Padding';
import Body from './my components/body';


function App() {
  return (
    <div>
      {/* <Back /> */}
      {/* <div className="content-wrapper"> */}
      <NavBar />
      <Header />
      <Body />
      <Padding />

    </div>
    // </div>
  );
}

export default App;
