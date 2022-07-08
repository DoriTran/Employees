import { Button, Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./EmployeeNavbar.scss"

const EmployeeNavbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>                        
                    <Navbar.Brand href="">
                        <img src="/Logo.png" alt="Employee Logo"></img>
                        Employee Manager
                    </Navbar.Brand>    

                    <div className="buttonGroup">
                        <Link to="/employee">
                            <Button variant="primary" className="mx-2">Employee</Button>
                        </Link>
                        <Link to="/team">
                            <button  className="customButton">Team</button> 
                        </Link>                         
                    </div>
                    
                </Container>
            </Navbar>
        </>
    ) 
}

export default EmployeeNavbar