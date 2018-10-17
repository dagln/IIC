import { ContentChildren, Component, OnInit, Input, ViewChildren,
  QueryList, ContentChild, TemplateRef, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'TreeView',
  templateUrl: './TreeView.component.html',
  styleUrls: ['./TreeView.component.css']
})
export class TreeViewComponent implements OnInit, AfterContentInit {
@ContentChild(TemplateRef) _template: TemplateRef<ElementRef>;
@ContentChildren(TemplateRef) _templates: QueryList<TemplateRef<ElementRef>>;
_temps: TemplateRef<ElementRef>[];
ctx = {name: 'bla'};
tms = {};
_index: number = 0;

_list: number[] = [1, 2, 3];
_ilist: Thing[] = [new Thing('right', 1), new Thing('now', 2)];
  constructor() {
  }

  getText(): string {
    return 'fine, just fine';
  }
  getTemplate(index: number): TemplateRef<ElementRef> {
    return this.tms[index];
    // return this._temps[index];
  }
  ngOnInit() {}
  ngAfterContentInit() {
    this._temps = this._templates.toArray();
    this._templates.forEach((item, index) => this.tms[index] = item);
  }

}

export class Thing {
  public name: string;
  public counter: number;

  constructor(name: string, counter: number) {
    this.name = name;
    this.counter = counter;
  }
}
