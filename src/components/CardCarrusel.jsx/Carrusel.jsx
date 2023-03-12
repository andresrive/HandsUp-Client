import { Carousel, Card } from "react-bootstrap";
export default function Carrusel () {
    return(
        <div className="container mt-4">
        <Carousel>
          <Carousel.Item>
            <div className="row">
              <div className="col">
                <Card>
                  <Card.Img variant="top" src="imagen1.jpg" />
                  <Card.Body>
                    <Card.Title>Título 1</Card.Title>
                    <Card.Text>Texto de la tarjeta 1</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img variant="top" src="imagen2.jpg" />
                  <Card.Body>
                    <Card.Title>Título 2</Card.Title>
                    <Card.Text>Texto de la tarjeta 2</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img variant="top" src="imagen3.jpg" />
                  <Card.Body>
                    <Card.Title>Título 3</Card.Title>
                    <Card.Text>Texto de la tarjeta 3</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col">
                <Card>
                  <Card.Img variant="top" src="imagen4.jpg" />
                  <Card.Body>
                    <Card.Title>Título 4</Card.Title>
                    <Card.Text>Texto de la tarjeta 4</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img variant="top" src="imagen5.jpg" />
                  <Card.Body>
                    <Card.Title>Título 5</Card.Title>
                    <Card.Text>Texto de la tarjeta 5</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img variant="top" src="imagen6.jpg" />
                  <Card.Body>
                    <Card.Title>Título 6</Card.Title>
                    <Card.Text>Texto de la tarjeta 6</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )
}