import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestBoardRoutingModule } from './test-board-routing.module';
import { TestBoardComponent } from './test-board.component';


@NgModule({
    imports: [
        CommonModule,
        TestBoardRoutingModule,
//        PageHeaderModule
    ],
    declarations: [
      TestBoardComponent,
    ]
})
export class TestBoardModule { }
