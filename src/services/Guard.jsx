import { Navigate } from "react-router-dom";
import { apiService } from "./api";

// for routes only for Patient
export const PatientsOnlyRoute = ({ element: Component }) => {
  return apiService.isPatient() ? Component : <Navigate to={"/login"} />;
};

// for routes only for Doctor
export const DoctorsOnlyRoute = ({ element: Component }) => {
  return apiService.isDoctor() ? Component : <Navigate to={"/login"} />;
};

// Routes that support authenticated users only
export const DoctorsAndPatientRoute = ({ element: Component }) => {
  return apiService.isAuthenticated() ? Component : <Navigate to={"/login"} />;
};
