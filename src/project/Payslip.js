import React, { useContext,employeesContext,earningContext,deductionContext } from 'react';
import { Link } from 'react-router-dom';

export default function Payslip(){
    const employees=useContext(employeesContext);
    const earning=useContext(earningContext);
    const deduction=useContext(deductionContext);
    return(<div>
        <div class="linker">
             <center><h1><i>SALARY CALCULATOR</i></h1></center>
    <ul>
        <li><Link to='/'  class="list">Home</Link></li>
        <li><Link to='/details'  class="list">DETAILS</Link></li>
        <li>PAYSLIP</li>
        
    </ul>
    </div>
  <h1>{earning.da}</h1>
    </div>)}