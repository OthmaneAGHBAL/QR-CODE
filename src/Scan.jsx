import { useState } from 'react'
import QrReader from 'react-qr-scanner'
import QrScanner from 'qr-scanner'
import {Button, Form,FormGroup,Input,FormText,Label } from 'reactstrap'

import {BsFillCloudUploadFill} from 'react-icons/bs'

const Scan = () => {

  const [delay,setDelay] = useState(100)
  const [result,setResult] = useState('No result')
  const [isFound,setIsFound] = useState(false)
  const [CameraOrFile,setCamerOrFile] = useState(false)

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

  const HandleRescan = ()=>{
    setIsFound(false)
    setResult('')
  }

  const readCode = (e)=>{
    const file = e.target.files[0];
        if (!file) {
            return;
        }
        QrScanner.scanImage(file, { returnDetailedScanResult: true })
            .then(result => {
              setResult(result.data)
            })
            .catch(e => setResult(e));
        setIsFound(true)
  }


  return (
    <div >
        <div className=''>
        {
        !isFound && CameraOrFile && (
          <div className='text-center'>
            <QrReader
            className="my-2"
            delay={delay}
            style={previewStyle}
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
      {!isFound && !CameraOrFile && (
        <Form>
          <FormGroup className='image-upload-wrap border-3' >
          <Input
            name="file"
            type="file"
            onChange={readCode}
            className='form-control file-upload-input'
          />
          <FormText className=' p-3 px-2 d-flex flex-column gap-2 align-items-center flex-lg-row fs-5'>
            <BsFillCloudUploadFill className=' fs-4 text-black' />
            <span className=' text-center text-black'>Upload an image that contains a QR code.</span>
          </FormText>
        </FormGroup>
        </Form>
      )  
      }
      {
        !isFound && (
        <div className=' text-center'>
          <Button color='primary' outline onClick={()=>{setCamerOrFile(!CameraOrFile)}} >Switch(Camera/File)</Button>
        </div>
        )
      }
      </div>
  )
}

export default Scan
