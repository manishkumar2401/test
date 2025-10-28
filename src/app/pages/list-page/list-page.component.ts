import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {
  constructor(private router:Router){
  }

gotToRegisterPage(){
  this.router.navigateByUrl("/register-page")
}
}
