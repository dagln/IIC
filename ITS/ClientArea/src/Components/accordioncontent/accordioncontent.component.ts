import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'accordioncontent',
  templateUrl: './accordioncontent.component.html',
  styleUrls: ['./accordioncontent.component.css']
})
export class AccordioncontentComponent implements OnInit {
  @Input() content: string;
  constructor() { }

  ngOnInit() {
  }

}
