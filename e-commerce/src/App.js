import { Routes, Route, Link} from 'react-router-dom';

import Home from './components/link/Home';
import About from './components/link/About';
import Detail from './Detail'
import LogIn from './LogIn'

function App() {
  return(
    <div>
      <h1>hello</h1>

        <Link to='/detail'>Detail</Link>
        <Link to='/logIn'>login</Link>
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/about'>About</Link> */}

        


        <Routes>
          {/* <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/> */}
          <Route path='/detail' element={<Detail />}/>
          <Route path='/logIn' element={<LogIn />}/>
          {/* <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='*' element={<NotFound />}/> */}
          
        </Routes>
      </div>
  )

  
}

export default App;
