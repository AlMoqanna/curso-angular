import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SalutatorComponent } from './salutator/salutator.component';
import { ListaComponent } from './lista/lista.component';
import { ListaItemComponent } from './lista-item/lista-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SalutatorComponent, ListaComponent, ListaItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
