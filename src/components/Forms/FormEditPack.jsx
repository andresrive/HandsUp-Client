import { useContext, useEffect, useState } from "react"
import routeService from "../../services/route.service"
import { useNavigate, Link } from "react-router-dom"
import { uploadImage } from "../../services/upload.service"
import { AuthContext } from "../../context/auth.context"
import Calendar from '../Calendar'
import MyCkEditor from "../../inputEditor/MyCkEditor";
import './FormEditPack.css'
import Navbar from "../Navbar/Navbar"

export default function FormEditPack({ packId }) {

    // const { user } = useContext(AuthContext)

    // const [currentUser, setCurrentUser] = useState(null)

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState("")
    const [toDate, settoDate] = useState("")
    const [fromDate, setfromDate] = useState("")
    const [destination, setDestination] = useState("")
    const [price, setPrice] = useState("")
    const [selectedRange, setSelectedRange] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        routeService.getOnePack(packId)
            .then(response => {
                setTitle(response.data.title)
                setDescription(response.data.description)
                setImages(response.data.images)
                settoDate(response.data.toDate)
                setfromDate(response.data.fromDate)
                setDestination(response.data.destination)
                setPrice(response.data.price)
                setIsLoading(false)
            })
            .catch(err => console.log("Error al buscar un pack", err))
    }, [])

    const handleRangeChange = (selectedRange, fromDate, toDate) => {
        setSelectedRange(selectedRange);
        setfromDate(fromDate);
        settoDate(toDate);
    }

    const descriptionHandler = (content) => {
        setDescription(content)
        console.log(description)
    }

    const handleFileUpload = (e) => {


        const uploadData = new FormData();
        uploadData.append("images", e.target.files[0]);



        uploadImage(uploadData)
            .then(response => {
                console.log("response is: ", response);
                // response carries "fileUrl" which we can use to update the state
                setImages(response.fileUrl);
            })
            .catch(err => console.log("Error while uploading the file: ", err));
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        routeService.updateOnePack(packId, { title, description, images, fromDate, toDate, destination, price })
            .then(result => {
                setTitle("")
                setDescription("")
                setImages("")
                settoDate("")
                setfromDate("")
                setDestination("")
                setPrice("")
                navigate(`/packs/${packId}`)
            })
            .catch(err => console.log(err))

    }

    const deleteHandler = (packId) => {
        routeService.deletePlan(packId)
            .then(response => navigate("/packs"))
            .catch(err => console.log(err))
    }

    // console.log("USER", user)

    // console.log("AUTHOR",)


    return (
        <>
            {!isLoading &&
                <>
                    <Navbar />
                    <div className="form-container-packs mt-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating-packs  all-mb mb-3">
                                <label className="form-label-packs" htmlFor="floatingTitle">Title</label>
                                <input
                                    type="text"
                                    className="form-control-packs"
                                    id="floatingTitle"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="form-floating-packs  all-mb mb-3">
                                <label className="form-label-packs">Description</label>
                                <MyCkEditor descriptionHandler={descriptionHandler} />
                            </div>

                            <div className="row-packs">
                                <div className="col-packs  all-mb mb-3">
                                    <label htmlFor="formFileMultiple" className="form-label-packs">
                                        Add your image here
                                    </label>
                                    <input
                                        className="form-control-packs"
                                        type="file"
                                        onChange={(e) => handleFileUpload(e)}
                                        id="formFileMultiple"
                                        name="images"
                                    />
                                </div>

                                <div className="col-packs  all-mb mb-3">
                                    <label className="form-label-packs">Select a date range</label>
                                    <Calendar onRangeChange={handleRangeChange} dateTo={toDate} dateFrom={fromDate} />
                                </div>
                            </div>

                            <div className=" all-mb-packs mb-3">
                                <label htmlFor="formPrice" className="form-label-packs">
                                    Add the price trip
                                </label>
                                <input
                                    className="form-control-packs"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    id="formPrice"
                                    name="price"
                                />
                            </div>

                            <div className="all-mb-packs mb-3">
                                <label htmlFor="formDestination" className="form-label-packs">
                                    Add a destination
                                </label>
                                <input
                                    className="form-control-packs"
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    id="formDestination"
                                />
                            </div>

                            <button type="submit" className="btn-packs">
                                Edit pack
                            </button>
                            <Link to={`/plans/${packId}`}><button>Go back</button></Link>
                            <button className="btn btn-danger" type="button" onClick={() => deleteHandler(packId)}>Delete plan</button>
                        </form>
                    </div>
                </>
            }
        </>
    );
}