import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React from 'react'
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from "./component/home";
// import Brand from "./component/brand/index";
// import Post from "./component/post/index";
// import NewBrand from "./component/new-brand";
// import Account from "./component/account-management/index";
// import Layout from "./component/layout";
// import Login from "./component/login";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//       <Route index element={<Login />} />
//       <Route path="/" element={<Layout />}>
//         <Route path="/home" element={<Home />} />
//         <Route path="/brand/index" element={<Brand />} />
//         <Route path="/post/index" element={<Post />} />
//         <Route path="/new-brand/index" element={<NewBrand />} />
//         <Route path="/account-management/index" element={<Account />} />
//       </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );