import { React, useState, useContext } from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import "./JobsCrd.css"
import Btn from "./Btn"
import { UserContext } from "./context/UserContext"
import { ApplyContext } from "./context/ApplyContext"

const JobsCrd = ({ job }) => {
    const user = useContext(UserContext)
    const applyFn = useContext(ApplyContext)
    // const [applied, setApplied] = useState(false)
    // const [btnClick, setBtnClick] = useState(false)
    //check if it is already applied
    // console.log(user)
    // if (user.user.applications.includes(job.id)) {
    //     setApplied(true)
    // }

    // const handleClick = () => {
    //     setBtnClick(true)
    // }
    // if (btnClick) {
    const apply = async () => {
        const res = await applyFn(user.user.username, job.id)
        console.log('applying, this is res', res)
    }

    //     setBtnClick(false)
    // }

    return (
        <Card className="JobsCrd">
            <CardBody>
                <CardTitle tag="h5">{job.title}</CardTitle>
                <CardSubtitle>{job.companyName}</CardSubtitle>

                <div className="JobsCrd-salary-apply">
                    <div className="JobsCrd-salary">Equity: {job.equity ? job.equity : 0}<br />
                        Salary: {job.salary ? job.salary : "N/A"}</div>
                    {user.user.applications.includes(job.id) ? <Btn disabled={true} name="Applied" color="danger" /> : <Btn handleClick={apply} name="Apply" href="#" color="danger" />}
                </div>
            </CardBody>

        </Card >
    )
}

export default JobsCrd