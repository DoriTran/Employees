import EmployeeNavbar from "../components/Employee/EmployeeNavbar"
import EmployeeInteraction from "../components/Employee/EmployeeInteraction"
import Searcbar from "../components/Employee/Searchbar";

const Employee = () => {
    return (
        <>
            <EmployeeNavbar />
            <EmployeeInteraction/>
            <Searcbar/>
        </>
    );
}

export default Employee;