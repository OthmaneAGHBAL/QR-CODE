import { useState } from 'react'
import QrReader from 'react-qr-scanner'
import {Button } from 'reactstrap'

import {MdOutlineCameraswitch} from 'react-icons/md'

const Scan = () => {

  const [delay,setDelay] = useState(100)
  const [result,setResult] = useState('No result')
  const [cameramode,setCameraMode] = useState('rear')
  const [isFound,setIsFound] = useState(false)

  const previewStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  };

  const handleScan = (data) =>{
    if(data){
      setResult(data.text)
      setIsFound(true)
    }


  }
  const handleError = (err) =>{
    console.error(err)
  }


  const toggleCameraMode = () => {
    if(cameramode === 'front'){
      setCameraMode('rear');
    }else{
      setCameraMode('front');
    }
  };

  const HandleRescan = ()=>{
    setIsFound(false)
    setResult('')
  }


  return (
    <div >
        <div className=''>
        {!isFound && (
          <div className='text-center'>
            <div className=' mb-4'><Button className='btn btn-primary'  onClick={toggleCameraMode}><MdOutlineCameraswitch className=' fs-4' /></Button ></div>
            <QrReader
            className="my-2"
            delay={delay}
            style={previewStyle}
            facingMode={cameramode}
            onError={handleError}
            onScan={handleScan}
            />
            <p>Scaning ...</p>
          </div>)
        }
        </div>
        {
          isFound &&(
            <div className=' text-center my-4'>
              <h5 className=' text-center my-2'>The result is :</h5>
              <p><strong>{result}</strong></p>
              <Button  onClick={HandleRescan} color="primary" outline >Rescan</Button>
            </div>
          )
        }
      </div>
  )
}

export default Scan
