import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { error } from 'console';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchForm:FormGroup


  constructor(private userService:UsersService){
    this.searchForm =new FormGroup({
      name: new FormControl('',[])
    },[])
    
  }


  async getData(): Promise<void> {

    try{
      let name =this.searchForm.value.name;
      let response= await this.userService.GetUsersByName(name)
      console.log(response);
    }catch{
      console.log("err");
    }
      }
}
