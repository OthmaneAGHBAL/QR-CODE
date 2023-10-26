import {Card,CardTitle,CardBody,CardText,Col,Row} from 'reactstrap'
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div>
      <Row lg={2} className='text-center justify-content-center'>
              <Col className='d-flex justify-content-center'>
              <Link
              to={"/generate"}
              className=' text-decoration-none'
              >
              <Card
                  className="my-2 shadow border-0 card-hover-effect"
                  style={{
                    width: '18rem'
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">
                      GENERATE
                    </CardTitle>
                    <CardText>
                    Create personalized QR codes by selecting your desired content and color scheme
                    </CardText>
                  </CardBody>
                </Card>
                </Link>
              </Col>
              <Col className='d-flex justify-content-center'>
              <Link
              to={"/scan"}
              className=' text-decoration-none'
              >
                  <Card
                  className="my-2 shadow border-0 card-hover-effect"
                  style={{
                    width: '18rem'
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">
                      SCAN
                    </CardTitle>
                    <CardText>
                      Unlock the hidden content of QR codes with a quick scan using your device's camera.
                    </CardText>
                  </CardBody>
                </Card>
                </Link>
              </Col>
            </Row>
    </div>
  )
}

export default Home
