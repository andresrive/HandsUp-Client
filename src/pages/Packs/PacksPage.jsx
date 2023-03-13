import { useEffect, useState } from "react";
import routeService from "../../services/route.service";
import Navbar from '../../components/Navbar/Navbar'

function PackPage (){
    const [packs, setPacks] = useState();
    

    useEffect(()=> {
        axios.get(routeService.getAll())
        .then(response => {
            console.log(response.data)
            setPacks(response.data)
        })
        .catch(err => console.log(err))
    })
    return(
        <>
        <Navbar/>
        <div>
        
        </div>
        </>
    )
}

export default PackPage;