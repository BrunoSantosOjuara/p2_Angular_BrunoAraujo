import { Component, OnInit } from '@angular/core';
import { PrevisoesService } from '../previsoes.service';

@Component({
  selector: 'app-previsoes',
  templateUrl: './previsoes.component.html',
  styleUrls: ['./previsoes.component.css']
})
export class PrevisoesComponent implements OnInit{
  cidade: string;

  ngOnInit(): void{
    this.previsoesService
    .registrarComponenteComoInteressado().subscribe(previsoes => {
      console.log('estamos no componente', previsoes)
    })
  }

  constructor(private previsoesService: PrevisoesService){

  }

  pesquisar(): void{
    this.previsoesService.obterPrevisoes(this.cidade)
  }

}
