import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./Navbar.scss"

const EmployeeNavbar = (props) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>                        
                    <Navbar.Brand href="">
                        <img src={require("./Logo.png") } alt="Employee Logo"></img>
                        Employee Manager
                    </Navbar.Brand>    

                    <div className="buttonGroup">
                        <Link to="/employee">
                            {props.selected === "Employee" ? 
                            <button className="selected custom-btn">Employee</button> : 
                            <button className="custom-btn">Employee</button> } 
                        </Link>
                        <Link to="/team">
                            {props.selected === "Team" ? 
                            <button className="selected custom-btn">Team</button> : 
                            <button className="custom-btn">Team</button> } 
                        </Link>                         
                    </div>
                    
                </Container>
            </Navbar>
        </>
    ) 
}

export default EmployeeNavbar