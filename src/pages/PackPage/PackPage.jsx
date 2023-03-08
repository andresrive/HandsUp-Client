import axios from "axios";
import { useEffect, useState } from "react";
import exampleService from "../../services/example.service";

function PackPage (){
    const [packs, setPacks] = useState();
    

    useEffect(()=> {
        axios.get(exampleService.getAll())
        .then(response => {
            console.log(response.data)
            setPacks(response.data)
        })
        .catch(err => console.log(err))
    })
    return(
        <div>
        
        </div>
    )
}

export default PackPage;