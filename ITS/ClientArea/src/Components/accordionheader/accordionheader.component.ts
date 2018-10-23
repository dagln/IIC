import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'accordionheader',
  templateUrl: './accordionheader.component.html',
  styleUrls: ['./accordionheader.component.css']
})
export class AccordionheaderComponent implements OnInit {
  @Input("head") header: string; // = "msg"
  constructor() { }

  ngOnInit() {
  }

}
