import { useEffect, useState } from "react";
import routeService from "../../services/route.service";
import Navbar from '../../components/Navbar/Navbar';
import { Link } from "react-router-dom";

function PackPage() {
    const [packs, setPacks] = useState([]);


    useEffect(() => {
        routeService.getAllPacks()
            .then(response => {
                setPacks(response.data)
            })

    }, []);


    return (
        <>
            <Navbar />
            <div>
                <h1>All packs</h1>
                {packs.map(pack => {
                    return (
                        <div key={pack._id} class="card" style={{ width: "18rem" }}>
                            <img src={pack.images} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{pack.title}</h5>
                                <p class="card-text">{pack.author}</p>
                                <p class="card-text">{pack.date}</p>
                                <p class="card-text">{pack.description}</p>
                                <p class="card-text"> Itinerary: {pack.itinerary}</p>
                                <p class="card-text"> {pack.price}</p>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">{pack.participants}</li>
                                    {/* <li class="list-group-item">A list item</li>
                                    <li class="list-group-item">A list item</li> */}
                                </ol>
                                <Link to={`/packs/${pack._id}`} class="btn btn-primary">View detail</Link>
                                <Link to={`/packs/${pack._id}/edit`} class="btn btn-primary">View edit</Link>
                                <Link to="/packs/create" class="btn btn-primary">View create</Link>
                            </div>
                        </div>)
                })}
            </div>
        </>
    )
}

export default PackPage;