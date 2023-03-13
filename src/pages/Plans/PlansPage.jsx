import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import routeService from '../../services/route.service'
import Navbar from '../../components/Navbar/Navbar'

export default function PlansPage() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    routeService.getAllPlans()
      .then((response) => {
        setPlans(response.data)
      })

  }, [])
  return (
    <>
    <Navbar/>
    <div className='demo-content'>
      <h1>All plans</h1>
      <ul className="list-unstyled">
        {plans.map((plan) => (
          <li key={plan._id} className="media mb-4">
            <img
              src={plan.images}
              alt={plan.title}
              className="mr-3"
              width="100"
              height="250"
            />
            <div className="media-body">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
              <Link to={`/plans/${plan._id}`}>Details</Link>
            </div>
            <hr className="mt-3 mb-0" />

          </li>
        ))}
      </ul>

    </div>
    </>
  );
}
