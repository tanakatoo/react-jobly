import React, { useState } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import "./Form.css"
import useForm from "./hooks/useForm"
import "./Search.css"

const Search = ({ setStringFromSearch }) => {
    const [formData, setFormData] = useForm({ search: '' })
    const handleChange = (e) => { setFormData(e.target.name, e.target.value) }
    const handleSubmit = (e) => {
        e.preventDefault()
        setStringFromSearch(formData.search)

    }

    return (
        <div className="Search">
            <Form className="Search-Form" onSubmit={handleSubmit}>

                <Input placeholder="Search" name="search" onChange={handleChange} value={formData.search}></Input>
                <Button>Search</Button>

            </Form>
        </div>
    )
}

export default Search