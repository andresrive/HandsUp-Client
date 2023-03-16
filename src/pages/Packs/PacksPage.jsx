
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import routeService from "../../services/route.service";
import Navbar from "../../components/Navbar/Navbar";
import "./PacksPage.css";
import PackImage from "../../assets/playa-packs.jpeg";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function PacksPage() {
  const [packs, setPacks] = useState([]);

  const [filteredPacks, setFilteredPacks] = useState("");

  useEffect(() => {
    routeService.getAllPacks().then((response) => {
      setPacks(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div class="packPage-container">
        <img src={PackImage} alt="imageHome" />
        <div class="search-bar-container">
          <SearchBar plans={packs} setFilteredPlans={setFilteredPacks} />
        </div>
      </div>
      <div className="pack-container container-page row row-cols-1 row-cols-md-5 g-4 me-5 ms-5 mt-4">
        {(filteredPacks || packs).map((pack) => (
          <div key={pack._id} className="col">
            <div className="card h-100">
              <img
                src={pack.images}
                className="card-img-top"
                alt={pack.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{pack.title}</h5>
                <p className="card-text">{pack.destination}</p>
                <p className="card-text">{pack.toDate}</p>
                <p className="card-text">{pack.author}</p>
                <p className="card-text">{pack.date}</p>
                <div dangerouslySetInnerHTML={{ __html: pack.description }}></div>
                <p className="card-text"> {pack.price} Euros</p>
                <Link to={`/packs/${pack._id}`} className=" btn-details">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
