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
      'content': 'summary content to come',
      'icon': 'icon copy outline'
    },
    {
      'title': 'Requests',
      'content': 'request content to come',
      'icon': 'icon certificate'
    },
    {
      'title': 'Trading Platforms',
      'content': 'trading content to come',
      'icon': 'icon copy outline'
    }
  ]

}
