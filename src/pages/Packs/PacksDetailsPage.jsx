import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import routeService from "../../services/route.service";
import Navbar from "../../components/Navbar/Navbar";
import "./PacksDetailsPage.css";
import { AuthContext } from "../../context/auth.context";
import LoginModal from "../../components/Modal/LoginModal";
import AlertPackJoin from "../../components/Alert/AlertPackJoin";

function PackDetailsPage() {
  const { packId } = useParams();

  const handleShowChat = () => {

    routeService.joinPack(packId)
      .then(response => {
        console.log("Hola:", response.data)
      })

    handleShowLogin()
  }

  const { user, isLoggedIn } = useContext(AuthContext)

  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [pack, setPack] = useState(0);


  const [html, setHtml] = useState("");
  useEffect(() => {
    setHtml(pack.description);
  }, [pack.description]);

  useEffect(() => {
    routeService
      .getOnePack(packId)
      .then((result) => {
        setPack(result.data);
        setLoading(false)
      })
      .catch((err) => console.log(err));
    /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLogin = () => {
    setShowLoginModal(true)
  };
  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <Navbar />
      {!loading &&
        <div className="details-container">
          <div className="details-Page">
            <div className="card">
              <img
                src={pack.images[0]}
                className="details-img card-img-top mx-auto"
                alt="..."
              />
              <div className="details-body card-body">
                <h5 className="details-title card-title">{pack.title}</h5>
                <h6><i>{pack.destination}</i></h6>
                <div className="details-text card-text">
                  <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
                <div><p>From: {pack.fromDate} / To: {pack.toDate}</p></div>
                <div><p>There are {pack.participants.length} people enrolled in this pack</p></div>
                <div><p>Price: {pack.price}€</p></div>
                <div className="button-group">

                  <button className="details-button" onClick={handleShowChat} >
                    Join plan
                  </button>
                  {isLoggedIn ? (<AlertPackJoin showModal={showLoginModal} setShowModal={handleLoginClose} />) : (<LoginModal showModal={showLoginModal} setShowModal={handleLoginClose} />)}
                  {currentUser?.isCompany && <Link to={`/packs/${packId}/edit`}>
                    <button className="details-button">Edit plan</button>
                  </Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
export default PackDetailsPage;
