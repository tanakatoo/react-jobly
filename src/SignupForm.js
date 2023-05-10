import React, { useState } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import "./Form.css"
import useForm from "./hooks/useForm"
import { v4 as uuid } from "uuid"
import Error from "./Error"

const Signupform = ({ signUp }) => {
    const [error, setError] = useState(null)
    const [formData, setFormData] = useForm({ username: '', password: '', firstName: '', lastName: '', email: '' })
    const handleChange = (e) => { setFormData(e.target.name, e.target.value) }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signUp({
            username: formData.username,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        })
        if (!res.token) {
            setError(res)
        } else {
            setError(null)
        }
    }
    return (
        <div className="Form">
            <Form className="Form-width" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input name="username" onChange={handleChange} value={formData.username}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input name="password" onChange={handleChange} value={formData.password}></Input>
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
                <FormGroup>
                    <Button>Sign up</Button>
                </FormGroup>
            </Form>
            {error ? <Error msg={error} key={uuid()} /> : ''}
        </div>
    )
}

export default Signupform