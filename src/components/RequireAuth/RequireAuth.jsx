import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const [auth, setauth] = useState(false);
  const location = useLocation();

  if (!auth) {
    console.log("hi auth");
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }
  console.log("hi not auth");
  return <Outlet />;
}
