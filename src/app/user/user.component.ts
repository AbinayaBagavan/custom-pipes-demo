import { Component } from '@angular/core';
const users =[{ id: 1, name: 'Rajesh' },
  { id: 2, name: 'Ritesh' },
  { id: 3, name: 'Snephal' }];
@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styleUrls:['./user.component.css'],
})
export class UserComponent  {
  userDetails:any=[{ id: 1, name: 'Rajesh' },
  { id: 2, name: 'Ritesh' },
  { id: 3, name: 'Snephal' }];
  filterList(data:string) {
  console.log("method called");
  if(data=="")
  {
    console.log("data empty")
    this.userDetails = users;
    return ;
  }
  else {
    data=data.toLowerCase();
var newOne = this.userDetails.filter(user => user.name.toLowerCase().includes(data));
      console.log(newOne);
  this.userDetails = newOne;
  }
  }
  
}