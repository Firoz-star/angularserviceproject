import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
    return[
      {"id": 1, "name": "Firoz Shaikh", "age": 26},
      {"id": 2, "name": "Aadil Shaikh", "age": 10},
      {"id": 3, "name": "Afroz Shaikh", "age": 28},
      {"id": 4, "name": "Akib Shaikh", "age": 30}
    ];
  }
}
