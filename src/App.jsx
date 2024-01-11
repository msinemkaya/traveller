import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout.jsx'
import { Login } from './components/sections/Login.jsx'
import { Register } from './components/sections/Register.jsx'
import { NoPage } from './components/layout/NoPage.jsx'
import { Main } from './components/layout/Main.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Main/>}/>
        {/*todo: post routes*/}
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<NoPage/>}/>
    </Routes>
  )
}

export default App
