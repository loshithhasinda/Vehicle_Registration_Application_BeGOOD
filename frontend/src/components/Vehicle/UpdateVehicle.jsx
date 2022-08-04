import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import NavBar from "../NavBar";

export default function UpdateVehicle() {

  const { id } = useParams();

  const [vehicle, setVehicle] = useState([]);
  const [nicNo, setNicNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/vehicle/get/${id}`).then((response) => {
      setVehicle(response.data.exsitingVehicle);

      setNicNo(response.data.exsitingVehicle.nicNo);
      setMobileNo(response.data.exsitingVehicle.mobileNo);
      setFullName(response.data.exsitingVehicle.fullName);
      setAddress(response.data.exsitingVehicle.address);
      setVehicleNumber(response.data.exsitingVehicle.vehicleNumber);
      setVehicleType(response.data.exsitingVehicle.vehicleType);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      nicNo: nicNo,
      mobileNo: mobileNo,
      fullName: fullName,
      address: address
    };

    axios.put(`http://localhost:5000/vehicle/update/${id}`, data).then((res) => {
        if(res.data.success){
          swal("Vehicle Register Details Update Successful", "", "success")
          .then((value) => {
            window.location = '/';
          });
        }
        
    })
  }


  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="container">
          <div
            class="container bg-light text-dark p-2 mt-4 mb-4"
            style={{ "max-width": "600px"}}
          >
            <div>
              <h1 className="mt-4 text-center">Update Details</h1>
              <hr />

              <div className="container">
                <form>
                  <div class="mb-3">
                    <label for="nicNo" class="form-label">
                      NIC No
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nicNo"
                      placeholder="Input NIC No"
                      value={nicNo}
                      onChange={(e) => setNicNo(e.target.value)}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="mobileNo" class="form-label">
                      Mobile No
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="mobileNo"
                      placeholder="Input Mobile No"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="fullName" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="fullName"
                      placeholder="Input Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="address" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="Input Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="vehicleNumber" class="form-label">
                      Vehicle No
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="vehicleNumber"
                      placeholder="Input Vehicle No"
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value)}
                      readOnly
                    />
                  </div>

                  <div class="mb-3">
                    <label for="vehicleType" class="form-label">
                      Vehicle Type
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="vehicleType"
                      placeholder="Input Vehicle Type"
                      value={vehicleType}
                      readOnly
                    />
                  </div>

                  <button type="submit" class="btn btn-primary" onClick={onSubmit}>
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
