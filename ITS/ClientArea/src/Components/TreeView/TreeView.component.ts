import { ContentChildren, Component, OnInit, Input, ViewChildren, 
        QueryList, ContentChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'TreeView',
  templateUrl: './TreeView.component.html',
  styleUrls: ['./TreeView.component.css']
})
export class TreeViewComponent implements OnInit {
@ContentChild(TemplateRef) _template: TemplateRef<ElementRef>;
@ContentChildren(TemplateRef) _templates: QueryList<TemplateRef<ElementRef>>;

_list: Number[] = [1,2,3];
  constructor() { }

  ngOnInit() {
  }

}
