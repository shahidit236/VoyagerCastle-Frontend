import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../Context/firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

function UpdateDestination() {
  const { id } = useParams();
  const isUpdate = !!id;

  const [destinationImage, setDestinationImage] = useState(null);
  const [blogImage, setBlogImage] = useState(null);
  const [destinationname, setDestinationName] = useState("");
  const [categories, setCategories] = useState([]);

  const [destinationProgress, setDestinationProgress] = useState(0);
  const [blogProgress, setBlogProgress] = useState(0);
  const [destinationImageUrl, setDestinationImageUrl] = useState("");
  const [blogImageUrl, setBlogImageUrl] = useState("");
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);

  useEffect(() => {
    if (isUpdate) {
      const fetchDestination = async () => {
        try {
          const destinationRef = doc(db, "destinations", id);
          const snapshot = await getDoc(destinationRef);
          if (snapshot.exists()) {
            const data = snapshot.data();
            setDestinationName(data.destinationname);
            setCategories(
              data.categories.map((category) => ({
                value: category,
                label: category,
              }))
            );
            setDestinationImageUrl(data.destinationimage);
            setBlogImageUrl(data.blogimage);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching destination: ", error);
          toast.error("Error fetching destination. Please try again later.");
        }
      };

      fetchDestination();
    }
  }, [id, isUpdate]);

  const handleDestinationImageChange = (e) => {
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setDestinationImage(selectedImage);

      const reader = new FileReader();
      reader.onload = () => {
        setDestinationImageUrl(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleBlogImageChange = (e) => {
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setBlogImage(selectedImage);

      const reader = new FileReader();
      reader.onload = () => {
        setBlogImageUrl(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  // Handle category change
  const handleCategoryChange = (selectedOptions) => {
    setCategories(selectedOptions);
  };

  const handleUpload = async () => {
    setIsSaveButtonDisabled(true);
    try {
      const [destinationDownloadURL, blogDownloadURL] = await Promise.all([
        uploadImage(destinationImage, setDestinationProgress),
        uploadImage(blogImage, setBlogProgress),
      ]);

      if (isUpdate) {
        await updateDestinationInFirestore(
          destinationDownloadURL,
          blogDownloadURL
        );
      } else {
        await storeImageDetailsInFirestore(
          destinationDownloadURL,
          blogDownloadURL
        );
      }
    } catch (error) {
      console.error("Error uploading images and storing details: ", error);
      toast.error(
        "Error uploading images and storing details. Please try again."
      );
    } finally {
      setIsSaveButtonDisabled(false);
    }
  };

  const uploadImage = (image, setProgress) => {
    return new Promise((resolve, reject) => {
      if (image) {
        const timestamp = new Date().getTime();
        const imageName = `${timestamp}_${image.name}`;

        const storageRef = ref(storage, `destination/${imageName}`);
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
            reject(error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            } catch (error) {
              console.error("Error getting download URL: ", error);
              reject(error);
            }
          }
        );
      } else {
        resolve(null);
      }
    });
  };

  const storeImageDetailsInFirestore = async (
    destinationDownloadURL,
    blogDownloadURL
  ) => {
    try {
      const categoryValues = categories.map((category) => category.value);
      await addDoc(collection(db, "destinations"), {
        destinationimage: destinationDownloadURL,
        blogimage: blogDownloadURL,
        destinationname,
        categories: categoryValues, // Store categories in Firestore
      });
      toast.success("Details stored successfully!");
    } catch (error) {
      console.error("Error storing details in Firestore: ", error);
      toast.error("Error storing details. Please try again.");
    }
  };

  const updateDestinationInFirestore = async (
    destinationDownloadURL,
    blogDownloadURL
  ) => {
    try {
      const destinationRef = doc(db, "destinations", id);
      const categoryValues = categories.map((category) => category.value);
      await updateDoc(destinationRef, {
        destinationimage: destinationDownloadURL || destinationImageUrl,
        blogimage: blogDownloadURL || blogImageUrl,
        destinationname,
        categories: categoryValues, // Update categories in Firestore
      });
      toast.success("Details updated successfully!");
    } catch (error) {
      console.error("Error updating destination details in Firestore: ", error);
      toast.error("Error updating details. Please try again.");
    }
  };

  const handleCancelImage = (setImage) => {
    setImage(null);
  };

  const categoryOptions = [
    { value: "Religion", label: "Religion" },
    { value: "Hill Station", label: "Hill Station" },
    { value: "Beach", label: "Beach" },
    { value: "Honeymoon", label: "Honeymoon" },
  ];

  return (
    <div
      className="border border-gray rounded p-4 mb-5"
      style={{ width: "100%" }}
    >
      <h5 className="text-primary mb-4">
        {isUpdate ? "Update Destination" : "Add Destination"}
      </h5>
      <div className="form-floating mb-3 container p-1">
        <input
          type="text"
          className="form-control"
          id="destinationnameInput"
          placeholder="Destination Name"
          value={destinationname}
          onChange={(e) => setDestinationName(e.target.value)}
        />
        <label htmlFor="destinationnameInput">Destination Name</label>
      </div>
      <div className="form-floating mb-3 container p-1">
        <Select
          options={categoryOptions}
          isMulti
          value={categories}
          onChange={handleCategoryChange}
          closeMenuOnSelect={false}
        />
        <label htmlFor="categoryInput">Categories</label>
      </div>

      {/* Destination image input field */}
      <div
        className="border border-gray rounded p-4 mb-3"
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <div style={{ marginRight: "20px", flex: "0 0 auto" }}>
          <h6 className="text-primary mb-3">
            {isUpdate ? "Update Destination Image" : "Add Destination Image"}
          </h6>
          <div className="input-group mb-3">
            <label
              htmlFor="destinationImageInput"
              className="form-control d-flex align-items-center"
            >
              Choose File
              <input
                type="file"
                className="d-none"
                id="destinationImageInput"
                onChange={handleDestinationImageChange}
              />
            </label>
          </div>
        </div>
        {destinationImageUrl && (
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
              <img
                src={destinationImageUrl}
                alt="Uploaded"
                style={{ maxWidth: "20%" }}
              />
              <button
                onClick={() => handleCancelImage(setDestinationImage)}
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
              {destinationProgress > 0 && (
                <p>Upload Progress: {destinationProgress}%</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Blog image input field */}
      <div
        className="border border-gray rounded p-4 mb-3"
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <div style={{ marginRight: "20px", flex: "0 0 auto" }}>
          <h6 className="text-primary mb-3">
            {isUpdate ? "Update Blog Image" : "Add Blog Image"}
          </h6>
          <div className="input-group mb-3">
            <label
              htmlFor="blogImageInput"
              className="form-control d-flex align-items-center"
            >
              Choose File
              <input
                type="file"
                className="d-none"
                id="blogImageInput"
                onChange={handleBlogImageChange}
              />
            </label>
          </div>
        </div>
        {blogImageUrl && (
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
              <img
                src={blogImageUrl}
                alt="Uploaded"
                style={{ maxWidth: "20%" }}
              />
              <button
                onClick={() => handleCancelImage(setBlogImage)}
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
              {blogProgress > 0 && <p>Upload Progress: {blogProgress}%</p>}
            </div>
          </div>
        )}
      </div>

      <div className="container">
        <div className="row justify-content-end">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={handleUpload}
              disabled={isSaveButtonDisabled}
            >
              {isUpdate ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UpdateDestination;