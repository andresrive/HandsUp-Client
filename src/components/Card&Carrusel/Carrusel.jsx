// import { Carousel, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import routeService from "../../services/route.service";
// import './Carrusel.css'

// export default function Carrusel() {
//   const [plans, setPlans] = useState([]);
//   useEffect(() => {
//     routeService.getAllPlans().then((response) => {
//       setPlans(response.data);
//     });
//   }, []);
//   return (

//       <div className="container-carrusel mt-4">
//         <Carousel slideToShow={4} slideToScroll={4}>
//           {plans.map((plan) => (
//             <Carousel.Item key={plan.id}>
//               <div className="row-carrusel">
//                 <div className="col-carrusel">
//                   <Card>
//                     <Link to={`/plans/${plan._id}`}>
//                       <Card.Img
//                         className="card-img-full-height-carrusel"
//                         variant="top"
//                         src={plan.images}
//                       />
//                     </Link>
//                   </Card>
//                 </div>
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     );
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import routeService from "../../services/route.service";
import "./Carrusel.css";

export default function Carrusel() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    routeService.getAllPlans().then((response) => {
      setPlans(response.data);
    });
  }, []);

  return (
    <div className="container-carrusel mt-4">
      <Carousel>
        <Carousel.Item>
          <div className="d-flex flex-row">
            {plans.slice(0, 4).map((plan) => (
              <div
                key={plan.id}
                className="col-carrusel"
                style={{ width: "25%" }}
              >
                <Card>
                  <Link to={`/plans/${plan._id}`}>
                    <Card.Img
                      className="card-img-full-height-carrusel"
                      variant="top"
                      src={plan.images}
                    />
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-row">
            {plans.slice(4, 8).map((plan) => (
              <div
                key={plan.id}
                className="col-carrusel"
                style={{ width: "25%" }}
              >
                <Card>
                  <Link to={`/plans/${plan._id}`}>
                    <Card.Img
                      className="card-img-full-height-carrusel"
                      variant="top"
                      src={plan.images}
                    />
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
