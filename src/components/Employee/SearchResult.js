import "./SearchResult.scss"

const employees = [
    { FullName: 'Trần Thị Hương', Phone: '0123456789', Team: "Manager",  },
    { FullName: 'Võ Chí Thanh', Phone: '0158987522', Team: "IT Support",  },
    { FullName: 'Trần Văn long', Phone: '0785413695', Team: "Engineer",  },
    { FullName: 'Trần Thị Mạnh Hường', Phone: '0987465146', Team: "Engineer",  },
    { FullName: 'Võ Thị Mai Phương', Phone: '0968451365', Team: "Tester",  },
    { FullName: 'Trần Đỗ Như Huỳnh', Phone: '0123456789', Team: "BA",  },
    { FullName: 'Đồ Anh Tú', Phone: '0123456789', Team: "Tester",  },
    { FullName: 'Hồng Thiên Trí', Phone: '0123456789', Team: "Manager",  },
    { FullName: 'Ngũ Thế Vinh', Phone: '0123456789', Team: "Manager",  },
    { FullName: 'Nguyễn Huy Vũ', Phone: '0123456789', Team: "BA",  },
    { FullName: 'Hạ Tuấn Long', Phone: '0123456789', Team: "Tester",  },
    { FullName: 'Đổng Trung Hiếu', Phone: '0123456789', Team: "Manager",  },
    { FullName: 'Khu Nam Dương', Phone: '0123456789', Team: "IT Support",  },
    { FullName: 'Uông Trí Hữu', Phone: '0123456789', Team: "Manager",  },
    { FullName: 'Lô Quang Triều', Phone: '0123456789', Team: "Tester",  },
    { FullName: 'Đồ Trung Chính', Phone: '0123456789', Team: "Manager",  },
    { FullName: 'Vũ Khánh Nam', Phone: '0123456789', Team: "IT Support",  },
    { FullName: 'Ngọc Việt Khoa', Phone: '0123456789', Team: "BA",  },
    { FullName: 'Biện Trí Dũng', Phone: '0123456789', Team: "Manager",  },
    { FullName: 'Bùi Đức Cao', Phone: '0123456789', Team: "IT Support",  },
    { FullName: 'Điền Hữu Chiến', Phone: '0123456789', Team: "Manager",  },
    { FullName: 'Bàn Thanh Ðoàn', Phone: '0123456789', Team: "IT Support",  },
    { FullName: 'Đức Hữu Cường', Phone: '0123456789', Team: "Tester",  },
    { FullName: 'Thân Kim Sơn', Phone: '0123456789', Team: "IT Support",  },
    { FullName: 'Hoa Công Giang', Phone: '0123456789', Team: "IT Support",  },
    { FullName: 'Hồng Quang Minh', Phone: '0123456789', Team: "BA",  },
    { FullName: 'Ngũ Nhật Quốc', Phone: '0123456789', Team: "BA",  },
    { FullName: 'Hạ Minh Nhật', Phone: '0123456789', Team: "Tester",  },
    { FullName: 'Phi Ngọc Hiển', Phone: '0123456789', Team: "BA",  },
    { FullName: 'Lê Thiên An', Phone: '0123456789', Team: "Manager",  },
]

const SearchResult = () => {
    return (
        <table>
            <tr>
                <th><input type="checkbox" name="check_all"/></th>
                <th>No</th>
                <th>FullName</th>
                <th>Phone</th>
                <th>Team</th>
                <th>Option</th>
            </tr>
            {
                employees.map((employee, index) => (
                    <tr>
                        <td><input type="checkbox" name="check_all"/></td>
                        <td>{index + 1}</td>
                        <td>{employee.FullName}</td>
                        <td>{employee.Phone}</td>
                        <td>{employee.Team}</td>
                        <td>Option</td>
                    </tr>)
                )
            }
            
        </table>
    )
}

export default SearchResult