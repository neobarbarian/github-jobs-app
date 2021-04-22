import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubJobsService {
  private corsProxy: string = 'https://cors-anywhere.herokuapp.com/';
  private baseJobsUrl: string = 'https://jobs.github.com/positions.json';

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<any> {
    return this.http.get<any>(`${this.baseJobsUrl}`);
  }
}
