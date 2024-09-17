import { useEffect } from 'preact/hooks';
import './content.css';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
export function Content() {
  useEffect(() => {
    const url = import.meta.env.VITE_LOCAL_URL_BACKEND;
    axios
      .get(`${url}/event/all`)
      .then(response => {})
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <Container fluid className="content">
      <h2 class="section__title">
        <span>#</span> About us <span>#</span>
      </h2>
      <Row style="height:100%">
        <Col className={'content-center'} sm={12} lg={6}>
          <div className="content__image">
            <img src="/stw.jpg" alt="main_img" />
          </div>
        </Col>
        <Col className={'content-center'} sm={12} lg={6}>
          <p>
            Notre groupe de cosplay est né de la passion commune pour l’univers épique de Star Wars.Composé de fans dévoués, nous incarnons
            une large variété de personnages emblématiques, des courageux Jedi aux redoutables Sith, en passant par des chasseurs de primes,
            des stormtroopers et des créatures légendaires. Chaque costume est minutieusement conçu pour rendre hommage à cet univers culte,
            mêlant créativité et souci du détail. Nous participons à des conventions, des événements caritatifs et des rassemblements de
            fans, avec pour mission de partager notre amour pour Star Wars et d’offrir une immersion totale à tous ceux qui croisent notre
            chemin. Que vous soyez un fan de la première heure ou que vous découvriez l’univers, notre objectif est de faire revivre les
            batailles épiques et les alliances héroïques qui font la magie de cette saga légendaire. Rejoignez-nous et que la Force soit
            avec vous !
          </p>
        </Col>
      </Row>
    </Container>
  );
}
