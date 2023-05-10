
import { Button } from "reactstrap"
import "./Btn.css"


const Btn = ({ handleClick = () => { }, disabled = false, href = '', type = "button", color = "primary", name = "Click me" }) => {

    return (
        <Button onClick={handleClick} disabled={disabled} formAction={href} className="Btn" type={type} color={color}>{name}</Button>
    )
}

export default Btn