// ViewTourDetails.js
import React, { useEffect, useState } from 'react';
import { db } from '../../Context/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

const ViewTourDetails = () => {
  const [tourDetails, setTourDetails] = useState([]);

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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tour Details</h2>
      <ul className="list-unstyled">
        {tourDetails.map((tour, index) => (
          <li key={index} className="mb-4">
            <h4 className="mb-3 font-weight-bold">Description: {tour.description}</h4>
            <ul className="list-unstyled">
              {tour.tourPlans.map((plan, planIndex) => (
                <li key={planIndex} className="mb-2">Tour Plan {planIndex + 1}: {plan}</li>
              ))}
            </ul>
            <h5 className="mb-2 font-weight-bold">Images:</h5>
            <div className="d-flex gap-3">
              {tour.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image}
                  alt={`Tour Image ${imageIndex + 1}`}
                  className="img-thumbnail"
                  style={{ maxWidth: '100%', height: 'auto', maxHeight: '100px' }}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTourDetails;
