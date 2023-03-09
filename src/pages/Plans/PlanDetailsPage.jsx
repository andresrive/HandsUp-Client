import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PlanDetailsPage() {
  const { planId } = useParams();
  const [plan, setPlan] = useState({});

  useEffect(() => {
    axios
      .get(`https://localhost:5005/plans/${planId}`)
      .then((result) => {
        setPlan(result.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="card mb-3">
      <img src={plan.image} className="card-img-top mx-auto" alt={plan.title}  style={{ width: "200px", height: "500px" }}/>
      <div className="card-body">
        <h5 className="card-title">Name: {plan.title}</h5>
        <p className="card-text">{plan.description}</p>
        <p className="card-text">
          <strong>Description:</strong> {plan.description}
        </p>
      </div>
    </div>
  );
}
export default PlanDetailsPage;