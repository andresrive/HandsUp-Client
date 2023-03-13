import { useEffect, useState } from "react";
import routeService from "../../services/route.service";
import Navbar from '../../components/Navbar/Navbar'

function PacksPage (){
    const [packs, setPacks] = useState([]);
    

    useEffect(()=> {
        routeService.getAllPacks()
        .then(response => {
            console.log(response.data)
            setPacks(response.data)
        })
        .catch(err => console.log(err))
    },[])
    return(
        <>
        <Navbar/>
        <div>
        <h1>Packages</h1>
        </div>
        </>
    )
}

export default PacksPage;