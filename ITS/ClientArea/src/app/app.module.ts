import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, ContentChildren } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionheaderComponent } from '../Components/accordionheader/accordionheader.component';
import { CollapsibleComponent } from '../Components/Collapsible/Collapsible.component';
import { AccordioncontentComponent } from '../components/accordioncontent/accordioncontent.component';
import { TreeViewComponent } from '../components/TreeView/TreeView.component';
import { WizardComponent } from '../components/wizard/wizard.component';
import { ClickableComponent } from '../components/clickable/clickable.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionheaderComponent,
    CollapsibleComponent,
    AccordioncontentComponent,
    TreeViewComponent,
    WizardComponent,
    ClickableComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule { }
