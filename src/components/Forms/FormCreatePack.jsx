import { useState } from "react";
import { uploadImage, addAvatar } from "../../services/upload.service.js"
import { useNavigate } from "react-router-dom"

import Calendar from '../Calendar'


export default function FormCreatePack() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState("");
    const [date, setDate] = useState("");
    const [destination, setDestination] = useState("");
    const [price, setPrice] = useState("");
    const [itinerary, setItinerary] = useState("");

    

    const [selectedRange, setSelectedRange] = useState('');
    const [fromDate, setfromDate] = useState('');
    const [toDate, settoDate] = useState('');

    const handleRangeChange = (selectedRange, fromDate, toDate) => {
        setSelectedRange(selectedRange);
        setfromDate(fromDate);
        settoDate(toDate);
    }


    const navigate = useNavigate()

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

        console.log("handleSubmit: ", e)
        console.log("DATE TO:", fromDate)
        console.log("DATE FROM:", toDate)

        addAvatar({ title, description, images, destination, price, itinerary })
            //importar la date de calendar?
            .then(res => {
                setTitle("")
                setDescription("")
                setImages("")
                setDate("")
                setDestination("")
                setPrice("")
                setItinerary("")
                navigate("/packs")

            })
            .catch(err => console.log("Error while adding the new movie: ", err))

    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="floatingTitle">Title</label>
            </div>
            <div className="form-floating">
                <textarea type="text" className="form-control" id="floatingDescription" style={{ height: 100 }} value={description} onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor="floatingDescription">Description</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingTitle" value={itinerary} onChange={(e) => setItinerary(e.target.value)} />
                <label htmlFor="floatingTitle">Itinerary</label>
            </div>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Add your image here</label>
                <input className="form-control" type="file" onChange={(e) => handleFileUpload(e)} id="formFileMultiple" name="images" />
            </div>
            <div className="mb-3">
                <Calendar onRangeChange={handleRangeChange} />
                {/* <label htmlFor="formDate" className="form-label">Add a date</label>
                <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} id="formDate" /> */}
            </div>
            <div className="mb-3">
                <label htmlFor="formPrice" className="form-label">Add the price trip</label>
                <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} id="formPrice" name="price" />
            </div>
            <div className="mb-3">
                <label htmlFor="formDestination" className="form-label">Add a destination</label>
                <input className="form-control" type="text" value={destination} onChange={(e) => setDestination(e.target.value)} id="formDestination" />
            </div>
        
            <button type="submit" className="btn btn-info">Create plan</button>
        </form>
    </>)
}
