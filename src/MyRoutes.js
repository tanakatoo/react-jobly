import React from "react"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import Companies from './Companies';
import Home from './Home';
import Jobs from "./Jobs"
import CompanyJobs from "./CompanyJobs";
import Profile from "./Profile";
import Logout from "./Logout"
import { Route, Routes } from 'react-router-dom';

const MyRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm login={props.login} />} />
            <Route path="/logout" element={<Logout logOut={props.logOut} />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/signup" element={<SignupForm signUp={props.signUp} />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:handle" element={<CompanyJobs />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/profile" element={<Profile updateUser={props.updateUser} />} />
        </Routes>
    )
}

export default MyRoutes