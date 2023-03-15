import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import routeService from "../../services/route.service";
import Navbar from "../../components/Navbar/Navbar";
import "./PlanDetailsPage.css";
import { AuthContext } from "../../context/auth.context";
import MyChatComponent from "../../components/talkjs/MyChatComponent";

function PlanDetailsPage() {
    const { planId } = useParams();
    const [showChat, setShowChat] = useState(false);
    const handleShowChat = () => {
        if (currentUser) {
            setShowChat(!showChat);
        }
        else {

        }
        /* routeService.joinPlan(planId)
        .then(response => {
            console.log("Hola:", response)
        }) */

    }

    const { user } = useContext(AuthContext)

    /*     const [isLoggedIn, setIsLoggedIn] = useState(false) */
    const [currentUser, setCurrentUser] = useState(null)
    const [plan, setPlan] = useState(0);
    const [loading, setLoading] = useState(true)

    //   const [plan, setPlan] = useState({});

    const [html, setHtml] = useState("");
    useEffect(() => {
        setHtml(plan.description);
    }, [plan.description]);

    useEffect(() => {
        routeService.getOnePlan(planId)
            .then((result) => {
                setPlan(result.data);
                setLoading(false)
            })
            .catch((err) => console.log(err));
    }, []);


    /*  useEffect(() => {
         if (plan !== 0) {
             setIsLoading(false)
         }
     }, [isLoading]) */

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    /* useEffect(() => {
        setIsLoggedIn(true)
      }, [user]); */

    console.log("currentUser", user)
    console.log("PLAN", plan)

    return (
        <>
            <Navbar />
            {!loading &&
                <div className="details-container">
                    <div className="details-Page">
                        <div className="card">
                            <img
                                src={plan.images}
                                className="details-img card-img-top mx-auto"
                                alt={plan.title}
                            />
                            <div className="details-body card-body">
                                <h5 className="details-title card-title">{plan.title}</h5>
                                <h6><i>{plan.destination}</i></h6>
                                <div className="details-text card-text">
                                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                                </div>
                                <p>{plan.fromDate} / {plan.toDate}</p>
                                <p>`There are {plan.participants.length}` people in this plan</p>
                                <div className="button-group">
                                    {/* <Link to=""> */}
                                    {/* {isLoggedIn && currentUser && */}
                                    <button className="details-button" onClick={handleShowChat}>
                                        Join plan
                                    </button>
                                    {/* </Link> */}
                                    {user?._id === plan.author._id && <Link to={`/plans/${planId}/edit`}>
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
                </div>}
        </>
    );
}


export default PlanDetailsPage;
