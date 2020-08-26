import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './components/inicio.component';

import { InicioRoutingModule } from './inicio-routing.module';

import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        InicioComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        InicioRoutingModule
    ]
})
export class InicioModule {

}
