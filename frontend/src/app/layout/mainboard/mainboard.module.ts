import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainboardRoutingModule } from './mainboard-routing.module';
import { MainboardComponent } from './mainboard.component';


@NgModule({
    imports: [
        CommonModule,
        MainboardRoutingModule,
//        PageHeaderModule
    ],
    declarations: [
      MainboardComponent,
    ]
})
export class MainboardModule { }
