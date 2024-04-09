import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hazop',
  templateUrl: './hazop.component.html',
  styleUrls: ['./hazop.component.scss']
})
export class HazopComponent implements OnInit{
  
  constructor(
    private fb: FormBuilder,
  ){}

  generalForm:FormGroup | any;
  sessionForm:any;
  error:boolean = false;

  options = [
    { value: 1, label: 'Options 1'},
    { value: 2, label: 'Options 2'},
    { value: 3, label: 'Options 3'},
    { value: 4, label: 'Options 4'},
  ];

  sessions:any[] = [
    {name: '', weight: 1.0079, symbol: 'H'},
  ];

  displayedColumns: string[] = ['no', 'member_team', 'session_date_time', 'action'];
  dataSource = this.sessions;

  ngOnInit(): void {
    this.initFormGeneral();
  }

  initFormGeneral():void {
    this.generalForm = this.fb.group({
      project_type: [null,Validators.required],
      sub_project_type: [null,Validators.required],
      reference_number: [''],
      area_process_unit: [null],
      unit_no: [null],
      functional_location: [null],
      functional_location_additional: [''],
      moc_title: [''],
      target_start_date: [''],
      completion_date: [''],
      study_objective: [''],
    })
  }

  next():void {
    this.error = true;
    console.log(this.generalForm.value)
    // if (this.generalForm.valid) {
    //   console.log('Form submitted successfully');
    // } else {
    //   console.log('Form is invalid');
    // }
  }

  addSession(): void {
    const newItem = {
      name: null,  // Set appropriate values for the new session
      weight: null,
      symbol: null
    };
    this.sessions.push(newItem);
    this.dataSource = [...this.sessions];  // Update the dataSource with the new sessions array
  }

  removeSession(indexToRemove:number):void {
    if (this.sessions.length != 1) {
      const newSessions = this.sessions.filter((_, index) => index !== indexToRemove);
      this.sessions = newSessions
      this.dataSource =[...this.sessions]
    }
  }
  

}
