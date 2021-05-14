import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  disabled:boolean = true;

  serverCreateStatus: String = 'No Server was created';

  serverCreated:boolean = false;

  serverName:string = '';

  adminName:string = 'Admin1'; //prepopulate the input field with this data

  userName:string = '';

  showDetails:boolean = false;

  log:number[] = []; //Without defining the array type, it by default will be never


  constructor() { 
   setTimeout(()=>{
     this.disabled = false
   },2000);


  }

  ngOnInit(): void {
  }


  onCreateServer(){
    this.serverCreateStatus = 'Server was created! Server Name is ' + this.serverName + ' and Admin is '+this. adminName;
    this.serverCreated = true;
  }

  onUpdateServer(event: Event){ //research this
    console.log((<HTMLInputElement>event.target).value); //will print continuously as we enter input
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser(){
    this.userName = '';
  }

  /* isUserEmpty(event:Event){
    // return this.userName.length === 0 ? 'true': 'false';
    return ((<HTMLInputElement>event.target).value).length === 0 ? 'true' : 'false'; //capture event data and implement logic

  } */

  getColor(){
    return this.serverCreated === true ? 'lightgreen':'red';
  }

  toggleDetails(){
    this.showDetails = !this.showDetails;
    this.log.push(this.log.length + 1);
  }
}
