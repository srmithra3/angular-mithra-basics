import {Component, OnInit} from '@angular/core';

@Component({
selector: 'app-server',
templateUrl: './server.component.html',
styleUrls:['./server.component.css']
})

export class ServerComponent implements OnInit{
serverID=10;
serverStatus='running';
servercreate="server not created";
servername='';
nextServer(){
  return this.serverID+1;
}
allownewserver=true;
constructor(){
  setTimeout(
    () => {
      this.allownewserver=false;
      this.servercreate=this.servercreate+" and Server is disabled";
    }
  ,20000)
}
ngOnInit() {

}
onservercreate(){
  this.servercreate="Server is created!!!";
}
updateServerName(event:Event){
this.servername = (<HTMLInputElement>event.target).value;
}
}