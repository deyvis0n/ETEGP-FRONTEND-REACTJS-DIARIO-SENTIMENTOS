import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/navbar/navbar.component'
import Login from './components/login/login.component'
import Register from './components/register/register.component'
import Home from './components/home/home.component'
import Profile from './components/profile/profile.validate.component'
import BoardUser from './components/board-user/board-user-validate.component'
import BoardPosts from './components/board-posts/board-posts-validate.component'

function App() {
  
  return (
    <div>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/board-user' element={<BoardUser />} />
          <Route path='/board-posts' element={<BoardPosts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
