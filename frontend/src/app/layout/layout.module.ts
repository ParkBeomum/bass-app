import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent, HeaderComponent, FooterComponent  } from '../shared';

@NgModule({
    imports: [
      /* 다른모듈에서 export된 클래스 활용 의존 */
        CommonModule,
        LayoutRoutingModule,
    ],
    /* 이모듈에 속한 view class */
    declarations: [
        LayoutComponent,
        NavComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class LayoutModule { }
