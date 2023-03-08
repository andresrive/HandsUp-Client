
import { useEffect, useState } from "react";
import exampleService from "../../services/example.service";

function PackPage() {
    const [packs, setPacks] = useState([]);


    useEffect(() => {
        exampleService.getAll()
            .then(response => {
                console.log(response.data)
                setPacks(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {packs.map(pack => {
                return (
                    <div key={pack._id}>
                        <h1>{pack.title}</h1> <small>{pack.date}</small>
                        <h5>{pack.author}</h5>
                        <p> {pack.description}</p>
                        <img src={pack.images} alt="..." />
                        <article>
                            <span>{pack.itinerary}</span>
                            <p>{pack.destination}</p>
                            <span>{pack.price}{"€"}</span>
                        </article>
                    </div>
                )
            })}
        </div>
    )
}

export default PackPage;