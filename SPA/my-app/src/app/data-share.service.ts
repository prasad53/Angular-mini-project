import { Injectable ,EventEmitter,Output} from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() {
    this.isDone=true;
   }

   name1="";
contactNumber="";
email="";
joiningReference="";
designation="";
reportingPerson="";
emergencyContact="";
aadharNumber="";
panNumber="";
licenceNumber="";
joiningDate="";
birthDate="";
qualf="";
bloodGroup="";
maritalstatus;
employeeGender="";
employeeDepartment="";
employeePassport="";
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
licencePattern="^[A-Z]{2}[0-9]{13}$";

  employee=[];
  isDone=false;
   msg=new BehaviorSubject<any[]>([]);
  share =this.msg.asObservable();

  updateMessage=new BehaviorSubject<any[]>([]);
  share1=this.updateMessage.asObservable();

  updateIndex=new BehaviorSubject<any>('');
  share2=this.updateIndex.asObservable();

  
 //@Output() clicked:EventEmitter<any> =new EventEmitter<any>();
  
  changeMsg(message:any){
   // this.employee.push(this.msg.getValue().concat([message]));
    //console.log(this.employee);
    this.msg.next(this.msg.getValue().concat([message]));
    
  }
  //getDetails(value:any){
  updateMsg(value:any){
    this.updateMessage.next(this.updateMessage.getValue().concat([value]));
  }

  sendIndex(index:any){
    this.updateIndex.next(index);
  }

  
  
    getName()
    {
      return this.name1;
    }

    getDOJ()
    {
      return this.joiningDate;
    }
  
    getcontactNumber()
    {
      return this.contactNumber;
    }

    getEmail()
    {
      return this.email;
    }

    getDOB()
    {
      return this.birthDate;
    }

    getMaritalStatus()
    {
      return this.maritalstatus;
    }

    getQualf()
    {
      return this.qualf;
    }

    getGender()
    {
      return this.employeeGender;
    }
    
    getReference()
    {
      return this.joiningReference;
    }

    getDepartment()
    {
      return this.employeeDepartment;
    }

    getDesignation()
    {
      return this.designation;
    }

    getReporting()
    {
      return this.reportingPerson;
    }

    getTempAddress()
    {
      return this.temporaryAddress;
    }

    getPerAddress()
    {
      return this.permanentAddress;
    }

    getEmergency()
    {
      return this.emergencyContact;
    }

    getAadhar()
    {
      return this.aadharNumber;
    }

    getPan()
    {
      return this.panNumber;
    }

    getLicence()
    {
      return this.licenceNumber;
    }

    getPassport()
    {
      return this.employeePassport;
    }

    getBG()
    {
      return this.bloodGroup;
    }

    getRemark()
    {
      return this.employeeRemark;
    }

    getQualification()
    {
      return this.qualification;
    }

    setQualification(value)
    {
      this.qualification=value;
    }

    getNamePattern()
    {
      return this.employeeNamePattern;
    }

    setNamePattern(val)
    {
       this.employeeNamePattern=val;
    }

    
    getEmailPattern()
    {
      return this.emailPattern;
    }

    setEmailPattern(val)
    {
      this.emailPattern=val;
    }

    getContactPattern()
    {
      return this.contactPattern;
    }

    setContactPattern(val)
    {
      this.contactPattern=val;
    }

    getAadharPattern()
    {
      return this.aadharPattern;
    }

    setAadharPattern(val)
    {
     this.aadharPattern=val;
    }

    getPanPattern()
    {
      return this.panPattern;
    }

    setPanPattern(val)
    {
     this.panPattern=val;
    }

    getLicencePattern()
    {
      return this.licencePattern;
    }

    setLicencePattern(val)
    {
      this.licencePattern=val;
    }

  
    
   // return value;
  //}
}
