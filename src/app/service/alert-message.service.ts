import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  constructor() { }
  Success(message:string){
    return alertify.success(message);
  }

  Failure(message:string){
    return alertify.error(message);
  }
}
