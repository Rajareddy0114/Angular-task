import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationMessage: string;

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {
    this.empService.notificationSubject.subscribe(d => {
      this.notificationMessage = d;
    })
    // Subject
    // const subject = new Subject();
    // subject.subscribe(val => console.log(val));
    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);


    // Behavioural subject
    // const behaveSubject = new BehaviorSubject(3);
    // behaveSubject.next(1);
    // behaveSubject.next(2);
    // behaveSubject.next(3);
    // behaveSubject.next(4);

    // behaveSubject.subscribe(val => console.log(val))


    //Replay Subject
    // const replaySubjectt = new ReplaySubject(2);
    // replaySubjectt.next(1);
    // replaySubjectt.next(2);
    // replaySubjectt.next(3);
    // replaySubjectt.next(4);

    // replaySubjectt.subscribe(val => console.log(val))

     //Async Subject
    // const asyncSubject = new AsyncSubject();
    // asyncSubject.next(1);
    // asyncSubject.next(2);
    // asyncSubject.next(3);
    // asyncSubject.next(4);
    // asyncSubject.complete();

    // asyncSubject.subscribe(val => console.log(val))
  }

}
