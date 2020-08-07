import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello From Hello Component!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements IIdentify  {
  @Input() name: string;

  identify(){
    console.log('Hello, I\'m the HelloComponent!');
  }
}
export interface IIdentify {
    identify:() => void;
}