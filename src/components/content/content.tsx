import { useEffect } from 'preact/hooks';
import './content.css';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
export function Content() {
  useEffect(() => {
    const url = import.meta.env.VITE_LOCAL_URL_BACKEND;
    axios
      .get(`${url}/event/all`)
      .then(response => {
        console.log('test');

        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <Container fluid className="testClass">
      <Row>
        <Col sm={12} lg={6}>
          1 of 1
        </Col>
        <Col sm={12} lg={6}>
          1 of 1
        </Col>
      </Row>
    </Container>
  );
}
