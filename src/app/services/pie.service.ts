import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const APIURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PieService {

  constructor(private http: HttpClient) { }

  getPies() {
    return this.http.get(`${APIURL}/pie`);
  }

  getPieByName(name) {
    return this.http.get(`${APIURL}/pie/${name}`);
  }
}
