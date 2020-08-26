import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogueateComponent } from './components/logueate.component';

const routes: Routes = [
    {
        path: '',
        component: LogueateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class LogueateRoutingModule {}
