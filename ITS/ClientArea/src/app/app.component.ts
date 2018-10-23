import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'ClientArea';
  some: string = 'just fine';

  categories = [
    {
      'title': 'Account Summary',
      'content': 'summary content to come'
    },
    {
      'title': 'Requests',
      'content': 'request content to come'
    },
    {
      'title': 'Trading Platforms',
      'content': 'trading content to come'
    }
  ]

}
