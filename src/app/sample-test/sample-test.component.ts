import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css']
})
export class SampleTestComponent {

  public addNumbers(num1: number, num2: number = 3): number {
    return num1 + num2;
  }

  public callInnerMethod() {
    return this.addNumbers(1, 2);
  }
}
