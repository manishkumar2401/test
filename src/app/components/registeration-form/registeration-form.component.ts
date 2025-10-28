import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-registeration-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './registeration-form.component.html',
  styleUrl: './registeration-form.component.css'
})

export class RegisterationFormComponent {
formTitle = "Registration Form"
courseList = [{course:"Angular", Price :200, status :false}, {course:"ReatJS", Price :150, status :true}, {course:"Next", Price :250, status :true}, {course:"Node", Price :500, status :true}]
constructor(){

}

submitForm(message: String ){
  alert(message)
}

}
