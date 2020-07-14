import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router: Router,private service:DataShareService) { 
   // this.service.msg.subscribe(value)
  }
  message:any;
  umessage:any[];
  employeeList:any[];
  uindex:any;
  isEdit:Boolean=false;
  employeeData:any[];
  
  ngOnInit(): void {
    this.service.share.subscribe(message=>this.message=message);
    this.service.share1.subscribe(umessage=>this.umessage=umessage);
    this.employeeList=this.umessage;
    this.service.share2.subscribe(uindex=>this.uindex=uindex)
    
    this.employeeData=this.service.getAllUsers();
   /* this.name=this.service.getName();
    this.joiningDate=this.service.getDOJ();
    this.contactNumber=this.service.getcontactNumber;
    this.email=this.service.getEmail();
    this.birthDate=this.service.getDOB();
    this.maritalStatus=this.service.getMaritalStatus();
    this.qualf=this.service.getQualf();
    this.employeeGender=this.service.getGender();
    this.joiningReference=this.service.getReference();
    this.employeeDepartment=this.service.getDepartment();
    this.designation=this.service.getDesignation();
    this.reportingPerson=this.service.getReporting();
    this.temporaryAddress=this.service.getTempAddress();
    this.permanentAddress=this.service.getPerAddress();
    this.emergencyContact=this.service.getEmergency();
    this.aadharNumber=this.service.getAadhar();
    this.panNumber=this.service.getPan();
    this.licenceNumber=this.service.getLicence();
    this.employeePassport=this.service.getPassport();
    this.bloodGroup=this.service.getBG();
    this.employeeRemark=this.service.getRemark();
    this.service.setQualification(this.qualification);
    this.qualification=this.service.getQualification();
    this.service.setNamePattern(this.employeeNamePattern);
    this.employeeNamePattern=this.service.getNamePattern();
    this.service.setEmailPattern(this.emailPattern);
    this.emailPattern=this.service.getEmailPattern();
    this.service.setContactPattern(this.contactPattern);
    this.contactPattern=this.service.getContactPattern();
    this.service.setAadharPattern(this.aadharPattern);
    this.aadharPattern=this.service.getAadharPattern();
    this.service.setPanPattern(this.panPattern);
    this.panPattern=this.service.getPanPattern();
    this.service.setLicencePattern(this.licencePattern);
    this.licencePattern=this.service.getLicencePattern();*/
    
    //console.log("Hello"+this.employeeList[this.uindex]);
    /*this.name=this.employeeList[this.uindex].ename;
    this.joiningDate=this.employeeList[this.uindex].doj;
    this.contactNumber=this.employeeList[this.uindex].cnumber;
    this.email=this.employeeList[this.uindex].mail;
    this.birthDate=this.employeeList[this.uindex].dob;
    this.maritalStatus=this.employeeList[this.uindex].status;
    this.qualf=this.employeeList[this.uindex].option;
    this.employeeGender=this.employeeList[this.uindex].Gender;
    this.joiningReference=this.employeeList[this.uindex].reference;
    this.employeeDepartment=this.employeeList[this.uindex].Dept;
    this.designation=this.employeeList[this.uindex].Designation;
    this.reportingPerson=this.employeeList[this.uindex].reporting;
    this.temporaryAddress=this.employeeList[this.uindex].TempAddress;
    this.permanentAddress=this.employeeList[this.uindex].PerAddress;
    this.emergencyContact=this.employeeList[this.uindex].emergency;
    this.aadharNumber=this.employeeList[this.uindex].aadhar;
    this.panNumber=this.employeeList[this.uindex].pan;
    this.licenceNumber=this.employeeList[this.uindex].licence;
    this.employeePassport=this.employeeList[this.uindex].passport;
    this.bloodGroup=this.employeeList[this.uindex].blood;
    this.employeeRemark=this.employeeList[this.uindex].remark;
    this.option=this.employeeList[this.uindex].name;*/

   // this.isEdit=true;
    
   }
   
/*name;
contactNumber;
email;
joiningReference;
designation;
reportingPerson;
emergencyContact;
aadharNumber;
panNumber;
licenceNumber;
option;
joiningDate;
birthDate;
qualf;
bloodGroup;
maritalStatus;
employeeGender;
employeeDepartment;
employeePassport;
temporaryAddress="";
permanentAddress="";
employeeRemark="";

qualification=[
  {id:1,name:"BE"},
  {id:1,name:"BTech"},
  {id:1,name:"ME"},
  {id:1,name:"MCA"},
  {id:1,name:"MTech"},
  {id:1,name:"BCS"},
  {id:1,name:"MCS"},
];

employeeNamePattern="^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$";
emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";
contactPattern="^[7-9][0-9]{9}$";
aadharPattern="^[0-9]{12}$";
panPattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$";
licencePattern="^[A-Z]{2}[0-9]{13}$"; */

onSubmit(value:any){
 // console.log(value);
 // alert("The form was submitted");
 this.router.navigate(['/list']);
// this.service.clicked.emit(value);  
this.service.changeMsg(value);
}
}






//^[a-zA-Z ]{1,}(^[_.])$  ^[a-zA-Z0-9]+([_\s\-]?[a-zA-Z0-9])*$  ^((\\+91-?)|0)?[0-9]{10}$ 