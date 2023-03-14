import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import routeService from "../../services/route.service";
import { AuthContext } from "../../context/auth.context";

function PlanDetailsPage() {
    const { planId } = useParams();

    const { user } = useContext(AuthContext)

    const [currentUser, setCurrentUser] = useState(null)
    const [plan, setPlan] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

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
    }, [planId]);

    useEffect(() => {
        if (plan) {
            setIsLoading(false)
        }
    }, [plan])

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    console.log("currentUser", currentUser)
    console.log("PLAN", plan)

    return (<>

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
            {!isLoading && currentUser._id === plan.author._id && <Link to={`/plans/${planId}/edit`}><button>Edit plan</button></Link>}
        </div>

    </>);
}
export default PlanDetailsPage;