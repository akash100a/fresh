import React from 'react'
import './App.css'
// React Router dom........
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './component/layers/RootLayout';
import Error from './component/pages/Error';
import Home from './component/pages/Home';
import ClickCounter from './component/ClickCounter';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index path='/' element={<Home />}></Route>
      <Route index path='/home' element={<Home />}></Route>
      {/* <Route path='/about' element={<About />}></Route> */}
      {/* <Route path='/service' element={<Service />}></Route> */}
      <Route path='*' element={<Error />} />
    </Route>
  )
);

function App() {


  return (
    <>
      {/* //Router Provider..... */}
      <RouterProvider router={router} />
      <ClickCounter />
    </>
  )
}

export default App
