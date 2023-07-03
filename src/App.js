import Home from "./component/home"
import Brands from "./component/brand/index"
import Posts from "./component/post/index"
import Users from "./component/account-management/index"
import NewBrands from "./component/new-brand/index"
import Token from "./component/token"
import './App.css';
import ResponsiveAppBar from './component/layout';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Token" element={<Token />} />
        <Route path="Home" element={<Home />} />
        <Route path="Brands" element={<Brands />} />
        <Route path="Posts" element={<Posts />} />
        <Route path="Users" element={<Users />} />
        <Route path="NewBrands" element={<NewBrands />} />
      </Routes>
    </div>
  );
}

export default App;
