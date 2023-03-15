import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import routeService from "../../services/route.service";
import Navbar from "../../components/Navbar/Navbar";
import "./PlanDetailsPage.css";
import { AuthContext } from "../../context/auth.context";
import MyChatComponent from "../../components/talkjs/MyChatComponent";

function PlanDetailsPage() {
    const [showChat, setShowChat] = useState(false);
    const handleShowChat = () => {
        setShowChat(!showChat);
    };
    const { planId } = useParams();

    const { user } = useContext(AuthContext)

    const [currentUser, setCurrentUser] = useState(null)
    const [plan, setPlan] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

    //   const [plan, setPlan] = useState({});

    const [html, setHtml] = useState("");
    useEffect(() => {
        setHtml(plan.description);
    }, [plan.description]);

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

    return (
        <>
            <Navbar />
            <div className="details-container">
                <div className="details-Page">
                    <div className="card">
                        <img
                            src={plan.images}
                            className="details-img card-img-top mx-auto"
                            alt={plan.title}
                        />
                        <div className="details-body card-body">
                            <h5 className="details-title card-title">Name: {plan.title}</h5>
                            <div className="details-text card-text">
                                <p>
                                    <strong>Description:</strong>
                                </p>
                                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                            </div>
                            <div className="button-group">
                                {/* <Link to=""> */}
                                <button className="details-button" onClick={handleShowChat}>
                                    Join plan
                                </button>
                                {/* </Link> */}
                                {console.log(plan.author._id)}
                                {!isLoading && currentUser._id === plan.author._id && <Link to={`/plans/${planId}/edit`}>

                                    <button className="details-button">Edit plan</button>
                                </Link>}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="chat">
      {showChat && <MyChatComponent plan={plan} />}
        
      </div> */}
                <div className={`chat ${showChat ? "showNow" : ""}`}>
                    {showChat && <MyChatComponent plan={plan} />}
                </div>
            </div>
        </>
    );
}


export default PlanDetailsPage;
