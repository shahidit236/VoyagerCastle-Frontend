import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Context/firebase.config";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function Viewsliders() {
  const [sliders, setslider] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [sliderToDelete, setSliderToDelete] = useState(null);

  useEffect(() => {
    handleGetslider();
  }, []);

  const handleGetslider = async () => {
    try {
      const usersCollection = await getDocs(collection(db, "slider"));
      const usersData = usersCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setslider(usersData);
    } catch (error) {
      console.error("Error fetching data: ", error);
      console.error("Error details:", error.message);
    }
  
  };

  const navigate = useNavigate();

  const handleDeleteClick = (sliderId) => {
    setSliderToDelete(sliderId);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSliderToDelete(null);
  };

  const handleDeleteConfirm = async () => {
    try {
      // Check if a slider ID is selected for deletion
      if (sliderToDelete) {
        // Delete the document from Firestore based on the slider ID
        await deleteDoc(doc(db, "slider", sliderToDelete));
        
        // Remove the deleted slider from the local state
        setslider((prevSliders) =>
          prevSliders.filter((slider) => slider.id !== sliderToDelete)
        );
  
        // Reset the sliderToDelete state
        setSliderToDelete(null);
  
        // Close the delete modal
        setShowDeleteModal(false);
      } else {
        console.error("No slider ID provided for deletion.");
      }
    } catch (error) {
      console.error("Error deleting slider: ", error);
    }
  };
  

  const filteredData = sliders.filter((slider) =>
    Object.values(slider).some((value) => {
      if (typeof value === "number") {
        return value.toString().includes(searchQuery.toLowerCase());
      } else if (typeof value === "string") {
        return value.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    })
  );

  return (
    <div className="container">
      <input
        className="form-control mb-5"
        id="myInput"
        type="text"
        placeholder="Search.."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="table-title">
        <div className="row">
          <div className="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
            <h2 className="ml-lg-2 text-white">View Sliders</h2>
          </div>
          <div className="col-sm-6 p-0 d-flex justify-content-lg-end justify-content-center">
            <a
              href="#"
              className="btn btn-info"
              data-toggle="modal"
              onClick={handleGetslider}
            >
              <i class="material-icons">&#xE5D5;</i>
              <span>Refresh</span>
            </a>
            <a
              href="addslider"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Sliders</span>
            </a>
          </div>
        </div>
      </div>

      {filteredData.length > 0 ? (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Main Title</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.mainTitle}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    src={item.imageUrl}
                    alt="slider"
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>
                  <a
                    href=""
                    className="edit"
                    onClick={() => navigate(`/home/updateslider/${item.id}`)}
                  >
                    <i
                      className="material-icons"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      &#xE254;
                    </i>
                  </a>
                  <a
                    href="#deleteSliderModal"
                    className="delete"
                    onClick={() => handleDeleteClick(item.id)}
                  >
                    <i
                      className="material-icons"
                      data-toggle="tooltip"
                      title="Delete"
                      style={{ color: "red" }}
                    >
                      &#xE872;
                    </i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          <div>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </div>
          <div>No data found</div>
        </div>

        // <div>No data found</div>
      )}
      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered >
        <Modal.Header closeButton>
          <Modal.Title>Delete Slider</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete these Records?</p>
          <p className="text-warning">
            <small>This action cannot be undone.</small>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Viewsliders;
