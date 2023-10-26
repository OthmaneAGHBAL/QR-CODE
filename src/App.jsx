import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Scan from './Scan';
import Home from './Home';
import GenerateQRcode from './GenerateQRcode';
import SocialMedia from './SocialMedia';
import Logo from './Logo';
function App() {

  return (
    <Router> 
      <div className='app_view p-4 d-flex justify-content-center '>
        <div className='my-auto'>
          <Logo/>
          <div className='mt-5'>
            <h2 className=' text-center'>QR CODE</h2>
          </div>

          <div className=' px-5 py-3'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/scan' element={<Scan/>} />
            <Route path='/generate' element={<GenerateQRcode/>} />
          </Routes>
          </div>
            <SocialMedia />

        </div>

      </div>

    </Router> 
  )
}

export default App
