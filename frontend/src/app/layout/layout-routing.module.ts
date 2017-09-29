import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'board', loadChildren: './board/board.module#BoardModule' },
            { path: 'mainboard', loadChildren: './mainboard/mainboard.module#MainboardModule' },
            { path: 'test-board', loadChildren: './test-board/test-board.module#TestBoardModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
