import Navbar from "../components/Navbar/Navbar"
import EmployeeInteraction from "../components/Employee/EmployeeInteraction"
import Searcbar from "../components/Employee/Searchbar";
import SearchLabel from "../components/Employee/SearchLabel";
import SearchResult from "../components/Employee/SearchResult";
import Pagination from "../components/Employee/Pagination";

import toLowerCaseNonAccentVietnamese from "../utils/toLowerCaseNonAccentVietnamese"

import { useEffect, useState } from 'react'

const Employee = (props) => {
    const [page, setPage] = useState(props.employees.length !== 0 ? 1 : 0)
    const [searchKey, setSearchKey] = useState("")
    const [searchResult, setSearchResult] = useState(props.employees)
    const [checkedID, setCheckedID] = useState([])
    const [checkAll, setCheckAll] = useState(false)

    useEffect(() => {
        setSearchResult(props.employees.filter(employee => toLowerCaseNonAccentVietnamese(employee.FullName).includes(toLowerCaseNonAccentVietnamese(searchKey))))
    }, [props.employees, searchKey])

    useEffect(() => {
        setPage(prevPage => {
            if (prevPage > Math.ceil(searchResult.length / 10))
                return Math.ceil(searchResult.length / 10)
            else if (searchResult.length !== 0)
                return prevPage > 0 ? prevPage : 1 
            else return 0
        })
    }, [searchResult])

    return (
        <>
            <Navbar selected="Employee"/>
            <EmployeeInteraction 
                checkedID={checkedID} setCheckedID={setCheckedID}
                teams={props.teams}
                setCheckAll={setCheckAll}
                setEmployees={props.setEmployees} />
            <Searcbar setSearchKey={setSearchKey} total={searchResult.length} />
            <SearchLabel />
            <SearchResult 
                employees={searchResult.slice((page - 1) * 10, (page - 1) * 10 + 10)} page={page}
                checkedID={checkedID} setCheckedID={setCheckedID}
                checkAll={checkAll} setCheckAll={setCheckAll} 
                setEmployees={props.setEmployees} />
            <Pagination page={page} maxPage={Math.ceil(searchResult.length / 10)} setPage={setPage} setCheckAll={setCheckAll} />
        </>
    );
}

export default Employee;