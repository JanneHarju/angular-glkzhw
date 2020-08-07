import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: '<h1>Dashboard!</h1>',
  styles: [`h1 { font-family: Lato; }`]
})
export class DashboardComponent  {

  identify(){
    console.log('Hello, I\'m the DashboardComponent!');
  }
}
