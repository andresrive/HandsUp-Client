import { Carousel, Card } from "react-bootstrap";

export default function Carrusel () {
    return(
        <div className="container mt-4">
        <Carousel>
          <Carousel.Item>
            <div className="row">
              <div className="col">
                <Card>
                  <Card.Img className="card-img-full-height" variant="top" src="https://via.placeholder.com/250x400" />
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img className="card-img-full-height" variant="top" src="https://via.placeholder.com/250x400" />
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img className="card-img-full-height" variant="top" src="https://via.placeholder.com/250x400" />
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img className="card-img-full-height" variant="top" src="https://via.placeholder.com/250x400" />
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col">
                <Card>
                  <Card.Img className="card-img-full-height" variant="top" src="https://via.placeholder.com/250x400" />
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img className="card-img-full-height" variant="top" src="https://via.placeholder.com/250x400" />
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img className="card-img-full-height" variant="top" src="https://via.placeholder.com/250x400" />
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Img className="card-img-full-height" variant="top" src="https://via.placeholder.com/250x400" />
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )
}