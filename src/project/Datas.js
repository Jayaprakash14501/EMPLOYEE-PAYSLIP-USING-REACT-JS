import React from 'react';

export default function Datas(props){
    var employees=props.employees;
    var deduction=props.deduction;
    var earning=props.earning;
   
 return(
        <div>
            <table>
                <tr>
                    <th colspan="4">Employee Details</th>
                </tr>
        <tr>
             <th><b>EMPLOYEE NAME:</b></th>
             <td>{employees.title}</td>
            <th><b>DATE:</b></th>
            <td>{employees.date}</td>
            </tr>
            <tr>
             <th> <b>EMPLOYEE ID:</b></th><td>{employees.id}</td>
            <th> <b>DESTINATION:</b></th><td>{employees.dest}</td>
            </tr>
           <tr>
            <th> <b>No.OF PRESENT DAYS</b></th><td> {employees.attend} </td>
            <th><b>DEPARTMENT:</b></th><td>{employees.dept}</td>
           </tr>
           <tr>
            <th colspan="2">EARNINGS</th>
            <th colspan="2">DEDUCTIONS</th>
           </tr>
           <tr>
                <th><b>BASIC SALARY:</b> </th><td>{earning.basicSalary} Rupees</td>
                <th rowspan="2"> <p>PF:</p></th><td rowspan="2">{deduction.pf} Rupees</td>
            </tr>
            <tr>
                <th><b>DA:</b> </th><td>{earning.da} Rupees</td>
                
            </tr>
            <tr>
                <th><b>BONUS:</b> </th><td>{earning.bonus} Rupees</td>
                <th rowspan="2"><b>PROFESSIONAL TAX:</b></th><td rowspan="2"> {deduction.professionalTax} Rupees</td>
            </tr>
            <tr>
                <th><b>OVERTIME</b> </th><td>{earning.over} Rupees</td>
                
            </tr>
            <tr>
                <th><b>SPECIAL ALLOWANCE</b></th><td> {earning.specialAllowance} Rupees</td>
                <th rowspan="2"><b>INCOME TAX</b></th><td rowspan="2">{deduction.incomeTax} Rupees</td>
            </tr>
            <tr>
                <th><b>COMMISSION</b></th><td> {earning.commision} Rupees</td>
                
           </tr><tr>
           
                <th rowspan="2"> <b>TOTAL EARNINGS</b> </th><td rowspan="2">{earning.totalEarning} Rupees</td>
                <th rowspan="2" ><b>TOTAL DEDUCTION</b>  </th><td rowspan="2"> {deduction.totalDeduction} Rupees</td>
            </tr>
            <tr></tr>
            <tr>
                <th colspan="2">NET BILL:</th>
                <td colspan="2"> {deduction.netBill} Rupees</td>
            </tr>
            </table>
            </div>
    )
}