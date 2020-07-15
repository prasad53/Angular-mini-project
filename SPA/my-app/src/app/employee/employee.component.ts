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
   
    // this.isEdit=true;
    
   }
   
onSubmit(value:any){
 // console.log(value);
 // alert("The form was submitted");
 this.router.navigate(['/list']);
 this.service.changeMsg(value);
}
}






//^[a-zA-Z ]{1,}(^[_.])$  ^[a-zA-Z0-9]+([_\s\-]?[a-zA-Z0-9])*$  ^((\\+91-?)|0)?[0-9]{10}$ 