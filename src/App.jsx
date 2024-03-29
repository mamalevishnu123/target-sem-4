
import './App.css'
import Header from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'

import C1 from './pages/c1'
import C2 from './pages/c2';
import M1 from './pages/m1'
import M2 from './pages/m2';
import E1 from './pages/e1'
import E2 from './pages/e2';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/c1' element={<C1 />} />
      <Route path='/c2' element={<C2 />} />
      <Route path='/e1' element={<E1 />} />
      <Route path='/e2' element={<E2 />} />
      <Route path='/m1' element={<M1 />} />
      <Route path='/m2' element={<M2 />} />
    </Routes>
    </>
  )
}

export default App
