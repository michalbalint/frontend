import {Component, OnInit} from '@angular/core';
import {MessagingService} from './messaging.service';
import {RoomService} from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message;

  constructor(private messagingService: MessagingService,
              private roomService: RoomService) {
  }

  ngOnInit() {
    const userID = 'Michal';
    this.messagingService.requestPermission(userID);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;

    this.message.subscribe(
      m => {
        if (m !== null) {
          new Notification(m.notification.title, {body: m.notification.body});
        }
      }
    );
  }
}
