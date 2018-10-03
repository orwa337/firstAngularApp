import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  adress: Adress;
  hobbies: string[];
  hello: any;
  users: User[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) {
    console.log("constructor working ....")
  }

  ngOnInit() {
    console.log("ngOnInit works ....")
    this.name = "Jaen Doe";
    this.age = 30;
    this.email = 'test@test.com';
    this.adress = {
      street: "Hauptstr",
      city: "Berlin",
      state: "Br"
    }
    this.hobbies = ['write code', 'find bugs', 'update features'];
    this.hello = 1;

    this.dataService.getUsers().subscribe((users) =>
    //console.log(users)
    this.users = users
    )
  }

  onClick(){
    this.name='Orwa Here';
    this.hobbies.push('New hobby')
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby)
    return false
  }

  deleteHobby(hobbyIndex){
    this.hobbies.splice(hobbyIndex,1)
  }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Adress{
  street: string,
  city: string,
  state: string
}

interface User {
 id: number,
 name: string,
 email: string

}