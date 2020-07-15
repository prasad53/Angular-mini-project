import { Component, OnInit ,Input} from '@angular/core';
import { findReadVarNames, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute,Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public fid;
  constructor(private route:ActivatedRoute,private service:DataShareService,private router:Router) {
   // this.service.msg.subscribe();
   
   }

  ngOnInit() {
   
    this.service.share.subscribe(message=>this.message=message);
   // this.service.share3.subscribe(changeIndex=>this.changeIndex=changeIndex);
   //console.log(this.message);
   this.displayMessage=this.message;
   console.log(this.displayMessage);
   
  
  }
 
  message:any;
  displayMessage:any;
  searchByName:any;
  changeIndex:any;


  delete(item)
  {
    this.displayMessage.splice(item,1);
  }

  edit(item){
    this.router.navigate(['/create']);

    this.service.updateMsg(this.displayMessage[item]);
    this.service.sendIndex(item);

  }

}








   /* this.name=this.displayMessage[item].ename;
    this.contactNumber=this.displayMessage[item].cnumber;
    this.email=this.displayMessage[item].mail;
    this.joiningReference=this.displayMessage[item].reference;
    this.designation=this.displayMessage[item].Designation;
    this.reportingPerson=this.displayMessage[item].reporting;
    this.emergencyContact=this.displayMessage[item].emergency;
    this.aadharNumber=this.displayMessage[item].aadhar;
    this.panNumber=this.displayMessage[item].pan;
    this.licenceNumber=this.displayMessage[item].licence;*/
 