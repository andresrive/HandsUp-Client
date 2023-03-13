// import { uploadImage } from "../services/upload.service"

// const handleFileUpload = (e) => {


//     const uploadData = new FormData();
//     uploadData.append("images", e.target.files[0]);



//     uploadImage(uploadData)
//         .then(response => {
//             console.log("response is: ", response);
//             // response carries "fileUrl" which we can use to update the state
//             setImages(response.fileUrl);
//         })
//         .catch(err => console.log("Error while uploading the file: ", err));
// };


// //INPUT IMAGEN
// <label htmlFor="formFileMultiple" className="form-label">Add your images here</label>
// <input className="form-control" type="file" value={images} onChange={(e) => handleFileUpload(e)} id="formFileMultiple" />
