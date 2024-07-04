// ViewTourDetails.js
import React, { useEffect, useState } from 'react';
import { db } from '../../Context/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

const ViewTourDetails = () => {
  const [tourDetails, setTourDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tourplans'));
        const tourDetailsData = querySnapshot.docs.map((doc) => doc.data());
        setTourDetails(tourDetailsData);
      } catch (error) {
        console.error('Error fetching tour details:', error);
      }
    };

    fetchTourDetails();
  }, []);

  const filteredTourDetails = tourDetails.filter((tour) =>
    tour.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tour Details</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Tour Plans</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {filteredTourDetails.map((tour, index) => (
              <tr key={index}>
                <td>{tour.description}</td>
                <td>
                  <ul className="list-unstyled">
                    {tour.tourPlans.map((plan, planIndex) => (
                      <li key={planIndex}>{plan}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <div className="d-flex flex-wrap gap-2">
                    {tour.images.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt={`Tour Image ${imageIndex + 1}`}
                        className="img-thumbnail"
                        style={{ maxWidth: '150px', height: 'auto', maxHeight: '100px' }}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTourDetails;
