import './App.css';
import './Responsive.css';
import './loader';


import {Header, About, Brands, Standards, Gallery, Services, Media, Team, AddServices} from './container';
import {Navbar} from './components'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <About/>
      <Standards/>
      {/* <Brands/> */}

      <Gallery/>
      {/* <Services/> */}
      {/* <Media/>
      <Team/>
      <AddServices/> */}
    </div>
  );
}

export default App;
