import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes as Switch } from "react-router-dom";
import RouteList from "./constants/Route.constants";
import PublicRoute from "./protected/PublicRoute";
import ProtectedRoute from "./protected/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/protectedPages/profile"; 
const Main = React.lazy(() => import("./layout/Main"));
const ProtectedMain = React.lazy(() => import("./layout/ProtectedMain"));
const Signup = React.lazy(() => import("./pages/publicPages/signup"));
const Login = React.lazy(() => import("./pages/publicPages/login"));
const ForgetPassword = React.lazy(() =>
  import("./pages/publicPages/forgetPassword")
);
const ResetPassword = React.lazy(() =>
  import("./pages/publicPages/resetPassword")
);
const VerifyEmail = React.lazy(() => import("./pages/publicPages/verifyEmail"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Main />}>
        <ScrollToTop />
        <Switch>
          <Route element={<PublicRoute redirectPage={RouteList.LOGIN} />}>
            <Route path={RouteList.SIGNUP} element={<Signup />} />
            <Route path={RouteList.LOGIN} element={<Login />} />
            <Route
              path={`${RouteList.VERIFY_EMAIL}`}
              element={<VerifyEmail />}
            />
            <Route
              path={RouteList.FORGOT_PASSWORD}
              element={<ForgetPassword />}
            />
            <Route
              path={RouteList.PASSWORD_RESET}
              element={<ResetPassword />}
            />
          </Route>
          <Route path={`${RouteList.MAIN}`} element={<Main />} />


          <Route element={<ProtectedRoute redirectPage={RouteList.HOME} />}>
          {/* <Route path={`${RouteList.DASHBOARDMAIN}`} element={<ProtectedMain />} /> */}
            <Route
              path={`${RouteList.PROFILE}`}
              element={<Profile />}
            />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
