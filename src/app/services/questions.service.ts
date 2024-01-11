import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {config} from "../config/config";
import {SimpleQuestion} from "../models/SimpleQuestion";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) {

  }

  getAll(){
    return this.http.get<SimpleQuestion[]>(`${config.serverUrl}/question`)
  }
}
