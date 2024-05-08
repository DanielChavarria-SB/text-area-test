import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiaConnectionService {

  constructor(private http: HttpClient) { }

  bearer: string = 'eyJraWQiOiJROFF6dU5udkNyNXJwazBuRFMzMmVTUFc5TGhtTndaV3pRckh2MUl6cExjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ZzMwc3UxdHEyMTVpZWJsMG82NW4waXV1IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJjaWVuY3VhZHJhcy1kZXYtYXBpLXNlcnZlclwvd3JpdGUgY2llbmN1YWRyYXMtZGV2LWFwaS1zZXJ2ZXJcL3JlYWQiLCJhdXRoX3RpbWUiOjE3MDczMzg5MzMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0VzWGt0MTRIYiIsImV4cCI6MTcwNzM0MjUzMywiaWF0IjoxNzA3MzM4OTMzLCJ2ZXJzaW9uIjoyLCJqdGkiOiIwNTkxYzM2ZS1iNWIyLTRjM2MtYTU5NS1iOWJmMWY4NGNiNDYiLCJjbGllbnRfaWQiOiI0ZzMwc3UxdHEyMTVpZWJsMG82NW4waXV1In0.IAST03q8jleiMUb-Fby2e1xB-GRZ1yhFZBrbrrJpEJQn2bt6yqo2mSDA0B9gDuMDKexAcCBRoiRztvKDkJmSe9CoD4AMigAwtur05EuNEIqwsYmycubt5lb50glsrjSuTIw7uuY7WUxBCh0kpenNbdjYwkcRen_ms3NMGnnnlXHCq_yfqEoJgmrvwHdWducijaIZ639AIwsus5EWcX8Q9qvWznZGTO-hC4pUFEHmbZoUHYfSe5BseY1VOXfAMrJvebglQ4MncyYwasihvWksZTzpvfPXZcZTeBVZBYHxiVsrCBXPZ52G-sAkCUnqfEpyyZJ76x4PHi8_jPaOPOSfRA';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.bearer}`,
    'channel': 'infobip',
    'invoke-date': '2023-09-21T17:00:00',
    'enviroment_channel': 'DEV'

  });


  options = { headers: this.headers };

  requestUrl: string = 'https://dev-api-backend.ciencuadras.com/dev/modelos-ia/api/v1/chatInteractivo';


  requestDataFromService (msg: string): Observable<any> {
    console.log(msg);
    let body = {
      "message": msg,
      "idConversation": "",
      "iaType": "azure",
      "portal": "ciencuadras",
      "resultsSize" : 6
    }
    return this.http.post<any>(this.requestUrl, body, this.options);
  }
}

