import EmployeeNavbar from "../components/Employee/EmployeeNavbar"
import EmployeeInteraction from "../components/Employee/EmployeeInteraction"
import Searcbar from "../components/Employee/Searchbar";
import SearchLabel from "../components/Employee/SearchLabel";
import SearchResult from "../components/Employee/SearchResult";
import Pagination from "../components/Employee/Pagination";

import { useState } from 'react'

const employees = [
    { FullName: 'Trần Thị Hương', Phone: '0123456789', Team: "Manager", },
    { FullName: 'Võ Chí Thanh', Phone: '0158987522', Team: "IT Support", },
    { FullName: 'Trần Văn long', Phone: '0785413695', Team: "Engineer", },
    { FullName: 'Trần Thị Mạnh Hường', Phone: '0987465146', Team: "Engineer", },
    { FullName: 'Võ Thị Mai Phương', Phone: '0968451365', Team: "Tester", },
    { FullName: 'Trần Đỗ Như Huỳnh', Phone: '0123456789', Team: "BA", },
    { FullName: 'Đồ Anh Tú', Phone: '0123456789', Team: "Tester", },
    { FullName: 'Hồng Thiên Trí', Phone: '0123456789', Team: "Manager", },
    { FullName: 'Ngũ Thế Vinh', Phone: '0123456789', Team: "Engineer", },
    { FullName: 'Nguyễn Huy Vũ', Phone: '0123456789', Team: "BA", },
    { FullName: 'Hạ Tuấn Long', Phone: '0123456789', Team: "Tester", },
    { FullName: 'Đổng Trung Hiếu', Phone: '0123456789', Team: "Engineer", },
    { FullName: 'Khu Nam Dương', Phone: '0123456789', Team: "IT Support", },
    { FullName: 'Uông Trí Hữu', Phone: '0123456789', Team: "Engineer", },
    { FullName: 'Lô Quang Triều', Phone: '0123456789', Team: "Tester", },
    { FullName: 'Đồ Trung Chính', Phone: '0123456789', Team: "Engineer", },
    { FullName: 'Vũ Khánh Nam', Phone: '0123456789', Team: "IT Support", },
    { FullName: 'Ngọc Việt Khoa', Phone: '0123456789', Team: "BA", },
    { FullName: 'Biện Trí Dũng', Phone: '0123456789', Team: "Engineer", },
    { FullName: 'Bùi Đức Cao', Phone: '0123456789', Team: "IT Support", },
    { FullName: 'Điền Hữu Chiến', Phone: '0123456789', Team: "Engineer", },
    { FullName: 'Bàn Thanh Ðoàn', Phone: '0123456789', Team: "IT Support", },
    { FullName: 'Đức Hữu Cường', Phone: '0123456789', Team: "Tester", },
    { FullName: 'Thân Kim Sơn', Phone: '0123456789', Team: "Engineer", },
    { FullName: 'Hoa Công Giang', Phone: '0123456789', Team: "IT Support", },
    { FullName: 'Hồng Quang Minh', Phone: '0123456789', Team: "BA", },
    { FullName: 'Ngũ Nhật Quốc', Phone: '0123456789', Team: "BA", },
    { FullName: 'Hạ Minh Nhật', Phone: '0123456789', Team: "Tester", },
    { FullName: 'Phi Ngọc Hiển', Phone: '0123456789', Team: "BA", },
    { FullName: 'Lê Thiên An', Phone: '0123456789', Team: "Manager", },
    { FullName: 'Trần Quốc Đông', Phone: '03788525222', Team: "Engineer", },
    { FullName: 'Nguyễn Ngọc Vũ Như', Phone: '0948156325', Team: "BA", },
]

const Employee = () => {
    const [page, setPage] = useState(employees.length !== 0 ? 1 : 0)

    return (
        <>
            <EmployeeNavbar />
            <EmployeeInteraction/>
            <Searcbar/>
            <SearchLabel/>
            <SearchResult employees={employees.slice((page-1) * 10, (page-1) * 10 + 10)} page={page}/>
            <Pagination page={page} maxPage={Math.ceil(employees.length/10)} setPage={setPage}/>
        </>
    );
}

export default Employee;