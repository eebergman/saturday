import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventsRoutingModule
  ],
  declarations: [
    EventListComponent,
    CreateEventComponent
  ]
})
export class EventsModule { }
