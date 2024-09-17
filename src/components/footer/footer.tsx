import { Container, Row, Col } from 'react-bootstrap';

export function MyFooter() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5 style={"font-family:'starWars'"}>About us</h5>
            <p>We are a leading company in our field, providing top-quality services to our clients.</p>
          </Col>
          <Col md={6}>
            <h5 style={"font-family:'starWars'"}>Contact us</h5>
            <p>
              Email: info@example.com <br />
              Phone: +1 123 456 7890
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
