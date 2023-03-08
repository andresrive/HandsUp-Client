import { useState } from "react";
import { useParams } from "react-router-dom";

function PackCreate() {
    const [pack, setPack] = useState();
    const {packId} = useParams()



    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="mb-3">
            <label for="Input1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="Input1" placeholder="" />
        </div>
        <div className="mb-3">
            <label for="Input2" className="form-label">Title</label>
            <input type="text" className="form-control" id="Input1" placeholder="" />
        </div>
        <div className="mb-3">
            <label for="Input3" className="form-label">Image</label>
            <input type="text" className="form-control" id="Input1" placeholder="" />
        </div>
        <div className="mb-3">
            <label for="Input4" className="form-label">Price</label>
            <input type="number" className="form-control" id="Input1" placeholder="€" />
        </div>
        <div className="mb-3">
            <label for="Input5" className="form-label">itinerary</label>
            <textarea type="text" className="form-control" id="Input5" placeholder=""></textarea>
        </div>
        <div className="mb-3">
            <label for="Textarea1" className="form-label">Description</label>
            <textarea className="form-control" id="Textarea1" rows="3"></textarea>
        </div>

        <button type="submit">Send</button>
        </form>
    )
}

export default PackCreate;