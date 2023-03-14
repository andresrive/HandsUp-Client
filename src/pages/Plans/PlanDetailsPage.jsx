import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import routeService from "../../services/route.service";
import Navbar from "../../components/Navbar/Navbar";
import "./PlanDetailsPage.css";

function PlanDetailsPage() {
  const { planId } = useParams();

  console.log("PARAMS details", planId);

  const [plan, setPlan] = useState({});

  const [html, setHtml] = useState("");
  useEffect(() => {
    setHtml(plan.description);
  }, [plan.description]);

  useEffect(() => {
    routeService
      .getOnePlan(planId)
      .then((result) => {
        setPlan(result.data);
      })
      .catch((err) => console.log(err));
  }, [planId]);

  return (
    <>
      <Navbar />
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
        <Link to= "/">
          <button className="details-button">Join plan</button>
        </Link>
        <Link to={`/plans/${planId}/edit`}>
          <button className="details-button">Edit plan</button>
        </Link>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
export default PlanDetailsPage;
