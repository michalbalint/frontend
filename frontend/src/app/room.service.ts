import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from './model/room';
import {Lecturer} from './model/lecturer';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient) {
  }

  gRoom = 'https://iot2app.azurewebsites.net/rest/';
  gLecturer = 'https://iot2app.azurewebsites.net/rest/';

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('https://iot2app.azurewebsites.net/rest/rooms');
  }

  getRoomWithId(roomId): Observable<Room[]> {
    return this.http.get<Room[]>(this.gRoom + 'room/' + roomId);
  }

  getLecturer(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>('https://iot2app.azurewebsites.net/rest/lecturers');
  }

  getLecturerWithId(lecturerId): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(this.gLecturer + 'lecturer/' + lecturerId);
  }
}
