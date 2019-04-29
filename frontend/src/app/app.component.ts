import {Component, OnInit} from '@angular/core';
import {MessagingService} from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message;

  constructor(private messagingService: MessagingService) {
  }

  ngOnInit() {
    const userID = 'Michal';
    this.messagingService.requestPermission(userID);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
