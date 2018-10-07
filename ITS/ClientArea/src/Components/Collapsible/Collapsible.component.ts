import { Component, OnInit, ViewEncapsulation, Input, ElementRef, ViewChild, Renderer2} from '@angular/core';

@Component({
  selector: 'Collapsible',
  templateUrl: './Collapsible.component.html',
  styleUrls: ['./Collapsible.component.css','./sicon.css','./iaccordion.css'],
  encapsulation: ViewEncapsulation.None
})
export class CollapsibleComponent implements OnInit {
  @Input('headline')  texting: string = 'Fine';
  @Input('hiddenClass') inActiveClass: string;
  @Input('displayedClass') activeClass: string;
  @Input('displayedContentClass') contentClass: string;
  hiddenContentClass: string = 'content';
  @ViewChild('contentChild') _contentView: ElementRef;
  display: boolean = false;
  _scrollHeight: Number = 0;
  heading: string = 'now';
  
  constructor(private renderer: Renderer2) {
    
   }

  ngOnInit() {
  }

  headerClicked(event: any){
    this.display = !this.display;
    
    
    let _item: any = this._contentView.nativeElement;

    // //this.heading = this._contentView.dnativeElement.scrollHeight;
    
    //let _height: Number = _item.scrollHeight;
    //  _item.style.display = this.display ? 'block' : 'none';
    let _height: Number = (this.display) ? _item.scrollHeight : 0; 
    this.heading = String(_height);
    _item.style.maxHeight = String(_height) + 'px';
    //_item.style.overflow = 'hidden';
    // //this.s_contentViedw
    
  }

}
