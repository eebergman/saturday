import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Event } from '../../models/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  private events: FirebaseListObservable<Event[]>;
  public eventForm: FormGroup;

  constructor(
    private angularFire: AngularFire,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.events = this.angularFire.database.list('events');
    this.eventForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required)
    });
  }

}
