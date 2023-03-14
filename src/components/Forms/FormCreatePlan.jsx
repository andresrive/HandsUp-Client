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

    console.log("handleSubmit: ", e);
    console.log("DATE TO:", fromDate);
    console.log("DATE FROM:", toDate);

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
      {/* <form onSubmit={handleSubmit}>
            <div classNameName="form-floating mb-3">
                <input type="text" classNameName="form-control" id="floatingTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="floatingTitle">Title</label>
            </div>
            <div classNameName="form-floating">
                <MyCkEditor descriptionHandler={descriptionHandler} />
            </div>
            <div classNameName="mb-3">
                <label htmlFor="formFileMultiple" classNameName="form-label">Add your image here</label>
                <input classNameName="form-control" type="file" onChange={(e) => handleFileUpload(e)} id="formFileMultiple" name="images" />
            </div>
            <div classNameName="mb-3">
                <Calendar onRangeChange={handleRangeChange} />
            </div>
            <div classNameName="mb-3">
                <label htmlFor="formDestination" classNameName="form-label">Add a destination</label>
                <input classNameName="form-control" type="text" value={destination} onChange={(e) => setDestination(e.target.value)} id="formDestination" />
            </div>
            <button type="submit" classNameName="btn btn-info">Create plan</button>
        </form> */}
      <div className="form-container-plans mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-floating-plans">
            <input
              type="text"
              className="form-control-plans"
              id="floatingTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label for="floatingTitle">Title</label>
          </div>

          <div className="form-floating-plans">
            <input
              className="form-control-plans"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              id="formDestination"
            />
            <label for="formDestination">Add a destination</label>
          </div>

          <div className="row-plans">
            <div className="col-plans">
              <div className="form-floating-plans">
                <input
                  className="form-control-plans"
                  type="file"
                  onChange={(e) => handleFileUpload(e)}
                  id="formFileMultiple"
                  name="images"
                />
                <label for="formFileMultiple">Add your image here</label>
              </div>
            </div>

            <div className="col-plans">
              <Calendar onRangeChange={handleRangeChange} />
            </div>
          </div>

          <div className="form-floating-plans">
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
