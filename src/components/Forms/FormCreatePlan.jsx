import { useState } from "react";
import { uploadImage } from "../../services/upload.service";
import { useNavigate } from "react-router-dom";
import routeService from "../../services/route.service";

import "./FormCreatePlan.css";
import Navbar from "../Navbar/Navbar";
import Calendar from "../Calendar";
import MyCkEditor from "../../inputEditor/MyCkEditor";

export default function FormCreatePlan() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [destination, setDestination] = useState("");

  const [selectedRange, setSelectedRange] = useState("");
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");

  const handleRangeChange = (selectedRange, fromDate, toDate) => {
    setSelectedRange(selectedRange);
    setfromDate(fromDate);
    settoDate(toDate);
  };

  const descriptionHandler = (content) => {
    setDescription(content);
    console.log(description);
  };

  // const calendarHandler = (to, from) => {
  //     setfromDate(from)
  //     settoDate(to)
  //     console.log("TO Y FROM", to, from)
  // }

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("images", e.target.files[0]);

    uploadImage(uploadData)
      .then((response) => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImages(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    routeService
      .createPlan({ title, description, images, fromDate, toDate, destination })
      //importar la date de calendar?
      .then((res) => {
        setTitle("");
        setDescription("");
        setImages("");
        setDestination("");
        navigate("/");
      })
      .catch((err) => console.log("Error while adding the new movie: ", err));
  };

  return (
    <>
      <Navbar />
      <div className="form-container-plans mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-floating form-floating-plans">
            <input
              type="text"
              className="form-control form-control-plans"
              id="floatingTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label HtmlFor="floatingTitle">Title</label>
          </div>

          <div className="form-floating form-floating-plans">
            <input
              className="form-control form-control-plans"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              id="formDestination"
            />
            <label HtmlFor="formDestination">Add a destination</label>
          </div>

          <div className="row row-plans">
            <div className="col col-plans">
              <div className="form-floating form-floating-plans">
                <input
                  className="form-control form-control-plans"
                  type="file"
                  onChange={(e) => handleFileUpload(e)}
                  id="formFileMultiple"
                  name="images"
                />
                <label HtmlFor="formFileMultiple">Add your image here</label>
              </div>
            </div>

            <div className="col col-plans ">
              <Calendar onRangeChange={handleRangeChange} />
            </div>
          </div>

          <div className="form-floating form-floating-plans">
            <MyCkEditor descriptionHandler={descriptionHandler} />
          </div>

          <button type="submit" className="btn-plans">
            Create plan
          </button>
        </form>
      </div>
    </>
  );
}
