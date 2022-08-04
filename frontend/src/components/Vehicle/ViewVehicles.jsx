import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import NavBar from '../NavBar';

export default function ViewVehicles() {

  const [vehicle, setVehicle] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/vehicle/getAll`).then((res) => {
      setVehicle(res.data.exsitingVehicle);
    });
  }, []);

  const onDelete = (id) => {

    swal("Are You Sure to Delete this Vehicle?", "", "warning").then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5000/vehicle/delete/${id}`).then((res) => {
          swal("Vehicle Deleted Successful", "", "success")
          .then((value) => {
            window.location = '/';
          });
        }); 
      } else {}
    });
  }

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div>
          <h1 className='mt-4 text-center'>Vehicle Registration</h1>
        </div>
        <div className='container'>
          <hr/>
          <br/>
          <div className='container'>
            <div className='text-center mb-4'>
              <a class="btn btn-success" href="/vehicle/add">Register New Vehicle</a>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Vehicle No</th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col">NIC No</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {vehicle.map((data, index)=>{
                  return(
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{data.vehicleNumber}</td>
                      <td>{data.vehicleType}</td>
                      <td>{data.nicNo}</td>
                      <td>{data.mobileNo}</td>
                      <td>{data.fullName}</td>
                      <td>{data.address}</td>
                      <td className="text-center"><a href={`/vehicle/update/${data._id}`} class="btn btn-primary">Update</a></td>
                      <td className="text-center"><a onClick={() => onDelete(data._id)} class="btn btn-danger">Delete</a></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
