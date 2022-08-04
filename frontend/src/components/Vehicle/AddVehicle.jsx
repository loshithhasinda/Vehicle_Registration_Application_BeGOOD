import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import NavBar from "../NavBar";

export default function AddVehicle() {

  const [nicNo, setNicNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const [mainSubmitBtn, setMainSubmitBtn] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      nicNo: nicNo,
      mobileNo: mobileNo,
      fullName: fullName,
      address: address,
      vehicleNumber: vehicleNumber,
      vehicleType: vehicleType
    };

    console.log(data);

    axios.post(`http://localhost:5000/vehicle/add`, data).then((res) => {
      if (res.data.success) {
        swal("Vehicle Reistration Success", "", "success")
        .then((value) => {
          window.location = '/';
        });
      }
    });

  }

  const onValidateType = (e) => {
    e.preventDefault();

    const data = {
      vehicleNumber: vehicleNumber
    }

    console.log(data);

    axios.post(`http://localhost:5000/vehicleType/get`, data).then((res) => {
      if(res.data.success){
        swal("Vehicle No is Correct", "", "success")
        .then((value) => {
          setVehicleType(res.data.type);
          setMainSubmitBtn(false);
        });
        
      }else{
        swal("Invalid No", "Please check your no again", "warning");
      }
      
    });
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
              <h1 className="mt-4 text-center">Registration</h1>
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
                      onChange={(e) => setNicNo(e.target.value)}
                      required
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
                      onChange={(e) => setMobileNo(e.target.value)}
                      required
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
                      onChange={(e) => setFullName(e.target.value)}
                      required
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
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>

                  <form>
                  <div class="mb-3">
                    <label for="vehicleNumber" class="form-label">
                      Vehicle No
                    </label>
                    <div className="container">
                      <p className="fs-6">
                        * The vehicle license plate should be these format<br/>
                      </p>
                      <p className="fs-6">
                        Modern Plate No   - WP GA-9999 / CAR-9999<br/>
                        Old Plate No      - 250-9999 / 19-9999<br/>
                        Vinatage Plate No - 13 Sri 9999<br/>
                      </p>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="vehicleNumber"
                      placeholder="Input Vehicle No"
                      onChange={(e) => setVehicleNumber(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" class="btn btn-outline-dark mb-3" onClick={onValidateType}>
                    Validate
                  </button>
                  </form>
                  
                  <div class="mb-3">
                    <label for="vehicleType" class="form-label">
                      Vehicle Type
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="vehicleType"
                      value={vehicleType}
                      readOnly
                    />
                  </div>

                  <button type="submit" class="btn btn-primary" onClick={onSubmit} disabled={mainSubmitBtn}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
