import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from './model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient) {
  }

  url = 'https://iot2app.azurewebsites.net/rest/';

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('https://iot2app.azurewebsites.net/rest/rooms');
  }
  getRoomWithId(roomId): Observable<Room[]>{
    return this.http.get<Room[]>(this.url + 'room/' + roomId);
  }

}
