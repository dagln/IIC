import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WizardComponent } from './wizard.component';

const wizardRoutes: Routes = [
  { path: 'wizardmain', component: WizardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(wizardRoutes)
  ],
  declarations: []
})
export class WizardModule { }
