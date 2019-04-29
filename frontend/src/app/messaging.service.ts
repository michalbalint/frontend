import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireDB: AngularFireDatabase,
              private angularFireAuth: AngularFireAuth,
              private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      m => {
        m.onMessage = m.onMessage.bind(m);
        m.onTokenRefresh = m.onTokenRefresh.bind(m);
      }
    );
  }

  updateToken(userID, token) {
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userID] = token;
        this.angularFireDB.object('fcmTokens/').update(data);
      }
    );
  }

  requestPermission(userID) {
    this.angularFireMessaging.requestToken.subscribe(
      token => {
        console.log(token);
        this.updateToken(userID, token);
      },
      err => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      payload => {
        console.log('New message received.', payload);
        this.currentMessage.next(payload);
      }
    );
  }
}
