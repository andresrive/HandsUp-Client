

import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import routeService from "../../services/route.service";
import Navbar from "../../components/Navbar/Navbar";
import "./PacksDetailsPage.css";
import { AuthContext } from "../../context/auth.context";
import MyChatComponent from "../../components/talkjs/MyChatComponent";

function PackDetailsPage() {
  const { packId } = useParams();
  
  const handleShowChat = () => {
    
    routeService.joinPack(packId)
    .then(response => {
        console.log("Hola:", response.data)
    })
}

  const { user } = useContext(AuthContext)

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
  }, []);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

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
                <div className="details-text card-text">
                  <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>

                <div className="button-group">
                  {/* <Link to=""> */}
                  <button className="details-button" onClick={handleShowChat} >
                    Join plan
                  </button>
                  {/* </Link> */}
                  {currentUser?.isCompany && <Link to={`/packs/${packId}/edit`}>
                    <button className="details-button">Edit plan</button>
                  </Link>}
                </div>
              </div>
            </div>
            {/* {showChat && <MyChatComponent plan={plan} />} */}
          </div>
        </div>
      }
    </>
  );
}
export default PackDetailsPage;

