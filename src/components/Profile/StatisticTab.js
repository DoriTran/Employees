import "./InformationTab.scss"
import { Bar } from 'react-chartjs-2'
import { useQuery } from "react-query"
import { CircularProgress } from "@mui/material"

import getAllWorkingByEmployeeNo from "../../api-calls/working/getAllWorkingByEmployeeNo"
import getAllAdvanceByEmployeeNo from "../../api-calls/advance/getAllAdvanceByEmployeeNo"

const InfomationTab = (props) => {
    const { isLoading: isWorkingLoading, isError: isWorkingError, data: workings }
        = useQuery('getAllWorkingByEmployeeNo', getAllWorkingByEmployeeNo.bind(null, props.employeeNo))

    const { isLoading: isAdvanceLoading, isError: isAdvanceError, data: advances }
        = useQuery('getAllAdvanceByEmployeeNo', getAllAdvanceByEmployeeNo.bind(null, props.employeeNo))

    if (isWorkingLoading || isAdvanceLoading) {
        return <CircularProgress size={"100px"} />
    } else if (isWorkingError || isAdvanceError) {
        return <span style={{ color: 'red' }}>Error loading advance data</span>
    } else {
        console.log(advances)
        return (
            <div className="tab-wrapper">
                <div className="tab-header">STATISTICS</div>
                <div className="chart-container">
                    <Bar
                        data={{
                            labels: workings.map(working => working.date.slice(5, 10)),
                            datasets: [{
                                label: 'Working Statistic (Hour per day)',
                                data: workings.map(working => working.hour),
                                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                                borderColor: 'rgb(153, 102, 255)',
                                borderWidth: 1
                            }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                        }}
                        height={300}
                        width={400} />
                </div>
                <div className="chart-container">
                    <Bar
                        data={{
                            labels: advances.map(advance => advance.date.slice(5, 10)),
                            datasets: [{
                                label: 'Advance Statistic ($ per day)',
                                data: advances.map(advance => parseInt(advance.money.slice(0, -1))),
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1
                            }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                        }}
                        height={300}
                        width={400} />
                </div>


            </div>
        )
    }
}

export default InfomationTab