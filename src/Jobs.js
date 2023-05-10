import { React, useState, useEffect, useContext } from "react"
import JobsCrd from "./JobsCrd"
import Search from "./Search"
import "./Jobs.css"
import JoblyApi from "./api"
import { UserContext } from "./context/UserContext"

const Jobs = () => {
    const user = useContext(UserContext)
    const [jobs, setJobs] = useState([])

    //get all companies first
    useEffect(() => {
        const getAllJobs = async () => setJobs(await JoblyApi.getJobs())
        getAllJobs()
    }, [])

    if (user) {
        return (
            <div className="Jobs">
                <div className="Jobs-cards">

                    {jobs.map(j => <JobsCrd job={j} key={j.id} />)}
                </div>
            </div>
        )
    } else {
        //not logged in - no token
        return (
            <>
                Sorry, not allowed to access jobs. Please login or sign up.
            </>
        )
    }
}

export default Jobs