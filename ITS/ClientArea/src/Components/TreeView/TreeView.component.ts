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
_temps: TemplateRef<ElementRef>[];
ctx = {name: "bla"}

_list: number[] = [1,2,3];
_ilist: Thing[] = [new Thing("right", 1), new Thing("now", 2)];
  constructor() {
  }

  getText(): string {
    return "fine, just fine";
  }
  ngOnInit() {
   //this._temps = this._templates.toArray();
  }

}

export class Thing{
  public name: string;
  public counter: number

  constructor(name: string, counter: number) {
    this.name = name;
    this.counter = counter;
  }
}
