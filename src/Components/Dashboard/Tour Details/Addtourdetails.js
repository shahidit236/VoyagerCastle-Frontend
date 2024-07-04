import React, { useState } from "react";
import { db, storage } from "../../Context/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Addtourdetails = () => {
    const [description, setDescription] = useState("");
    const [tourPlans, setTourPlans] = useState([""]);
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
  
    const handleAddTourPlan = () => {
      setTourPlans([...tourPlans, ""]);
    };
  
    const handleAddImage = () => {
      setSelectedImages([...selectedImages, null]);
    };
  
    const handleTourPlanChange = (index, value) => {
      const updatedTourPlans = [...tourPlans];
      updatedTourPlans[index] = value;
      setTourPlans(updatedTourPlans);
    };
  
    const handleFileChange = (index, file) => {
      const updatedSelectedImages = [...selectedImages];
      updatedSelectedImages[index] = file;
      setSelectedImages(updatedSelectedImages);
    };
  
    const uploadImageToStorage = async (file, index) => {
      try {
        const timestamp = new Date().getTime();
        const imageName = `${timestamp}_${file.name}`;
  
        const storageRef = ref(storage, `iternityimages/${imageName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        // Get the download URL after the image is uploaded
        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);
  
        // Update the images state with the download URL
        const updatedImages = [...images];
        updatedImages[index] = downloadURL;
        setImages(updatedImages);
  
        return downloadURL;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
  
    const handleSubmit = async () => {
      try {
        // Upload selected images to Firebase Storage
        const imageUrls = await Promise.all(
          selectedImages.map(async (file, index) => {
            if (file) {
              return await uploadImageToStorage(file, index);
            }
            return null;
          })
        );
  
        const tourPlanData = {
          description,
          tourPlans,
          images: imageUrls,
        };
  
        // Add tourPlanData to Firestore collection
        await addDoc(collection(db, "tourplans"), tourPlanData);
  
        console.log("Data submitted successfully!");
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };
  
    return (
      <div className="container mt-5">
        <div className="form-floating mb-3 container p-1">
          <input
            type="text"
            className="form-control"
            id="titleInput"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="titleInput">Description</label>
        </div>
  
        {tourPlans.map((tourPlan, index) => (
          <div key={index} className="form-floating mb-3 container p-1">
            <input
              type="text"
              className="form-control"
              id="titleInput"
              placeholder="Destination"
              value={tourPlan}
              onChange={(e) => handleTourPlanChange(index, e.target.value)}
            />
            <label htmlFor="titleInput">Tour Plan {index + 1}:</label>
          </div>
        ))}
        <button className="btn btn-primary mt-3" onClick={handleAddTourPlan}>
          Add Tour Plan
        </button>
  

        {selectedImages.map((file, index) => (
        <div key={index} className="mt-3 d-flex align-items-center">
          <div className="me-3">
            <label className="form-label">Tour Image {index + 1}:</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
              />
              {/* <label className="custom-file-label">
                {file ? file.name : "Choose file"}
              </label> */}
            </div>
          </div>
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt={`Tour Image ${index + 1}`}
              className="img-preview ms-3"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "100px" }}
            />
          )}
        </div>
      ))}

      <button className="btn btn-success mt-3" onClick={handleAddImage}>
        Add Image
      </button>
        <div className="container">
          <div className="row justify-content-end ">
            <div className="col-auto mx-auto">
              <button
                type="button"
                className="btn btn-primary mt-2 my-2"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Addtourdetails