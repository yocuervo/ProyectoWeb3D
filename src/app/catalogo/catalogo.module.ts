import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoComponent } from './components/catalogo.component';

import { CatalogoRoutingModule } from './catalogo-routing.module';

import { SharedModule } from './../shared/shared.module';

import { BannerComponent } from './banner/banner.component';


@NgModule({
    declarations: [
        CatalogoComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CatalogoRoutingModule
    ]
})

export class CatalogoModule {

}
