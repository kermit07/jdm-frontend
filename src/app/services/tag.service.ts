import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TagService {

  constructor(public http:Http) { }

  getTagGroups() {
    return this.http.get("http://localhost:8080/tags/").map(res => res.json());
  }

}
