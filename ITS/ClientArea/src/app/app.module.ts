import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, ContentChildren } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { WizardModule } from '../components/wizard/wizard.module';

import { AppComponent } from './app.component';
import { AccordionheaderComponent } from '../Components/accordionheader/accordionheader.component';
import { CollapsibleComponent } from '../Components/Collapsible/Collapsible.component';
import { AccordioncontentComponent } from '../components/accordioncontent/accordioncontent.component';
import { TreeViewComponent } from '../components/TreeView/TreeView.component';
import { WizardComponent } from '../components/wizard/wizard.component';
import { ClickableComponent } from '../components/clickable/clickable.component';
import { InfotileComponent } from '../Components/infotile/infotile.component';


const appRoutes: Routes = [
  { path: 'home', component: WizardComponent },
  { path: 'tile', component: InfotileComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AccordionheaderComponent,
    CollapsibleComponent,
    AccordioncontentComponent,
    TreeViewComponent,
    WizardComponent,
    ClickableComponent,
    InfotileComponent,

  ],
  imports: [
    BrowserModule,
    WizardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule { }
