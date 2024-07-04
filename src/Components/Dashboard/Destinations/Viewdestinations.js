import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Context/firebase.config";
import { useNavigate } from "react-router-dom";

function Viewdestinations() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [selectedDestinationId, setSelectedDestinationId] = useState([]);

  const handleDeleteClick = (id) => {
    setSelectedDestinationId(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedDestinationId(null);
    setShowDeleteModal(false);
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationCollection = collection(db, "destinations");
      const snapshot = await getDocs(destinationCollection);
      const destinationsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDestinations(destinationsData);
    };

    fetchDestinations();
  }, []);
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "destinations", selectedDestinationId));
      setDestinations(
        destinations.filter(
          (destination) => destination.id !== selectedDestinationId
        )
      );
      handleCloseDeleteModal();
    } catch (error) {
      console.error("Error deleting package: ", error);
    }
  };

  return (
    <div className="container">
      <input
        className="form-control mb-5"
        id="myInput"
        type="text"
        placeholder="Search.."
      />

      <div className="table-title">
        <div className="row">
          <div className="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
            <h2 className="ml-lg-2">View Destinations</h2>
          </div>
          <div className="col-sm-6 p-0 d-flex justify-content-lg-end justify-content-center">
            <a
              href="adddestinations"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Destinations</span>
            </a>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Destination Name</th>
            <th scope="col">Category</th>
            <th scope="col">Destination Image</th>
            <th scope="col">Blog Image</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination) => (
            <>
              <tr key={destination.id}>
                <th scope="row">{destination.id}</th>
                <td>{destination.destinationname}</td>
                <td>{destination.categories.join(", ")}</td>
                <td>
                  <img
                    src={destination.destinationimage}
                    alt="image1"
                    style={{ maxWidth: "100px" }}
                  />
                </td>

                <td>
                  <img
                    src={destination.blogimage}
                    alt="image2"
                    style={{ maxWidth: "100px" }}
                  />
                </td>

                <td>
                  <a
                  href=""
                    className="edit"
                    data-toggle="modal"
                    onClick={() =>
                      navigate(`/home/updatedestinations/${destination.id}`)
                    }
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
                    href="#deleteDestinations"
                    className="delete"
                    data-toggle="modal"
                    onClick={() => handleDeleteClick(destination.id)}
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
            </>
          ))}
        </tbody>
      </table>
      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Destination</Modal.Title>
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
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Viewdestinations;
