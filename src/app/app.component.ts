import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() firstparam: string;
  // @Input() mySecondInputParameter: string;
  ngOnChanges(element: SimpleChanges) {
    console.log('inside on changes');
    this.doSomething(this.firstparam);
  }
  ngOnInit() {
    console.log('ng onit is called');
  }
  ngDoCheck() {
    console.log('ng Do check is called');
  }
  ngAfterContentInit() {
    console.log('ng AfterContentInit is called');
  }
  ngAfterContentChecked() {
    console.log('ng AfterContentChecked is called');
  }
  ngAfterViewInit() {
    console.log('ng AfterViewInit is called');
  }
  ngAfterViewChecked() {
    console.log(' ng AfterViewChecked is called');
  }
  ngOnDestroy(): void {
    console.log(' ng AfterViewChecked is called');
  }
  name = 'ngcanvas';
  constructor() {
    console.log('ng Constructor is called');
  }
  private doSomething(input: string) {}
}
