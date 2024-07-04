import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const auth = useAuth();

  return auth.user ? (
    element
  ) : (
    <Navigate
      to="/"
      replace={true}
      state={{ from: rest?.location?.pathname || "/" }}
    />
  );
}

export default ProtectedRoute;
