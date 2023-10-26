import { useState } from 'react'
import { Form,FormGroup,Label,Input, Row, Col, Button } from 'reactstrap'
import React, { useRef } from 'react';
import QRCode from 'qrcode'


const GenerateQRcode = () => {
    const [colorF,setColorF] = useState('#000000')
    const [colorBG,setColorBG] = useState('#FFFFFF')

    const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
        if(url === ''){
            alert("entrer l'url svp")
            return
        }
        const colorQR = {
            light:{colorBG},
            dark:{colorF}
        }
		QRCode.toDataURL(url, {
            width:300,
            margin:"0",
            color:{
                light:colorQR["light"]["colorBG"],
                dark:colorQR['dark']['colorF']
            }
        	}, (err, url) => {
			if (err) return console.error(err)
			setQr(url)
		})
	}

    return (
      <div>
        <div>
            <Row md={1} lg={1} sm={1} style={{minWidth:"35vw"}}   >
                <Col className=' my-3'>
                    <Form>
                <FormGroup>
                    <Label for="value">
                    Entrer la valeur
                    </Label>
                    <Input type='text' value={url} placeholder='https://www.google.com/'  onChange={(e)=>{
                        setUrl(e.target.value);
                    }}  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="colorF">
                        Color F
                        </Label>
                        <Input
                        id="colorF"
                        name="colorF"
                        type="color"
                        value={colorF}
                        onChange={(e)=>{
                            setColorF(e.target.value);
                        }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="colorBG">
                        Color BG
                        </Label>
                        <Input
                        id="colorBG"
                        name="colorBG"
                        type="color"
                        value={colorBG}
                        onChange={(e)=>{
                            setColorBG(e.target.value);
                        }}
                        />
                    </FormGroup>
                </Form>
                <div className=' text-center'>
                        <Button  onClick={GenerateQRCode} color="primary" outline >
                            Generate QR Code
                        </Button>
                    </div>
                </Col>
                <Col xs="auto" className='d-flex justify-content-center align-items-lg-center mt-4' style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                    <div>
                        {qr && <div className="text-center d-flex flex-column gap-3"><img src={qr} /> <a href= {qr} download={"qr-code.png"} >Download</a></div>}
                    </div>
                </Col>
            </Row>
        </div>
      </div>
    )
  }
  
  export default GenerateQRcode