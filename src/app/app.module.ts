import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { PrevisoesComponent } from './previsoes/previsoes.component';
import { HistoricoComponent } from './historico/historico.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    PrevisoesComponent,
    HistoricoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TabViewModule,
    TableModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
