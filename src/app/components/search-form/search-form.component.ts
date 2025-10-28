import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  @Output() getFlightList = new EventEmitter()
  today = new Date()
  constructor(private flightList: FlightService){}
  searchForm: FormGroup = new FormGroup({
    origin: new FormControl('DEL', [Validators.required]),
    destination: new FormControl('BOM', [Validators.required]),
    travelDate: new FormControl((this.today).toJSON().substring(0,10), [Validators.required]),
  });
  
  onSearch=()=>{
    this.flightList.getFlightList(this.searchForm.value).subscribe((res:any)=>{
      console.log(res)
    })
   }
}
