import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
//import { PageHeaderModule } from './../../shared';
import { CarouselComponent } from '../carousel/carousel.component';
import {DataTableModule} from "angular2-datatable";

@NgModule({
    imports: [
        CommonModule,
        BoardRoutingModule,
        DataTableModule
//        PageHeaderModule
    ],
    declarations: [
      BoardComponent,
      CarouselComponent
    ]
})
export class BoardModule { }
