import './App.css';
import './Responsive.css';


import {Header, About, Brands, Standards, Portfolio, Services, Media, Team, AddServices} from './container';
import {Navbar} from './components'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <About/>
      <Standards/>
      {/* <Brands/>

      <Portfolio/>
      <Services/>
      <Media/>
      <Team/>
      <AddServices/> */}
    </div>
  );
}

export default App;
