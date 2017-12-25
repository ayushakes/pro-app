import { Component } from "@angular/core";

@Component({
    selector:'.app-server',
    templateUrl:"./server.component.html",
    styleUrls:['./server.component.css'],
    
})
export class ServerComponent{
name='';
num=10;
age=25;
serverStatus='OK';

func()
{

return this.age;
}

statfunc()
{
    this.serverStatus='Server was created';
}
}