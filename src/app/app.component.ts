import { Component, OnInit } from '@angular/core';
import { GithubJobsService } from './services/github-jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github-jobs-app';

  constructor(public jobsService: GithubJobsService) {}

  ngOnInit(): void {
    this.jobsService.getAllJobs().subscribe(allJobs => {
      if (allJobs) {
        console.log('allJobs:', allJobs);
      }
    })
  }
}
