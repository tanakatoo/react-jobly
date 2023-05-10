import { React, useState } from "react"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import "./CompaniesCrd.css"
import { Link } from "react-router-dom"

const CompaniesCrd = ({ company }) => {

    return (
        <Link className="CompaniesCrd-Link" to={`/companies/${company.handle}`}>
            <Card className="CompaniesCrd">
                <div className="CompaniesCrd-Card">

                    <CardBody>
                        <CardTitle tag="h5">{company.name}</CardTitle>
                        <CardSubtitle>{company.description}</CardSubtitle>
                    </CardBody>
                    {company.logoUrl ? <img className="CompaniesCrd-img" src={company.logoUrl} alt={`${company.name} image`} /> : ''}

                </div>
            </Card>
        </Link>
    )
}

export default CompaniesCrd