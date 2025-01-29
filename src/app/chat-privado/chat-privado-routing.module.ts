import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPrivadoComponent } from './chat-privado.component';

const routes: Routes = [
  {
    path: '',
    component: ChatPrivadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatPrivadoRoutingModule { }
