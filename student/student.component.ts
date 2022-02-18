import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, Observable, of, Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {

    // const observable = new Observable(sub => {
    //   console.log("Observable call....");
    //   let counter = 0;
    //   setInterval(() => {
    //     counter = counter + 1;
    //     sub.next(counter);
    //   }, 2000);
    // });

    // this.observableSubscription = observable.subscribe(result => console.log(result));

  }


  pmsData() {
    //Promise
    // const promise = new Promise((resolve) => {
    //   console.log("Promise call....");
    //   setTimeout(() => {
    //     resolve('promise working');
    //     resolve("promise working1");
    //     resolve("promise working2");
    //     resolve("promise working3");
    //   }, 1000);
    // })

    // promise.then(result => console.log(result));
    this.empService.promiseData();
  }



  obsData() {
    //Observable
    //     const observable = new Observable(sub => {
    //       console.log("Observable call....");
    //       setTimeout(() => {
    //         sub.next("Observable working");
    //         sub.next("Observable working1");
    //         sub.next("Observable working2");
    //         sub.next("Observable working3");
    //       }, 2000);
    //     });

    //     observable.pipe(
    //       filter(d => d === 'Observable working1')
    //     ).subscribe(result => console.log(result));

    this.empService.fetchdata().subscribe(data => {
      console.log("Observable data is:", data);
    })
  }

  of() {
    const arr = [1, 2, 3];
    const arr1 = of(arr);
    arr1.subscribe((values) => console.log(`Emitted Values: `, values)); //Emits array of numbers

  }

  from() {
    const num = [1, 2, 3, 4, 5, 6];
    const num1 = from(num);
    num1.subscribe((values) => console.log(`Emitted Values: `, values));// Emits indidual numbers 
  }

  filter() {
    this.empService.filteredData().subscribe(val => console.log('Filtered dat is:', val))
  }

  map() {
    // const arr = [1, 2, 3];
    // const fromArr$ = from(arr);
    // fromArr$
    //   .pipe(map((value) => value + 10))
    //   .subscribe((value) => console.log(`Emitted Values: `, value));
    this.empService.mapData();
  }

  tap() {
    // const arr = [1, 2, 3];
    // const fromArr$ = from(arr);
    // fromArr$
    //   .pipe(tap((value) => console.log("Received value: ", value)))
    //   .subscribe((value) => console.log(`Emitted Values: `, value));
    this.empService.tap().subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    this.observableSubscription.unsubscribe();
  }

}
