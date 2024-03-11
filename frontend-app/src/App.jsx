/** @format */

import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./layout/Layout";
import NotFound from "./pages/error/NotFound";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Jobs from "./pages/job/Jobs";
import PostJob from "./pages/job/PostJob";
import JobDetails from "./pages/job/JobDetails";
import Myjobs from "./pages/job/Myjobs";
import Application from "./pages/application/Application";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='' element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route path='/job/getall' element={<Jobs />} />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route path='/job/post' element={<PostJob />} />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route path='/job/detail/:id' element={<JobDetails />} />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route path='/job/me' element={<Myjobs />} />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route path='/application/:id' element={<Application />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword/:token' element={<ResetPassword />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
