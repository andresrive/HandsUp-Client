import Enjoy from '../../assets/enjoy.avif'
import Meet from '../../assets/meet.avif'
import Create from '../../assets/create-plan.jpeg'

export default function CardsPacks () {
    return (
        <div className="container mt-5 custom-container">
        <div className="row">
          <div className="col mx-5">
            <div className="card text-center shadow">
              <img src={Create} className="card-img-top card-img-small" alt="Imagen 1" />
              <div className="card-body">
                <h5 className="card-title">Search Your Pack</h5>
                <p className="card-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-5">
            <div className="card text-center shadow">
              <img src={Meet} className="card-img-top" alt="Imagen 2" />
              <div className="card-body">
                <h5 className="card-title">Prepare Your BackPack</h5>
                <p className="card-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-5">
            <div className="card text-center shadow">
              <img src={Enjoy} className="card-img-top" alt="Imagen 3" />
              <div className="card-body">
                <h5 className="card-title">Enjoy It!</h5>
                <p className="card-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}