
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../config';
import { ItemGroupDetail } from '../models/dpr.model';
import { Observable } from "rxjs";

@Injectable()
export class DPRService {

  public itemGroupDetails;

  constructor(private http: HttpClient) { this.itemGroupDetails = []; }

  GetAllItemGroupDetails() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.DPR_APIS.GETALL_ITEMGROUP_DETAILS, httpOptions);
  }

  setDPRItemGroupDetails() {

    return this.GetAllItemGroupDetails().subscribe((data) => {
      this.itemGroupDetails = data;
    })

  }
  getDPRItemGroupDetails() {
    return this.itemGroupDetails;
  }

}

