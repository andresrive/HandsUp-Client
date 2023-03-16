import { useState } from "react";
import { uploadImage } from "../../services/upload.service.js";
import { useNavigate } from "react-router-dom";
import routeService from "../../services/route.service.js";
import Calendar from "../Calendar";
import MyCkEditor from "../../inputEditor/MyCkEditor";
import Navbar from "../Navbar/Navbar";
import './FormCreatePack.css'

export default function FormCreatePack() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("");

  const [selectedRange, setSelectedRange] = useState("");
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");

  const handleRangeChange = (selectedRange, fromDate, toDate) => {
    setSelectedRange(selectedRange);
    setfromDate(fromDate);
    settoDate(toDate);
  };

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
  const descriptionHandler = (content) => {
    setDescription(content);
    console.log(description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    routeService
      .createPack({ title, description, images, fromDate, toDate, destination, price })
      //importar la date de calendar?
      .then((res) => {
        setTitle("");
        setImages("");
        settoDate("");
        setfromDate("");
        setDestination("");
        setPrice("");
        navigate("/packs");
      })
      .catch((err) => console.log("Error while adding the new pack: ", err));
  };

  return (
    <>
      <Navbar />
      <div className="form-container-packs mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-floating-packs  all-mb mb-3">
            <label className="form-label-packs" htmlFor="floatingTitle">Title</label>
            <input
              type="text"
              className="form-control-packs"
              id="floatingTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-floating-packs  all-mb mb-3">
            <label className="form-label-packs">Description</label>
            <MyCkEditor descriptionHandler={descriptionHandler} />
          </div>

          <div className="row-packs">
            <div className="col-packs  all-mb mb-3">
              <label htmlFor="formFileMultiple" className="form-label-packs">
                Add your image here
              </label>
              <input
                className="form-control-packs"
                type="file"
                onChange={(e) => handleFileUpload(e)}
                id="formFileMultiple"
                name="images"
              />
            </div>

            <div className="col-packs  all-mb mb-3">
              <label className="form-label-packs">Select a date range</label>
              <Calendar onRangeChange={handleRangeChange} dateTo={toDate} dateFrom={fromDate} />
            </div>
          </div>

          <div className=" all-mb-packs mb-3">
            <label htmlFor="formPrice" className="form-label-packs">
              Add the price trip
            </label>
            <input
              className="form-control-packs"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="formPrice"
              name="price"
            />
          </div>

          <div className="all-mb-packs mb-3">
            <label htmlFor="formDestination" className="form-label-packs">
              Add a destination
            </label>
            <input
              className="form-control-packs"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              id="formDestination"
            />
          </div>


          <button type="submit" className="btn-packs">
            Create pack
          </button>
        </form>
      </div >
    </>
  );
}
