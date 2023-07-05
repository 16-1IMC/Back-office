import Home from "./component/home"
import Brands from "./component/brand/index"
import BrandView from "./component/brand/view"
import Posts from "./component/post/index"
import PostView from "./component/post/view"
import Users from "./component/account-management/index"
import UserView from "./component/account-management/view"
import NewBrands from "./component/new-brand/index"
import NewBrandView from "./component/new-brand/view"
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
        <Route path="Token" element={<Token />} />
        <Route path="Home" element={<Home />} />
        <Route path="Brands" element={<Brands />} />
        <Route path="Brands/:id" element={<BrandView />} />
        <Route path="Posts" element={<Posts />} />
        <Route path="Posts/:id" element={<PostView />} />
        <Route path="Users" element={<Users />} />
        <Route path="Users/:id" element={<UserView />} />
        <Route path="NewBrands" element={<NewBrands />} />
        <Route path="NewBrands/:id" element={<NewBrandView />} />
      </Routes>
    </div>
  );
}

export default App;
