import { Component } from '@angular/core';
import { ClientInfo } from './clientInfo';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  // Export the structure of Client field
  userInfo: ClientInfo = {
    name: '',
    subject: '',
    email: '',
    message: ''
  }
}
