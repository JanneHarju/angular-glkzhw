import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IIdentify } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChild(RouterOutlet, { static: true }) outlet;

  private componentExists(): boolean {
    return this.outlet.activated !== null && this.outlet.component !== null;
  }

  private identify(): void {
    return (this.outlet.component as IIdentify).identify();
  }
}
