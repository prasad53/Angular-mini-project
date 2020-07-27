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

   getAllUsers(){

   return[
     {
   name1:"",
contactNumber:"",
email:"",
joiningReference:"",
designation:"",
reportingPerson:"",
emergencyContact:"",
aadharNumber:"",
panNumber:"",
licenceNumber:"",
joiningDate:"",
birthDate:"",
qualf:"",
bloodGroup:"",
maritalstatus:"",
employeeGender:"",
employeeDepartment:"",
employeePassport:"",
temporaryAddress:"",
permanentAddress:"",
employeeRemark:"",

qualification:[
  {id:1,name:"BE"},
  {id:1,name:"BTech"},
  {id:1,name:"ME"},
  {id:1,name:"MCA"},
  {id:1,name:"MTech"},
  {id:1,name:"BCS"},
  {id:1,name:"MCS"},
],

employeeNamePattern:"^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$",
emailPattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$",
contactPattern:"^[7-9][0-9]{9}$",
aadharPattern:"^[0-9]{12}$",
panPattern:"^[A-Z]{5}[0-9]{4}[A-Z]{1}$",
licencePattern:"^[A-Z]{2}[0-9]{13}$",
     }
   ];
  }
  
  employee=[];
  isDone=false;
   msg=new BehaviorSubject<any[]>([]);
  share =this.msg.asObservable();

  updateMessage=new BehaviorSubject<any[]>([]);
  share1=this.updateMessage.asObservable();

  updateIndex=new BehaviorSubject<any>('');
  share2=this.updateIndex.asObservable();

  setflag=new BehaviorSubject<any>('');
  flag=this.setflag.asObservable();

  setNewData=new BehaviorSubject<any>('');
  newData=this.setNewData.asObservable();

  flagDone=new BehaviorSubject<any>('');
  falseFlag=this.flagDone.asObservable();

  createNew=new BehaviorSubject<any>('');
  newRecord=this.createNew.asObservable();
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

  newflag(f:any){
    this.setflag.next(f);
  }  
  
  takeUpdatedData(upArray){
    this.setNewData.next(this.updateMessage.getValue().concat([upArray]));
  }
    
  editDone(flagFalse){
    this.flagDone.next(flagFalse);
  }

  newCreate(create){
    this.createNew.next(create);
  }
   // return value;
  //}
}
