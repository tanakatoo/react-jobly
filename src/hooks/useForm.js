import React, { useState } from "react"


const useForm = (initial_state) => {
    const [formData, setFormData] = useState(initial_state)
    const handleChange = (name, value) => {
        // const { name, value } = e.target
        setFormData((data) => ({ ...data, [name]: value }))
    }
    return [formData, handleChange]
}

export default useForm