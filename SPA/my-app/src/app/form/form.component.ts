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
   //let id=this.route.snapshot.params['value'];
   //this.service.getDetails(id).subscribe(user=>{
     //this.fid=id;
    // console.log(user);
   //})
    //this.fid=id;
    //this.route.paramMap.subscribe(data=>{
     // console.log(data.get('id'));
    //})
    this.service.share.subscribe(message=>this.message=message);
   // this.service.share3.subscribe(changeIndex=>this.changeIndex=changeIndex);
   //console.log(this.message);
   this.displayMessage=this.message;
   console.log(this.displayMessage);
   
   this.name=this.service.getName();
    this.contactNumber=this.service.getcontactNumber;
    this.email=this.service.getEmail();
    this.joiningReference=this.service.getReference();
    this.designation=this.service.getDesignation();
    this.reportingPerson=this.service.getReporting();
    this.emergencyContact=this.service.getEmergency();
    this.aadharNumber=this.service.getAadhar();
    this.panNumber=this.service.getPan();
    this.licenceNumber=this.service.getLicence();

   //this.displayMessage[this.changeIndex].ename=this.name;
  }
/*formData:any;
  empMethod(data){
    this.formData=data;
    console.log(this.formData);
  }*/

  message:any;
  displayMessage:any;
  searchByName:any;
  changeIndex:any;

 /* firstname:String="";
  lastname:String="";
  userNamePattern="^[a-zA-Z]{1,}$";
  isEditable:Boolean=false;
  index='';
  isValidDone:Boolean=false;
  users=[];*/

  name;
contactNumber;
email;
joiningReference;
designation;
reportingPerson;
emergencyContact;
aadharNumber;
panNumber;
licenceNumber;


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
 






















  /*add()
    {
        this.users.push
        ({
        name1:this.firstname,
        name2:this.lastname
        });

        this.firstname="";
        this.lastname="";

       // this.isValidDone=true;
    }
  
  
  delete(item)
    {
      this.users.splice(item,1);
    }

  edit(i)
   {
       
    this.firstname=this.users[i].name1;
    this.lastname=this.users[i].name2;
    
    this.isEditable=true;

    this.index=i;
    
   }

    update()
    {
      this.users[this.index].name1=this.firstname;
      this.users[this.index].name2=this.lastname;
    
      this.firstname="";
      this.lastname="";

      this.isEditable=false;
  }
}*/










































  
 /* data="This is test of interpolation";
  title:String="Hello";

  isUserLogged:boolean=true;*/

  

 /* getName():string{
    return "This is a method";
  }

  change(){
    this.title="Data binding";
  }

  //users:string[]=["A","B","C"];

  users:any[]=[
    {id:1,name:'A',city:'A'},
    {id:2,name:'B',city:'B'},
    {id:3,name:'C',city:'C'}
  ];

  selectedCountry:string;
  countries:any[]=[
    {code:'ind',country:'India'},
    {code:'aus',country:'Australia'},
    {code:'us',country:'America'},
  ]


  choice(code){
    this.selectedCountry=code;
  }

  @Input()
  uname:string;*/
