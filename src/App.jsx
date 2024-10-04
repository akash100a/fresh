import './App.css'
// React Router dom........
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index path='/' element={<Home />}></Route>
      <Route index path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/service' element={<Service />}></Route>
      <Route path='*' element={<Error />} />
    </Route>
  )
);

function App() {


  return (
    <>
    <h1>Hellow</h1>
      {/* //Router Provider..... */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
