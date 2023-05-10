import React, { useEffect, useState, useContext } from "react"
import CompaniesCrd from "./CompaniesCrd"
import Search from "./Search"
import "./Companies.css"
import JoblyApi from "./api"
import { UserContext } from "./context/UserContext"


const Companies = () => {
    const user = useContext(UserContext)
    const [companies, setCompanies] = useState([])
    const [queryString, setQueryString] = useState('')


    const setStringFromSearch = (query) => setQueryString(query)

    useEffect(() => {
        let func
        if (queryString === '') {
            func = async () => setCompanies(await JoblyApi.getCompanies())
        } else {
            func = async () => setCompanies(await JoblyApi.searchCompanies(queryString))
        }
        func()
    }, [queryString])

    if (user) {
        return (
            <div className="Companies">
                <div className="Companies-cards">
                    <Search type="companies" setStringFromSearch={setStringFromSearch} />

                    {companies.map(c => <CompaniesCrd company={c} key={c.handle} />)}
                </div>
            </div>
        )
    } else {
        //not logged in - no token
        return (
            <>
                Sorry, not allowed to access companies. Please login or sign up.
            </>
        )
    }
}

export default Companies