import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-daily-progress-report',
  templateUrl: './daily-progress-report.component.html',
  styleUrls: ['./daily-progress-report.component.css']
})
export class DailyProgressReportComponent implements OnInit {
textname:string="raju";
constructor(private router: Router) { }

  ngOnInit() {

  }

  redirectToAddDPR() {
    this.router.navigateByUrl('/dailyprogressreport/adddailyprogressreport');
  }
}
