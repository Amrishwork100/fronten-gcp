import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = '/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<Object> {
    return this.http.get(`http://localhost:8081/api/v1/employees/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post('http://localhost:8081/api/v1/employees', employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8081/api/v1/employees}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/v1/employees/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`http://localhost:8081/api/v1/employees`);
  }
}