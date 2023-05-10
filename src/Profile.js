import React, { useState, useContext } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import "./Form.css"
import useForm from "./hooks/useForm"
import Btn from "./Btn"
import Error from "./Error"
import { v4 as uuid } from "uuid"
import { UserContext } from "./context/UserContext"


const Profile = ({ updateUser }) => {
    const user = useContext(UserContext)
    const [formData, setFormData] = useForm(user ? {
        username: user.user.username,
        firstName: user.user.firstName,
        lastName: user.user.lastName,
        email: user.user.email
    } : { username: '', firstName: '', lastName: '', email: '' })
    const [error, setError] = useState([])

    const handleChange = (e) => { setFormData(e.target.name, e.target.value) }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await updateUser({
            username: formData.username,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        })

        if (!res.user) {
            setError(res)
        } else {
            setError([])
        }
    }
    if (user) {
        return (
            <div className="Form">
                <Form className="Form-width" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input name="username" onChange={handleChange} value={formData.username} disabled={true}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input name="firstName" onChange={handleChange} value={formData.firstName}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input name="lastName" onChange={handleChange} value={formData.lastName}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input name="email" onChange={handleChange} value={formData.email}></Input>
                    </FormGroup>
                    <FormGroup className="Form-center">
                        <Btn name="Save" type="submit" color="primary" />
                    </FormGroup>
                </Form>
                {error ? <Error msg={error} key={uuid()} /> : ''}


            </div>
        )
    }
    else { return (<p>Sorry, not authorized to view this page.</p>) }
}

export default Profile