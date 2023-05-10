import { React, useState, useEffect, useContext } from "react"
import JobsCrd from "./JobsCrd"
import "./Jobs.css"
import "./CompanyJobs.css"
import JoblyApi from "./api"
import { useParams } from "react-router-dom"
import { UserContext } from "./context/UserContext"


const CompanyJob = () => {
    const user = useContext(UserContext)

    const { handle } = useParams()
    const [company, setCompany] = useState(null)

    useEffect(() => {
        const getCompanyJobs = async () => {

            setCompany(await JoblyApi.getCompany(handle))
        }
        getCompanyJobs()

    }, [])
    if (user) {
        return (
            <div className="CompanyJobs">
                {company ?
                    <>
                        <h3>{company.name}</h3>
                        <h6 className="CompanyJobs-space">{company.description}</h6>

                        <div className="Jobs-cards">
                            {company.jobs.map(j => <JobsCrd job={j} key={j.id} />)}
                        </div>
                    </>
                    : <p>Loading...</p>}
            </div >
        )
    } else {
        //not logged in - no token
        return (
            <>
                Sorry, not allowed to view this company. Please login or sign up.
            </>
        )
    }
}

export default CompanyJob