import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Context/firebase.config";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Viewcontacts = () => {
    const [contacts, setContact] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
  
    useEffect(() => {
      handleGetContact();
    }, []);
  
    const handleGetContact = async () => {
      try {
        const usersCollection = await getDocs(collection(db, "contact"));
        const usersData = usersCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContact(usersData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        console.error("Error details:", error.message);
      }
    
    };
  
  
    const handleDeleteClick = (contactId) => {
      setContactToDelete(contactId);
      setShowDeleteModal(true);
    };
  
    const handleCloseDeleteModal = () => {
      setShowDeleteModal(false);
      setContactToDelete(null);
    };
  
    const handleDeleteConfirm = async () => {
      try {
        // Check if a contact ID is selected for deletion
        if (contactToDelete) {
          // Delete the document from Firestore based on the contact ID
          await deleteDoc(doc(db, "contact", contactToDelete));
          
          // Remove the deleted contact from the local state
          setContact((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== contactToDelete)
          );
    
          // Reset the ContactToDelete state
          setContactToDelete(null);
    
          // Close the delete modal
          setShowDeleteModal(false);
        } else {
          console.error("No contact ID provided for deletion.");
        }
      } catch (error) {
        console.error("Error deleting contact: ", error);
      }
    };
    
  
    const filteredData = contacts.filter((contact) =>
      Object.values(contact).some((value) => {
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
          <h2 className="ml-lg-2 text-white">View Contacts</h2>
        </div>
        <div className="col-sm-6 p-0 d-flex justify-content-lg-end justify-content-center">
          <a
            href="#"
            className="btn btn-info"
            data-toggle="modal"
            onClick={handleGetContact}
          >
            <i class="material-icons">&#xE5D5;</i>
            <span>Refresh</span>
          </a>
        </div>
      </div>
    </div>

    {filteredData.length > 0 ? (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.subject}</td>
              <td>{item.message}</td>
              <td>
                <a
                  href=""
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
        <Modal.Title>Delete Contact</Modal.Title>
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
  )
}

export default Viewcontacts