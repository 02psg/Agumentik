import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import Jlditech from './components/Jlditech';
import Header from './components/Header';

function App() {
  return (
    <div>
      
     <Header></Header>
      <p className='heading'> Trello 101</p>
      <h1> A productivity powerhouse  </h1>
      <p>Simple, flexible, and powerful. All it takes are boards, lists, and <br></br>
        cards to get a clear view of who’s doing what and what needs to <br>
        </br>get done. Learn more in our <span> <a href="/"> for getting started.</a></span></p>
        
        <MainComponent></MainComponent>
        <Jlditech></Jlditech>
        <Footer></Footer>
    </div>
  );
}

export default App;
