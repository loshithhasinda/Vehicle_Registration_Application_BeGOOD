import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddVehicle from "./components/Vehicle/AddVehicle";
import ViewVehicles from './components/Vehicle/ViewVehicles';
import UpdateVehicle from './components/Vehicle/UpdateVehicle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewVehicles />} />
        <Route path="/vehicle/add" element={<AddVehicle />} />
        <Route path="/vehicle/update/:id" element={<UpdateVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
