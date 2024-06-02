import React, { useState } from 'react';
import './Det.css'
import { Link } from 'react-router-dom';
import Datas from './Datas';
export default function Details(){
    const[employees,setEmployees]=useState({});
    const[deduction,setDeduction]=useState({});
    const[earning,setEarning]=useState({});
    const[isVisible,setIsVisible]=useState(false);
    function validate(){
      
      if((employees.title>="a")&&(employees.title<="z")||(employees.title>="A")&&(employees.title<="Z")){
        if(/^[0-9]+$/.test(employees.id)){
          if(employees.dest==="Manager" || employees.dest==="Assistant Manager" || employees.dest==="Team Leader" || employees.dest==="Junior" || employees.dest==="Senior"){
            if(employees.dept==="Front End" || employees.dept==="Back End" || employees.dept==="BPO" || employees.dept==="Tester" || employees.dept==="Sales"){
              if(/^[0-9]{1,2}$/.test(employees.attend)){
                if(employees.attend>0 && employees.attend<32){
              return true;
            }
          else{
            alert("please enter upto 30");
          }}
          else{
        alert("please enter digits only");
          }}
    else{
      alert("please select any department");
    }}
  else{
    alert("please select any destination");
  }}
  else{
    alert("please enter valid id");
  }}
else
{
    alert("please enter valid name");
    return false;
  }
 
 
    }

    
    const handleChange=(e)=>{
        var name=e.target.name;
        var value=e.target.value;
        setEmployees(values=>({...values,[name]:value}));
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(validate()){
          alert("successfully submitted");
        
        }
    }
    function calculate(event){
      event.preventDefault();
      if(validate()){
        setIsVisible(true);
      }
        var posi=destination(employees.dest);
        var role=department(employees.dept);
        var salary=role*posi;
        var basicSalary=salary*parseInt(employees.attend);
        let da=0;
        if(basicSalary>=100000){
          da=basicSalary*0.10;
        }
        else if(basicSalary>=50000){
          da=basicSalary*0.08;
        }
        else if(basicSalary>25000){
          da=basicSalary*0.07;
        }
        else if(basicSalary<=25000){
          da=basicSalary*0.05;
        }
        const overtime=150;
        const specialAllowance=700;
        const bonus=1000;
        const commision=500;
        var over=(8*overtime)*((employees.attend)-25);
        var totalEarning=0;
        if(employees.attend>=25){
        
          totalEarning=basicSalary+da+bonus+specialAllowance+commision+over;
        }
        else if(employees.attend===25){
          
          totalEarning=basicSalary+da+specialAllowance+commision;
        }
        else if(employees.attend<25){
          
          totalEarning=basicSalary+da;
        }
        const pf=basicSalary*0.2;
        let professionalTax=0;
        if(basicSalary>=100000){
          professionalTax=basicSalary*0.13;
        }
        else if(basicSalary>=50000){
          professionalTax=basicSalary*0.10;
        }
        else if(basicSalary>25000){
          professionalTax=basicSalary*0.08;
        }
        else if(basicSalary<=25000){
          professionalTax=basicSalary*0.07;
        }
        var incomeTax;
        incomeTax =tax(basicSalary);
        const totalDeduction=pf+professionalTax+incomeTax;
        const netBill=totalEarning-totalDeduction;
        
        setEarning({ basicSalary, da, over, bonus, specialAllowance, commision,totalEarning  });
        setDeduction({ pf, professionalTax, incomeTax, totalDeduction, netBill });
      }
    const tax=(salary)=>{

  if(salary<=40000){
      return 0;
  }
  if(salary<=80000){
      return (salary-40000)*0.1;
  }
  if(salary<=150000){
      return (salary-80000)*0.3;
  }
  if(salary<=200000){
      return (salary-150000)*0.5;
  }
    
  }
  const department=(dept)=>{
      if(employees.dept==="Front End"){
          return 600;
      }
      if(employees.dept==="Back End"){
          return 800;
      }
      if(employees.dept==="BPO"){
          return 350;
      }
      if(employees.dept==="Sales"){
          return 500;
      }
      if(employees.dept==="Testing"){
          return 400;
      }
  }
    const destination=(dest)=>{
        if(employees.dest==="Manager"){
            return 7;
        }
        if(employees.dest==="Assistant Manager"){
            return 6;
        }
        if(employees.dest==="Team Leader"){
            return 4;
        }
        if(employees.dest==="Senior"){
            return 3;
        }
        if(employees.dest==="Junior"){
            return 1;
        }
    }
    return(
        <div><div class="linker">
          <center><h1><i>SALARY CALCULATOR</i></h1></center>
    <ul>
        <li><Link to='/' class="list">HOME</Link></li>
        <li>DETAILS</li>
        
    </ul>
    </div>
    {!isVisible?(
    <div class="formdiv">
        <form>
        <center><h1> EMPLOYEE PAY SLIP</h1></center>
        <table>
            <tr>
                <th>
                Salary Date
                </th>
                <td>
                  <input type="date" id="design" name="date" required value={employees.date="2024-05-01"} onChange={handleChange}></input>
                </td>
            </tr>
            <tr>
                <th>
                Employee name
                </th>
                <td>
                  <input type="text"  id="design" required name="title"  value={employees.title} onChange={handleChange}></input>  
                </td>
            </tr>
            <tr>
                <th>
                Employee ID
                </th>
                <td>
                <input type="text" name="id" id="design" required value={employees.id} onChange={handleChange}></input>    
                </td>
            </tr>
            <tr>
                <th>
                Designation
                </th>
                <td>
                <select  name="dest" id="design" required value={employees.dest} onChange={handleChange}>
                <option >choose designation</option>    
                 <option value="Manager">Manager</option> 
                 <option value="Assistant Manager">Assistant Manager</option> 
                 <option value="Team Leader">Team leader</option>   
                 <option value="Junior">Junior</option> 
                 <option value="Senior">Senior</option> 
                </select>   
                </td>
            </tr>
            <tr>
                <th>
                Department
                </th>
                <td>
                <select  name="dept" id="design" required value={employees.dept} onChange={handleChange}>
                    <option >choose department</option>
                   <option value="Front End">Frontend</option> 
                   <option value="Back End">Backend</option> 
                   <option value="Sales">sales</option> 
                   <option value="BPO">Bpo</option> 
                   <option value="Testing">Testing</option> 
                </select>  
                </td>
            </tr>
            <tr>
                <th>
                No of Present
                </th>
                <td>
                  <input type="text" id="design" name="attend"  required value={employees.attend} onChange={handleChange}/>  
                </td>
            </tr>
            <tr><td colspan="2">
               <center><button onClick={handleSubmit} id="butt">submit</button><button onClick={calculate} id="butt">Click to get Payslip</button></center>
               </td></tr>
        </table>
        </form>
    </div>):(
    <div class="slip">
     <Datas deduction={deduction} employees={employees} earning={earning}/>
     </div>)}
    <div class="footer">
      <h1>@Contacts</h1>
      <p>JAYA PRAKASH</p>
      <p>irulappanprakash2001@gmail.com</p>
      <p>8489755101</p>
      
      
    </div>
    </div>
)}