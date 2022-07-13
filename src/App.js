import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';

import { useState } from "react"

import Employee from './pages/Employee'
import Profile from './pages/Profile'

function App() {
  const [employees, setEmployees] = useState([
    { EmployeeID: "001", FullName: 'Trần Thị Hương', Phone: '0123456789', Team: "Manager", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "002", FullName: 'Võ Chí Thanh', Phone: '0158987522', Team: "IT Support", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "003", FullName: 'Trần Văn Long', Phone: '0785413695', Team: "Engineer", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "004", FullName: 'Trần Thị Mạnh Hường', Phone: '0987465146', Team: "Engineer", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "005", FullName: 'Võ Thị Mai Phương', Phone: '0968451365', Team: "Tester", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "006", FullName: 'Trần Đỗ Như Huỳnh', Phone: '0123456789', Team: "BA", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "007", FullName: 'Đồ Anh Tú', Phone: '0123456789', Team: "Tester", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "008", FullName: 'Hồng Thiên Trí', Phone: '0123456789', Team: "Manager", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "009", FullName: 'Ngũ Thế Vinh', Phone: '0123456789', Team: "Engineer", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "010", FullName: 'Nguyễn Huy Vũ', Phone: '0123456789', Team: "BA", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "011", FullName: 'Hạ Tuấn Long', Phone: '0123456789', Team: "Tester", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "012", FullName: 'Tăng Thúy Ngọc', Phone: '0123456789', Team: "Engineer", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "013", FullName: 'Khu Nam Dương', Phone: '0123456789', Team: "IT Support", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "014", FullName: 'Uông Trí Hữu', Phone: '0123456789', Team: "Engineer", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "015", FullName: 'Lô Quang Triều', Phone: '0123456789', Team: "Tester", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "016", FullName: 'Đồ Trung Chính', Phone: '0123456789', Team: "Engineer", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "017", FullName: 'Vũ Khánh Nam', Phone: '0123456789', Team: "IT Support", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "018", FullName: 'Ngọc Thị Việt Khoa', Phone: '0123456789', Team: "BA", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "019", FullName: 'Biện Trí Dũng', Phone: '0123456789', Team: "Engineer", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "020", FullName: 'Bùi Đức Cao', Phone: '0123456789', Team: "IT Support", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "021", FullName: 'Điền Hữu Chiến', Phone: '0123456789', Team: "Engineer", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "022", FullName: 'Nguyễn Ngọc Thanh Ðoàn', Phone: '0123456789', Team: "IT Support", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "023", FullName: 'Đức Hữu Cường', Phone: '0123456789', Team: "Tester", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "024", FullName: 'Thân Bích Sơn', Phone: '0123456789', Team: "Engineer", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "025", FullName: 'Hoa Công Giang', Phone: '0123456789', Team: "IT Support", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "026", FullName: 'Hồng Quang Minh', Phone: '0123456789', Team: "BA", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "027", FullName: 'Ngũ Nhật Quốc', Phone: '0123456789', Team: "BA", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "028", FullName: 'Hạ Minh Nhật', Phone: '0123456789', Team: "Tester", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "029", FullName: 'Phi Ngọc Hiển', Phone: '0123456789', Team: "BA", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "030", FullName: 'Lê Thiên An', Phone: '0123456789', Team: "Manager", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "031", FullName: 'Trần Quốc Đông', Phone: '03788525222', Team: "Engineer", Age: 18, Sex: "Male", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
    { EmployeeID: "032", FullName: 'Nguyễn Ngọc Vũ Như', Phone: '0948156325', Team: "BA", Age: 18, Sex: "Female", StartDay: "13/07/2022", Address: "Quy Nhon", MoneyHour: 1200, Working: [{No: 1, Day: "12/07/2022", Hour: 8}, {No: 2, Day: "13/07/2022", Hour: 8.5}, {No: 3, Day: "14/07/2022", Hour: 7}], Advance: [{No: 1, Day: "09/07/2022", Money: "25$"}, {No: 2, Day: "10/07/2022", Money: "20$"}]},
])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="employee" element={<Employee employees={employees} setEmployees={setEmployees}/>} />
        <Route path="profile/id=:EmployeeID" element={<Profile employees={employees} setEmployees={setEmployees}></Profile>} />
        {/* <Route path="team" element={<Team />} /> */}
        <Route path="*" element={<Navigate replace to='/employee' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
