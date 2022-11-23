import { Component, OnInit } from '@angular/core';
import { HistoricoService } from 'src/app/historico.service';
import {Historic} from 'src/app/model/Historic';
import {Previsoes} from 'src/app/model/Previsoes';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})



export class HistoricoComponent implements OnInit{
  historic: Historic[];
  

  ngOnInit():void { 
  
  }

  constructor(private historicoService: HistoricoService){
    this.historic = this.historicoService.getHistoric()

  }
  buscarHistorico(): void{
  console.log('aqui funciona')
  this.historicoService.obterHistorico()
  }

 
}
