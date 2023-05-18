import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const MyToys = () => {

    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/myToy")
          .then((res) => res.json())
          .then((data) => {
            setToys(data);
          });
      }, [])
    //   console.log(toys)
    return (
        <div>
            {
                    toys.map(toy=><Toy key={toy._id} toy={toy}></Toy>)
            }
           
        </div>
    );
};

export default MyToys;
