import EmployeeNavbar from "../components/Employee/EmployeeNavbar"
import EmployeeInteraction from "../components/Employee/EmployeeInteraction"
import Searcbar from "../components/Employee/Searchbar";
import SearchLabel from "../components/Employee/SearchLabel";
import SearchResult from "../components/Employee/SearchResult";
import Pagination from "../components/Employee/Pagination";

import toLowerCaseNonAccentVietnamese from "../utils/toLowerCaseNonAccentVietnamese"

import { useEffect, useState } from 'react'

const Employee = () => {
    const [employees, setEmployees] = useState([
        { EmployeeID: "001", FullName: 'Trần Thị Hương', Phone: '0123456789', Team: "Manager", },
        { EmployeeID: "002", FullName: 'Võ Chí Thanh', Phone: '0158987522', Team: "IT Support", },
        { EmployeeID: "003", FullName: 'Trần Văn Long', Phone: '0785413695', Team: "Engineer", },
        { EmployeeID: "004", FullName: 'Trần Thị Mạnh Hường', Phone: '0987465146', Team: "Engineer", },
        { EmployeeID: "005", FullName: 'Võ Thị Mai Phương', Phone: '0968451365', Team: "Tester", },
        { EmployeeID: "006", FullName: 'Trần Đỗ Như Huỳnh', Phone: '0123456789', Team: "BA", },
        { EmployeeID: "007", FullName: 'Đồ Anh Tú', Phone: '0123456789', Team: "Tester", },
        { EmployeeID: "008", FullName: 'Hồng Thiên Trí', Phone: '0123456789', Team: "Manager", },
        { EmployeeID: "009", FullName: 'Ngũ Thế Vinh', Phone: '0123456789', Team: "Engineer", },
        { EmployeeID: "010", FullName: 'Nguyễn Huy Vũ', Phone: '0123456789', Team: "BA", },
        { EmployeeID: "011", FullName: 'Hạ Tuấn Long', Phone: '0123456789', Team: "Tester", },
        { EmployeeID: "012", FullName: 'Đổng Trung Hiếu', Phone: '0123456789', Team: "Engineer", },
        { EmployeeID: "013", FullName: 'Khu Nam Dương', Phone: '0123456789', Team: "IT Support", },
        { EmployeeID: "014", FullName: 'Uông Trí Hữu', Phone: '0123456789', Team: "Engineer", },
        { EmployeeID: "015", FullName: 'Lô Quang Triều', Phone: '0123456789', Team: "Tester", },
        { EmployeeID: "016", FullName: 'Đồ Trung Chính', Phone: '0123456789', Team: "Engineer", },
        { EmployeeID: "017", FullName: 'Vũ Khánh Nam', Phone: '0123456789', Team: "IT Support", },
        { EmployeeID: "018", FullName: 'Ngọc Việt Khoa', Phone: '0123456789', Team: "BA", },
        { EmployeeID: "019", FullName: 'Biện Trí Dũng', Phone: '0123456789', Team: "Engineer", },
        { EmployeeID: "020", FullName: 'Bùi Đức Cao', Phone: '0123456789', Team: "IT Support", },
        { EmployeeID: "021", FullName: 'Điền Hữu Chiến', Phone: '0123456789', Team: "Engineer", },
        { EmployeeID: "022", FullName: 'Bàn Thanh Ðoàn', Phone: '0123456789', Team: "IT Support", },
        { EmployeeID: "023", FullName: 'Đức Hữu Cường', Phone: '0123456789', Team: "Tester", },
        { EmployeeID: "024", FullName: 'Thân Kim Sơn', Phone: '0123456789', Team: "Engineer", },
        { EmployeeID: "025", FullName: 'Hoa Công Giang', Phone: '0123456789', Team: "IT Support", },
        { EmployeeID: "026", FullName: 'Hồng Quang Minh', Phone: '0123456789', Team: "BA", },
        { EmployeeID: "027", FullName: 'Ngũ Nhật Quốc', Phone: '0123456789', Team: "BA", },
        { EmployeeID: "028", FullName: 'Hạ Minh Nhật', Phone: '0123456789', Team: "Tester", },
        { EmployeeID: "029", FullName: 'Phi Ngọc Hiển', Phone: '0123456789', Team: "BA", },
        { EmployeeID: "030", FullName: 'Lê Thiên An', Phone: '0123456789', Team: "Manager", },
        { EmployeeID: "031", FullName: 'Trần Quốc Đông', Phone: '03788525222', Team: "Engineer", },
        { EmployeeID: "032", FullName: 'Nguyễn Ngọc Vũ Như', Phone: '0948156325', Team: "BA", },
    ])

    const [page, setPage] = useState(employees.length !== 0 ? 1 : 0)
    const [searchKey, setSearchKey] = useState("")
    const [searchResult, setSearchResult] = useState(employees)
    const [checkedID, setCheckedID] = useState([])
    const [checkAll, setCheckAll] = useState(false)

    useEffect(() => {
        setSearchResult(employees.filter(employee => toLowerCaseNonAccentVietnamese(employee.FullName).includes(toLowerCaseNonAccentVietnamese(searchKey))))
    }, [employees, searchKey])

    useEffect(() => {
        setPage(prevPage => {
            if (prevPage > Math.ceil(searchResult.length / 10))
                return Math.ceil(searchResult.length / 10)
            else if (searchResult.length !== 0)
                return prevPage > 0 ? prevPage : 1 
            else return 0
        })
    }, [searchResult])

    //useEffect(() => { console.log(checkedID) }, [checkedID])

    return (
        <>
            <EmployeeNavbar />
            <EmployeeInteraction 
                checkedID={checkedID} setCheckedID={setCheckedID}
                setCheckAll={setCheckAll}
                setEmployees={setEmployees} />
            <Searcbar setSearchKey={setSearchKey} total={searchResult.length} />
            <SearchLabel />
            <SearchResult employees={searchResult.slice((page - 1) * 10, (page - 1) * 10 + 10)} page={page}
                checkedID={checkedID} setCheckedID={setCheckedID}
                checkAll={checkAll} setCheckAll={setCheckAll} />
            <Pagination page={page} maxPage={Math.ceil(searchResult.length / 10)} setPage={setPage} setCheckAll={setCheckAll} />
        </>
    );
}

export default Employee;