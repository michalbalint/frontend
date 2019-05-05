import {Component, OnInit} from '@angular/core';
import {RoomService} from '../../room.service';

@Component({
  selector: 'app-filtercisloucebne',
  templateUrl: './filtercisloucebne.component.html',
  styleUrls: ['./filtercisloucebne.component.scss']
})
export class FiltercisloucebneComponent implements OnInit {

  rooms: RoomService[];
  room: RoomService[];
  isSelected = false;

  constructor(private roomService: RoomService) {
  }

  ngOnInit() {
    this.roomService.getRooms().subscribe(
      (data: any) => {
        this.rooms = data;
        console.log(data);
      }
    );
  }

  onClickSelect(id) {
    this.roomService.getRoomWithId(id).subscribe(
      (data: any) => {
        this.room = data;
        console.log(data);
        this.isSelected = true;
      }
    );
  }

}
