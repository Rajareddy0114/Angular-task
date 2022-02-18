import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Student } from '../employee';
import { Observable, ReplaySubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  students: Student[] = [];

  constructor(private empService: EmployeeService, private route: Router, private router: ActivatedRoute) { }

  

  ngOnInit(): void {
    const studentsObservable = this.empService.getStudents();
    studentsObservable.subscribe((studentsData: Student[]) => {
      this.students = studentsData;
    },
      (error) => {
        console.error('error message:', error)
      }

    );
  }

  navigateToStudent() {
    this.route.navigate(['student'], { relativeTo: this.router });
  }

  sendMessage(data){
    this.empService.sendNotification(data.value)
  }

}
