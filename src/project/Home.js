import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){
    return(<div>
        <div class="linker">
             <center><h1><i>SALARY CALCULATOR</i></h1></center>
    <ul>
        <li>HOME</li>
        <li><Link to='/details'  class="list">DETAILS</Link></li>
        
        
    </ul>
    </div>
    <div class="body">
    <div class="about">
       <fieldset> <legend><h1><i>PAYSLIP</i></h1></legend>
        <p><i>A salary slip or Payslip is a financial legal document, which, works as proof of compensation you receive from your employer. It will show all the components of your salary including base salary, mandatory and temporary allowances, deductions, tax paid, etc.</i></p>
        <hr></hr><h1>Usage</h1>
        <p><i>It is a document that every company is liable to provide to its employees every month. The slip includes information regarding the employee's deductions and basic salary for a given month. It works as proof of salary payment and is generally provided by employers as both soft and hard copies.</i></p>
        <hr></hr><dl><dt><h1><i>BENEFITS</i></h1></dt>
        <dd><ul>
        <li><i>It Works as a Proof of Employment. A salary slip is a readily available document to show your continued employment.</i></li><br></br>
        <li><i>It Becomes the Basis for Income Tax Payment.</i></li><br></br>
        <li><i>It Helpful while Seeking Future Employment.</i></li><br></br>
        <li><i>It Helps Avail Loans.</i></li><br></br>
        <li><i>It Income Proof for Insurance and Credit Cards.</i></li>
        </ul></dd>
        </dl>
        </fieldset>
        </div>
       </div>
            
    <div class="footer">
      <h1>@Contacts</h1>
      <p>JAYA PRAKASH</p>
      <p>irulappanprakash2001@gmail.com</p>
      <p>8489755101</p>
      
      
    </div>
    </div>
)}