import Navbar from "../components/Navbar/Navbar"
import EmployeeInteraction from "../components/Employee/EmployeeInteraction"
import Searcbar from "../components/Employee/Searchbar";
import SearchLabel from "../components/Employee/SearchLabel";
import SearchResult from "../components/Employee/SearchResult";
import Pagination from "../components/Employee/Pagination";
import { CircularProgress } from "@mui/material"

import toLowerCaseNonAccentVietnamese from "../utils/toLowerCaseNonAccentVietnamese"

import { useEffect, useState } from 'react'
import { useQuery } from "react-query"
import getAllEmployees from "../api-calls/employee/getAllEmployees"
import getAllTeams from "../api-calls/team/getAllTeam";

const Employee = () => {
    const {isLoading: isEmployeeLoading, isError: isEmployeeError, isSuccess: isEmployeeSuccess, refetch: refetchEmployee, data: employees} = useQuery('getAllEmployees', getAllEmployees)
    const {isLoading: isTeamLoading, isError: isTeamError, isSuccess: isTeamSuccess, data: teams} = useQuery('getAllTeams', getAllTeams)

    const [page, setPage] = useState(0)
    const [searchResult, setSearchResult] = useState("")

    const [searchKey, setSearchKey] = useState("")
    const [checkedID, setCheckedID] = useState([])
    const [checkAll, setCheckAll] = useState(false)
    
    useEffect(() => {
        if (isEmployeeSuccess && isTeamSuccess)
        setSearchResult(employees.filter(employee => toLowerCaseNonAccentVietnamese(employee.fullName).includes(toLowerCaseNonAccentVietnamese(searchKey))))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchKey, employees])

    useEffect(() => {
        setPage(prevPage => {
            if (prevPage > Math.ceil(searchResult.length / 10))
                return Math.ceil(searchResult.length / 10)
            else if (searchResult.length !== 0)
                return prevPage > 0 ? prevPage : 1 
            else return 0
        })
    }, [searchResult])

    if (isEmployeeLoading || isTeamLoading) {
        return <CircularProgress size={"25px"} />
    } else if (isEmployeeError || isTeamError) {
        return <span style={{color: 'red'}}>Error loading employees data</span>
    } else if (searchResult === "") {
        setPage(employees.length !== 0 ? 1 : 0)
        setSearchResult(employees)
        return <CircularProgress size={"25px"} />
    } else {   
        return (
            <>
            <Navbar selected="Employee"/>
            <EmployeeInteraction 
                checkedID={checkedID} setCheckedID={setCheckedID}
                teams={teams}
                setCheckAll={setCheckAll}
                refetch={refetchEmployee} />
            <Searcbar setSearchKey={setSearchKey} total={searchResult.length} />
            <SearchLabel />
            <SearchResult 
                employees={searchResult.slice((page - 1) * 10, (page - 1) * 10 + 10)} 
                page={page}
                teams={teams}
                checkedID={checkedID} setCheckedID={setCheckedID}
                checkAll={checkAll} setCheckAll={setCheckAll}
                refetch={refetchEmployee} />
            <Pagination page={page} maxPage={Math.ceil(searchResult.length / 10)} setPage={setPage} setCheckAll={setCheckAll} />
        </>
        )
    }
}

export default Employee;