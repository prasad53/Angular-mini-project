import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { DataShareService } from '../data-share.service';
import {NgForm} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empForm:NgForm
  constructor(private router: Router,private service:DataShareService,) { 
   // this.service.msg.subscribe(value)
  }
  message:any;
  umessage:any[];
  employeeList:any[];
  uindex:any;
  flagValue;
  employeeData:any[];
  updatedData:any[];
  newEmployeeData:any;
  isUpdate:boolean=false;
  
  ngOnInit(): void {
    this.employeeData=[{}];
    this.clearFields();
    this.service.share.subscribe(message=>this.message=message);
    this.service.share1.subscribe(umessage=>this.umessage=umessage);
    this.employeeList=this.umessage;
    this.service.share2.subscribe(uindex=>this.uindex=uindex);
    this.service.flag.subscribe(uflag=>this.flagValue=uflag);

   // this.clearFields();
    
   this.updatedData=this.employeeData;
    
    if(this.flagValue){
   this.edit();
    }
   /* else{
      //this.router.navigate(['/create']);
      this.clearFields();
      this.empForm.resetForm();
    }*/
   
   }

   clearFields(){
    this.employeeData=this.service.getAllUsers();
   }
   
   edit()
   {
    //this.isEdit=true;
    this.employeeData=[
      {
      name:this.employeeList[this.employeeList.length-1].ename,
      joiningDate:this.employeeList[this.employeeList.length-1].doj,
      contactNumber:this.employeeList[this.employeeList.length-1].cnumber,
      email:this.employeeList[this.employeeList.length-1].mail,
      birthDate:this.employeeList[this.employeeList.length-1].dob,
      maritalStatus:this.employeeList[this.employeeList.length-1].status,
      qualf:this.employeeList[this.employeeList.length-1].option,
      employeeGender:this.employeeList[this.employeeList.length-1].Gender,
      joiningReference:this.employeeList[this.employeeList.length-1].reference,
      employeeDepartment:this.employeeList[this.employeeList.length-1].Dept,
      designation:this.employeeList[this.employeeList.length-1].Designation,
      reportingPerson:this.employeeList[this.employeeList.length-1].reporting,
      temporaryAddress:this.employeeList[this.employeeList.length-1].TempAddress,
      permanentAddress:this.employeeList[this.employeeList.length-1].PerAddress,
      emergencyContact:this.employeeList[this.employeeList.length-1].emergency,
      aadharNumber:this.employeeList[this.employeeList.length-1].aadhar,
      panNumber:this.employeeList[this.employeeList.length-1].pan,
      licenceNumber:this.employeeList[this.employeeList.length-1].licence,
      employeePassport:this.employeeList[this.employeeList.length-1].passport,
      bloodGroup:this.employeeList[this.employeeList.length-1].blood,
      employeeRemark:this.employeeList[this.employeeList.length-1].remark
    },
    ];
    
    this.isUpdate=true;
    console.log(this.employeeData);
   }

   update()
   {
    
    this.employeeList[this.employeeList.length-1].ename=this.employeeData[0].name,
    this.employeeList[this.employeeList.length-1].doj=this.employeeData[0].joiningDate,
    this.employeeList[this.employeeList.length-1].cnumber=this.employeeData[0].contactNumber,
    this.employeeList[this.employeeList.length-1].mail=this.employeeData[0].email

    this.newEmployeeData=this.employeeList;
    this.service.takeUpdatedData(this.newEmployeeData[this.uindex]);
    //this.router.navigate(['/list']);
    
    this.isUpdate=false;
    this.employeeData=[{}];
    //this.clearFields();
   }
   
   

onSubmit(value:any){
 // console.log(value);
 // alert("The form was submitted");
 this.router.navigate(['/list']);
 this.service.changeMsg(value);
 
}
}






//^[a-zA-Z ]{1,}(^[_.])$  ^[a-zA-Z0-9]+([_\s\-]?[a-zA-Z0-9])*$  ^((\\+91-?)|0)?[0-9]{10}$ 