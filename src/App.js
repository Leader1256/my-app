
import './App.css';
import { FeaturedJob } from './Components/FeaturedJob';
import { Header } from './Components/Header';
import { SearchBar } from './Components/SearchBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { ContactUs } from './Components/ContactUs';
import { SerachBarCom } from './Components/SerachBarCom';
function App() {
  return (
    <div className="App">
      {/* <SearchBar/>
      <FeaturedJob/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchBar" element={<SearchBar/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
         <Route path='/SerachBarCom' element={<SerachBarCom/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
