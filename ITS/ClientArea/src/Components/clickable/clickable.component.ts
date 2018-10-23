import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { _sanitizeHtml } from '@angular/core/src/sanitization/html_sanitizer';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'Clickable',
  templateUrl: './clickable.component.html',
  styleUrls: ['./clickable.component.css']
})
export class ClickableComponent implements OnInit {
  @Input() message: string;
  @ViewChild('contentChild') _contentView: ElementRef;
  counter: number = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  headerClicked(event: any) {
    this.counter++;
    const _item: any = this._contentView.nativeElement;
    _item.style.color = (this.counter % 2 == 0) ? 'red' : 'blue';
    //alert('clicked ' + this.counter++);
  }

}
