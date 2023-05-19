import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleToy = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      })
      .catch((error) => {
        console.error('Error fetching toy:', error);
      });
  }, [id]);

  if (!toy) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.price}</td>
                <td>{toy.rating}</td>
                <td>{toy.quantity}</td>
                <td>{toy.selectedCategory}</td>
                <td>{toy.details}</td>


    </div>
  );
};

export default SingleToy;
