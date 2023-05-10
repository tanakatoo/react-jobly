import React, { useState } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import "./Form.css"
import useForm from "./hooks/useForm"
import Error from "./Error"
import { v4 as uuid } from "uuid"

const LoginForm = (props) => {
    const [formData, setFormData] = useForm({ username: '', password: '' })
    const [error, setError] = useState(null)
    const handleChange = (e) => { setFormData(e.target.name, e.target.value) }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await props.login({
            username: formData.username,
            password: formData.password
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
                    <Button>Login</Button>
                </FormGroup>
            </Form>
            {error ? <Error msg={error} key={uuid()} /> : ''}
        </div>
    )
}

export default LoginForm