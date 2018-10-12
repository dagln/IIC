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

_list: Number[] = [1, 2, 3];
  constructor() { }

  ngOnInit() {
    // contentchildren the templates by using the new directive as selector, not TemplateRef. 
    // - this will give you a way to identify each template.
    
    // use the id provided in the new directive to retreive a template from the querylist 
    // and used that template in an ngTemplateOutlet in an ngTemplate tag or an ngContainer.
  }

}
