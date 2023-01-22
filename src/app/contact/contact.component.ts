import { Component } from '@angular/core';
import { ClientInfo } from './clientInfo';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Export the structure of Client field
  userInfo: ClientInfo = {
    name: '',
    subject: '',
    email: '',
    message: ''
  }
}
