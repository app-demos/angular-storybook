import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details-icon',
  templateUrl: './user-details-icon.component.html',
  styleUrls: ['./user-details-icon.component.scss']
})
export class UserDetailsIconComponent {
  @Input() iconUrl: string = '';
  @Input() iconType: string = '';
  @Output() iconClick: EventEmitter<any> = new EventEmitter()
}
