import { useState } from "react"
import routeService from "../../services/route.service"
import { useNavigate, Link, useParams } from "react-router-dom"


export default function PlanEditPage() {

    const { planId } = useParams()

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState("")
    const [date, setDate] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        routeService.updateOnePlan(planId, { title, description, images, date })
            .then(result => {
                setTitle("")
                setDescription("")
                setImages("")
                setDate("")
                navigate(`/plans/${planId}`)
            })
            .catch(err => console.log(err))

    }
    console.log(planId)
    const deleteHandler = (planId) => {
        routeService.deletePlan(planId)
            .then(response => navigate("/plans"))
            .catch(err => console.log(err))
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
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Add your images here</label>
                <input className="form-control" type="text" value={images} onChange={(e) => setImages(e.target.value)} id="formFileMultiple" />
            </div>
            <div className="mb-3">
                <label htmlFor="formDate" className="form-label">Add a date</label>
                <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} id="formDate" />
            </div>
            <button className="btn btn-info" type="submit">Edit plan</button>
            <Link to={`/plans/${planId}`}><button className="btn btn-warning">Go back</button></Link>
            <button className="btn btn-danger" type="button" onClick={() => deleteHandler(planId)}>Delete plan</button>
        </form>
    </>)
}