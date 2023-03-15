// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import routeService from "../../services/route.service";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";

// function PacksDetailsPage() {
//     const { packId } = useParams();
//     const [packs, setPacks] = useState({})

//     useEffect(() => {
//         routeService.getOnePack(packId)
//             .then((result) => {
//                 setPacks(result.data);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     return(<>
//         <Navbar />
   
//         <div class="container mt-5">
//             <div class="row">
//                 <div class="col-lg-8">
//                     <article>

//                         <header class="mb-4">
                            
//                             <h1 class="fw-bolder mb-1">{packs.title}</h1>
                            
//                             <div class="text-muted fst-italic mb-2">Posted on January 1, 2022 by Start Bootstrap</div>
                            
//                             <Link class="badge bg-secondary text-decoration-none link-light" to="#">Home Page</Link>
//                             <Link class="badge bg-secondary text-decoration-none link-light" to="/packs">Package Page</Link>
//                         </header>
                        
//                         <figure class="mb-4"><img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                        
//                         <section class="mb-5">
//                             <p class="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
//                             <p class="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
//                             <p class="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
//                             <h2 class="fw-bolder mb-4 mt-5">ITINERARY</h2>
//                             <p class="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
//                             <p class="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
//                         </section>
//                     </article>
                    
//                     <section class="mb-5">
//                         <div class="card bg-light">
//                             <div class="card-body">
                                
//                                 <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                
//                                 <div class="d-flex mb-4">
                                    
//                                     <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
//                                     <div class="ms-3">
//                                         <div class="fw-bold">Commenter Name</div>
                                        
//                                         <div class="d-flex mt-4">
//                                             <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
//                                             <div class="ms-3">
//                                                 <div class="fw-bold">Commenter Name</div>
//                                                 And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
//                                             </div>
//                                         </div>
                                        
//                                         <div class="d-flex mt-4">
//                                             <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
//                                             <div class="ms-3">
//                                                 <div class="fw-bold">Commenter Name</div>
//                                                 When you put money directly to a problem, it makes a good headline.
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <div class="d-flex">
//                                     <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
//                                     <div class="ms-3">
//                                         <div class="fw-bold">Commenter Name</div>
//                                         When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
                
//                 <div class="col-lg-4">
                    
//                     <div class="card mb-4">
//                         <div class="card-header">Search</div>
//                         <div class="card-body">
//                             <div class="input-group">
//                                 <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
//                                 <button class="btn btn-primary" id="button-search" type="button">Go!</button>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div class="card mb-4">
//                         <div class="card-header">Categories</div>
//                         <div class="card-body">
//                             <div class="row">
//                                 <div class="col-sm-6">
//                                     <ul class="list-unstyled mb-0">
//                                         <li><a href="#!">Web Design</a></li>
//                                         <li><a href="#!">HTML</a></li>
//                                         <li><a href="#!">Freebies</a></li>
//                                     </ul>
//                                 </div>
//                                 <div class="col-sm-6">
//                                     <ul class="list-unstyled mb-0">
//                                         <li><a href="#!">JavaScript</a></li>
//                                         <li><a href="#!">CSS</a></li>
//                                         <li><a href="#!">Tutorials</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div class="card mb-4">
//                         <div class="card-header">Side Widget</div>
//                         <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
        
// }

// export default PacksDetailsPage;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import routeService from "../../services/route.service";
import Navbar from "../../components/Navbar/Navbar";
import "./PacksDetailsPage.css";
import MyChatComponent from "../../components/talkjs/MyChatComponent";

function PlanDetailsPage() {
//   const [showChat, setShowChat] = useState(false);
//   const handleShowChat = () => {
//     setShowChat(!showChat);
//   };
  const { packId } = useParams();


  const [pack, setPack] = useState({});

  const [html, setHtml] = useState("");
  useEffect(() => {
    setHtml(pack.description);
  }, [pack.description]);

  useEffect(() => {
    routeService
      .getOnePack(packId)
      .then((result) => {
        setPack(result.data);
      })
      .catch((err) => console.log(err));
  }, [packId]);

  return (
    <>
      <Navbar />
      <div className="details-container">
      <div className="details-Page">
        <div className="card">
          <img
            src={pack.images}
            className="details-img card-img-top mx-auto"
            alt={pack.title}
          />
          <div className="details-body card-body">
            <h5 className="details-title card-title">Name: {pack.title}</h5>
            <div className="details-text card-text">
              <p>
                <strong>Description:</strong>
              </p>
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
            <div className="button-group">
              {/* <Link to=""> */}
                <button className="details-button" /*onClick={handleShowChat}*/>
                  Join plan
                </button>
              {/* </Link> */}
              <Link to={`/packs/${packId}/edit`}>
                <button className="details-button">Edit plan</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* {showChat && <MyChatComponent plan={plan} />} */}
      </div>
    </>
  );
}
export default PlanDetailsPage;

