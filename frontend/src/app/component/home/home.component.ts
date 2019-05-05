import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rooms: RoomService[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(
      (data: any) => {
        this.rooms = data;
        console.log(data);
      }
    );
  }

}
