import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogueateComponent } from './components/logueate.component';

import { LogueateRoutingModule } from './logueate-routing.module';

import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        LogueateComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        LogueateRoutingModule
    ]
})
export class LogueateModule {

}
