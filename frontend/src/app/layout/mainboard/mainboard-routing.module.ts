import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainboardComponent } from './mainboard.component';

const routes: Routes = [
    { path: '', component: MainboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainboardRoutingModule { }
