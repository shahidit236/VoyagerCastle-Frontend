// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { db, storage } from "../../Context/firebase.config";
// import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from "firebase/storage";
// import {  doc, getDoc, updateDoc } from "firebase/firestore";

// const Updateslider = () => {
//   const { id } = useParams(); // Assuming you get the ID from the route params

//   const [image, setImage] = useState(null);
//   const [title, setTitle] = useState("");
//   const [mainTitle, setMainTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [progress, setProgress] = useState(0);
//   const [imageUrl, setImageUrl] = useState("");
//   const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);

//   useEffect(() => {
//     // Fetch slider details based on the ID when the component mounts
//     const fetchSliderDetails = async () => {
//       try {
//         const sliderDocRef = doc(db, "slider", id);
//         const sliderSnapshot = await getDoc(sliderDocRef);

//         if (sliderSnapshot.exists()) {
//           const sliderData = sliderSnapshot.data();
//           setTitle(sliderData.title);
//           setMainTitle(sliderData.mainTitle);
//           setDescription(sliderData.description);
//           setImageUrl(sliderData.imageUrl);
//         } else {
//           toast.error("Slider not found.");
//         }
//       } catch (error) {
//         console.error("Error fetching slider details: ", error);
//         toast.error("Error fetching slider details. Please try again.");
//       }
//     };

//     fetchSliderDetails();
//   }, [id]);

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       const selectedImage = e.target.files[0];
//       setImage(selectedImage);

//       // Display image preview
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImageUrl(reader.result);
//       };
//       reader.readAsDataURL(selectedImage);
//     }
//   };

//   const handleUpdate = async () => {
//     setIsSaveButtonDisabled(true);
//     try {
//       if (image) {
//         // Delete the previous image from storage before updating with the new one
//         if (imageUrl) {
//           const previousImageRef = ref(storage, imageUrl);
//           await deleteObject(previousImageRef);
//         }
  
//         const timestamp = new Date().getTime();
//         const imageName = `${timestamp}_${image.name}`;
  
//         const storageRef = ref(storage, `slider/${imageName}`);
//         const uploadTask = uploadBytesResumable(storageRef, image);
  
//         uploadTask.on(
//           "state_changed",
//           (snapshot) => {
//             const progress =
//               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             setProgress(progress);
//           },
//           (error) => {
//             console.error(error.message);
//             toast.error("Error uploading image. Please try again.");
//           },
//           async () => {
//             try {
//               const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//               setImageUrl(downloadURL);
//               // Update the Firestore document with modified details
//               await updateSliderInFirestore(downloadURL);
//               toast.success("Slider updated successfully!");
//             } catch (error) {
//               console.error("Error updating slider details: ", error);
//               toast.error("Error updating slider details. Please try again.");
//             } finally {
//               setIsSaveButtonDisabled(false);
//             }
//           }
//         );
//       } else {
//         // No new image, only update text fields
//         await updateSliderInFirestore(imageUrl);
//         toast.success("Slider updated successfully!");
//         setIsSaveButtonDisabled(false);
//       }
//     } catch (error) {
//       console.error("Error updating slider: ", error);
//       toast.error("Error updating slider. Please try again.");
//       setIsSaveButtonDisabled(false);
//     }
//   };
  

//   const updateSliderInFirestore = async (downloadURL) => {
//     const sliderDocRef = doc(db, "slider", id);
//     await updateDoc(sliderDocRef, {
//       imageUrl: downloadURL,
//       title,
//       mainTitle,
//       description,
//     });
//   };

//   const handleCancelImage = () => {
//     setImage(null);
//   };

//   return (
//     <div
//       className="border border-gray rounded p-4 mb-5"
//       style={{ width: "100%" }}
//     >
//       <h5 className="text-primary mb-4">Update Slider</h5>
//       <div className="form-floating mb-3 container p-1">
//         <input
//           type="text"
//           className="form-control"
//           id="titleInput"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <label htmlFor="titleInput">Title</label>
//       </div>
//       <div className="form-floating mb-3 container p-1">
//         <input
//           type="text"
//           className="form-control"
//           id="mainTitleInput"
//           placeholder="Main title"
//           value={mainTitle}
//           onChange={(e) => setMainTitle(e.target.value)}
//         />
//         <label htmlFor="mainTitleInput">Main title</label>
//       </div>
//       <div className="form-floating mb-3 container p-1">
//         <textarea
//           className="form-control"
//           id="descriptionInput"
//           placeholder="Description"
//           rows="3"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <label htmlFor="descriptionInput">Description</label>
//       </div>

