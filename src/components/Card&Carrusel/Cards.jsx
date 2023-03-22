import Enjoy from "../../assets/enjoy.avif";
import Meet from "../../assets/meet.avif";
import Create from "../../assets/create-plan.jpeg";

export default function Cards() {
  return (
    <div className="container mt-5 custom-container">
      <div className="row">
        <div className="col mx-5">
          <div className="card text-center rounded-4">
            <img
              src={Create}
              className="card-img-top card-img-small p-3"
              alt="Imagen 1"
            />
            <div className="card-body ">
              <h5 className="card-title">Create Your Plan</h5>
              <p className="card-text">
                Take charge of your travel experience by creating your own plan,
                let your imagination run wild!
              </p>
            </div>
          </div>
        </div>
        <div className="col mx-5">
          <div className="card text-center rounded-4">
            <img src={Meet} className="card-img-top p-3" alt="Imagen 2" />
            <div className="card-body">
              <h5 className="card-title">Meet New People</h5>
              <p className="card-text">
                Connect with fellow travelers who share your interests and
                passions and make lifelong memories together!
              </p>
            </div>
          </div>
        </div>
        <div className="col mx-5">
          <div className="card text-center rounded-4">
            <img src={Enjoy} className="card-img-top p-3" alt="Imagen 3" />
            <div className="card-body">
              <h5 className="card-title">Enjoy It!</h5>
              <p className="card-text">
                From exploring new places to trying new foods, every moment is
                an opportunity to have fun!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
