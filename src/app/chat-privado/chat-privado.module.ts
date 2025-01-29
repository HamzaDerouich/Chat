import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPrivadoRoutingModule } from './chat-privado-routing.module';
import { ChatPrivadoComponent } from './chat-privado.component';


@NgModule({
  declarations: [
    ChatPrivadoComponent
  ],
  imports: [
    CommonModule,
    ChatPrivadoRoutingModule
  ]
})
export class ChatPrivadoModule { }