//       <div
//         className="border border-gray rounded p-4 mb-3"
//         style={{ width: "100%", display: "flex", alignItems: "center" }}
//       >
//         <div style={{ marginRight: "20px", flex: "0 0 auto" }}>
//           <h6 className="text-primary mb-3">Add Image</h6>
//           <div className="input-group mb-3">
//             <label
//               htmlFor="inputGroupFile02"
//               className="form-control d-flex align-items-center"
//             >
//               Choose File
//               <input
//                 type="file"
//                 className="d-none"
//                 id="inputGroupFile02"
//                 onChange={handleImageChange}
//               />
//             </label>
//           </div>
//         </div>
//         {imageUrl && (
//           <div
//             className="mt-3"
//             style={{
//               position: "relative",
//               flex: "1",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <div
//               style={{
//                 border: "1px dashed #ccc",
//                 padding: "5px",
//                 position: "relative",
//               }}
//             >
//               <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "20%" }} />
//               <button
//                 onClick={handleCancelImage}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   color: "red",
//                   position: "absolute",
//                   top: "5px",
//                   right: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//               {progress > 0 && <p>Upload Progress: {progress}%</p>}
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="container">
//         <div className="row justify-content-end ">
//           <div className="col-auto  mx-auto">
//             <button
//               type="button"
//               className="btn btn-primary mt-2"
//               onClick={handleUpdate}
//               disabled={isSaveButtonDisabled} // Disable the button based on the state
//             >
//               Update
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Updateslider;
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  db,
  storage,
} from "../../Context/firebase.config";
import { getDownloadURL,ref, uploadBytesResumable} from "firebase/storage";
import {  doc, updateDoc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function UpdateSlider() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [mainTitle, setMainTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);

  useEffect(() => {
    if (id) {
      // Fetch slider details based on the provided ID
      fetchSliderDetails();
    }
  }, [id]);

  const fetchSliderDetails = async () => {
    try {
      const sliderDoc = await getDoc(doc(db, "slider", id));

      if (sliderDoc.exists()) {
        const data = sliderDoc.data();
        setTitle(data.title || "");
        setMainTitle(data.mainTitle || "");
        setDescription(data.description || "");
        setImageUrl(data.imageUrl || "");
      } else {
        console.error("Slider not found");
        toast.error("Slider not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching slider details: ", error);
      toast.error("Error fetching slider details. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);

      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleUpload = async () => {
    setIsSaveButtonDisabled(true);

    if (image) {
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
            await updateImageDetailsInFirestore(downloadURL);
          } catch (error) {
            console.error("Error storing image details in Firestore: ", error);
            toast.error("Error storing image details. Please try again.");
          } finally {
            setIsSaveButtonDisabled(false);
          }
        }
      );
    }
  };

  const updateImageDetailsInFirestore = async (downloadURL) => {
    try {
      await updateDoc(doc(db, "slider", id), {
        imageUrl: downloadURL,
        title,
        mainTitle,
        description,
      });
      toast.success("Details updated successfully!");
    } catch (error) {
      console.error("Error updating details in Firestore: ", error);
      toast.error("Error updating details. Please try again.");
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    setImageUrl("");
  };

  return (
    <div className="border border-gray rounded p-4 mb-5" style={{ width: "100%" }}>
      <h5 className="text-primary mb-4">Update Slider</h5>
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

      <div className="border border-gray rounded p-4 mb-3" style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "20px", flex: "0 0 auto" }}>
          <h6 className="text-primary mb-3">Update Image</h6>
          <div className="input-group mb-3">
            <label htmlFor="inputGroupFile02" className="form-control d-flex align-items-center">
              Choose File
              <input type="file" className="d-none" id="inputGroupFile02" onChange={handleImageChange} />
            </label>
          </div>
        </div>
        {imageUrl && (
          <div className="mt-3" style={{ position: "relative", flex: "1", display: "flex", alignItems: "center" }}>
            <div style={{ border: "1px dashed #ccc", padding: "5px", position: "relative" }}>
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
              disabled={isSaveButtonDisabled}
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

export default UpdateSlider;
