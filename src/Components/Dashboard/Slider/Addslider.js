import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { db, storage } from "../../Context/firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

function AddSlider() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [mainTitle, setMainTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);

      // Display image preview
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleUpload = () => {
    setIsSaveButtonDisabled(true);
    if (image) {
      // Generate a unique name using a timestamp and the original image name
      const timestamp = new Date().getTime();
      const imageName = `${timestamp}_${image.name}`;

      const storageRef = ref(storage, `slider/${imageName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error(error.message);
          toast.error("Error uploading image. Please try again.");
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setImageUrl(downloadURL);
            // Store the downloadURL, title, mainTitle, and description in Firestore
            await storeImageDetailsInFirestore(downloadURL);
          } catch (error) {
            console.error("Error storing image details in Firestore: ", error);
            toast.error("Error storing image details. Please try again.");
          } finally {
            setIsSaveButtonDisabled(false); // Enable the button after the upload process
          }
        }
      );
    }
  };

  const storeImageDetailsInFirestore = async (downloadURL) => {
    try {
      const docRef = await addDoc(collection(db, "slider"), {
        imageUrl: downloadURL,
        title,
        mainTitle,
        description,
      });
      console.log("Details stored in Firestore with ID: ", docRef.id);
      toast.success("Details stored successfully!");
      setTitle("");
      setMainTitle("");
      setDescription("");
      setImageUrl("");
      setProgress(0);
      setImage(null);
    } catch (error) {
      console.error("Error storing details in Firestore: ", error);
      toast.error("Error storing details. Please try again.");
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    setImageUrl('');
  };

  return (
    <div
      className="border border-gray rounded p-4 mb-5"
      style={{ width: "100%" }}
    >
      <h5 className="text-primary mb-4">Add Sliders</h5>
      <div className="form-floating mb-3 container p-1">
        <input
          type="text"
          className="form-control"
          id="titleInput"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="titleInput">Title</label>
      </div>
      <div className="form-floating mb-3 container p-1">
        <input
          type="text"
          className="form-control"
          id="mainTitleInput"
          placeholder="Main title"
          value={mainTitle}
          onChange={(e) => setMainTitle(e.target.value)}
        />
        <label htmlFor="mainTitleInput">Main title</label>
      </div>
      <div className="form-floating mb-3 container p-1">
        <textarea
          className="form-control"
          id="descriptionInput"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="descriptionInput">Description</label>
      </div>

      <div
        className="border border-gray rounded p-4 mb-3"
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <div style={{ marginRight: "20px", flex: "0 0 auto" }}>
          <h6 className="text-primary mb-3">Add Image</h6>
          <div className="input-group mb-3">
            <label
              htmlFor="inputGroupFile02"
              className="form-control d-flex align-items-center"
            >
              Choose File
              <input
                type="file"
                className="d-none"
                id="inputGroupFile02"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        {imageUrl && (
          <div
            className="mt-3"
            style={{
              position: "relative",
              flex: "1",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "1px dashed #ccc",
                padding: "5px",
                position: "relative",
              }}
            >
              <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "20%" }} />
              <button
                onClick={handleCancelImage}
                style={{
                  background: "none",
                  border: "none",
                  color: "red",
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              {progress > 0 && <p>Upload Progress: {progress}%</p>}
            </div>
          </div>
        )}
      </div>

      <div className="container">
        <div className="row justify-content-end ">
          <div className="col-auto  mx-auto">
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={handleUpload}
              disabled={isSaveButtonDisabled} // Disable the button based on the state
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddSlider;
