import EmployeeNavbar from "../components/Employee/EmployeeNavbar"
import EmployeeInteraction from "../components/Employee/EmployeeInteraction"
import Searcbar from "../components/Employee/Searchbar";
import SearchLabel from "../components/Employee/SearchLabel";
import SearchResult from "../components/Employee/SearchResult";

const Employee = () => {
    return (
        <>
            <EmployeeNavbar />
            <EmployeeInteraction/>
            <Searcbar/>
            <SearchLabel/>
            <SearchResult/>
        </>
    );
}

export default Employee;