import EnjoyTravel from "../../assets/EnjoyTravel.avif";
import Backpack from "../../assets/backpack.avif";
import Search from "../../assets/search.avif";

export default function CardsPacks() {
  return (
    <div className="container mt-5 custom-container">
      <div className="row">
        <div className="col mx-5">
          <div className="card text-center rounded-4">
            <img
              src={Search}
              className="card-img-top card-img-small p-3"
              alt="Imagen 1"
            />
            <div className="card-body">
              <h5 className="card-title">Search Your Pack</h5>
              <p className="card-text">
                Find your perfect pack by browsing through our destinations and
                we'll take care of the rest!
              </p>
            </div>
          </div>
        </div>
        <div className="col mx-5">
          <div className="card text-center rounded-4">
            <img src={Backpack} className="card-img-top p-4" alt="Imagen 2" />
            <div className="card-body">
              <h5 className="card-title">Prepare Your BackPack</h5>
              <p className="card-text">
                Get ready for your trip by packing smart and light, and dont'
                forget your Passport!
              </p>
            </div>
          </div>
        </div>
        <div className="col mx-5">
          <div className="card text-center rounded-4">
            <img src={EnjoyTravel} className="card-img-top p-3" alt="Imagen 3" />
            <div className="card-body">
              <h5 className="card-title">Enjoy It!</h5>
              <p className="card-text">
                Embark on a journey of a lifetime with a group of like-minded
                adventurers, and just enjoy it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
