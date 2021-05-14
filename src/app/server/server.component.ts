import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})

export class ServerComponent{

    serverId:number = 10;

    serverName:string = "Cyber Server";
    //we can also use this as string interpolation
    getServerName(){
        return this.serverName;
    }

}