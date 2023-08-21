
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import DetailProduk from './pages/Home/DetailProduct'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Layout}>
            <Route index Component={Home}/>
            <Route path='/detail_produk/:page/:id' Component={DetailProduk}/>
            <Route path='/login' Component={Login}/>
            <Route path='/register' Component={Register}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
