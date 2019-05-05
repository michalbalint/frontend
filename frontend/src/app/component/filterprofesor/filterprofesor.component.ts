import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../room.service';

@Component({
  selector: 'app-filterprofesor',
  templateUrl: './filterprofesor.component.html',
  styleUrls: ['./filterprofesor.component.scss']
})
export class FilterprofesorComponent implements OnInit {

  lecturers: RoomService[];
  lecturer: RoomService[];
  isSelected = false;

  constructor(private lecturerService: RoomService) {
  }

  ngOnInit() {
    this.lecturerService.getLecturer().subscribe(
      (data: any) => {
        this.lecturers = data;
        console.log(data);
      }
    );
  }

  onClickSelect(id) {
    this.lecturerService.getLecturerWithId(id).subscribe(
      (data: any) => {
        this.lecturer = data;
        console.log(data);
        this.isSelected = true;
      }
    );
  }
}
