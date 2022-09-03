import './App.css';
import { NavBar, Navbar } from './components/Navbar';
import { Route, Routers, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Blog } from './components/Blog';
import { SubBlog } from './components/SubBlog';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { ContactDetail } from './components/ContactDetail';
import { UserApiDemo } from './api/UserApiDemo';

function App() {

  var address = {
    country: "India",
    city: "Ahmedabad",
    state: "Gujrat",
    area: "Ghatlodiya",
    pin: 380061
  }

  var userName = "Ram"
  return (
    <div className="App">

      <UserApiDemo />
      <Routes>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contactdetails' element={<ContactDetail />}></Route>
        <Route path='/subblog' element={<SubBlog />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/productdetails' element={<ProductDetail />}></Route>

      </Routes>


    </div>

  );
}

export default App;