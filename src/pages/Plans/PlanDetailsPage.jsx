import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import routeService from "../../services/route.service";

function PlanDetailsPage() {
    const { planId } = useParams();

    console.log("PARAMS details", planId)

    const [plan, setPlan] = useState({});

    const [html, setHtml] = useState("")
    useEffect(() => {
        setHtml(plan.description)
    }, [plan.description])

    useEffect(() => {
        routeService.getOnePlan(planId)
            .then((result) => {
                setPlan(result.data);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className="card mb-3">
            <img src={plan.images} className="card-img-top mx-auto" alt={plan.title} style={{ width: "200px", height: "200px" }} />
            <div className="card-body">
                <h5 className="card-title">Name: {plan.title}</h5>
                <div className="card-text">
                    <p><strong>Description:</strong></p>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>
            {/* <Modal /> */}
            <Link to={`/plans/${planId}/edit`}><button>Edit plan</button></Link>
        </div>
    );
}
export default PlanDetailsPage;