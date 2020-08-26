import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactoComponent } from './components/contacto.component';

import { ContactoRoutingModule } from './contacto-routing.module';

import { SharedModule } from './../shared/shared.module';

import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        ContactoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactoRoutingModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
        ]
})
export class ContactoModule {

}
