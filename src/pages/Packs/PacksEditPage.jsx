// import { useState } from "react"
// import routeService from "../../services/route.service"
// import { useNavigate, Link, useParams } from "react-router-dom"
// // import MyEditor from "../../components/CKEDITOR/MyEditor"
// import MyCkEditor from "../../inputEditor/MyCkEditor";
// import Navbar from "../../components/Navbar/Navbar"


// export default function PackEditPage() {

//     const { packId } = useParams()

//     /* const navigate = useNavigate()

//     const [title, setTitle] = useState("")
//     const [description, setDescription] = useState("")
//     const [images, setImages] = useState("")
//     const [date, setDate] = useState("")


//     const handleSubmit = (e) => {
//         e.preventDefault()
//         routeService.updateOnePlan(packId, { title, description, images, date })
//             .then(result => {
//                 setTitle("")
//                 setDescription("")
//                 setImages("")
//                 setDate("")
//                 navigate(`/packs/${packId}`)
//             })
//             .catch(err => console.log(err))

//     }
//     console.log(packId)
//     const deleteHandler = (planId) => {
//         routeService.deletePack(planId)
//             .then(response => navigate("/packs"))
//             .catch(err => console.log(err))
//     }
//  */
//     return (
//         <>
//         <Navbar />
//         <MyCkEditor />
//         </>
//     )
// }