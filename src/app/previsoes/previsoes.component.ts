import { Component, OnInit } from '@angular/core';
import { PrevisoesService } from '../previsoes.service';
import {Previsoes} from 'src/app/model/Previsoes';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-previsoes',
  templateUrl: './previsoes.component.html',
  styleUrls: ['./previsoes.component.css']
})



export class PrevisoesComponent implements OnInit{
  cidade: string;
   a =[]
   previsoes: Previsoes[];

  ngOnInit(): void{
    // this.previsoesService
    // .registrarComponenteComoInteressado().subscribe(previsoes => 
    //   this.a.push(previsoes))
      
     
    
  }

  constructor(private previsoesService: PrevisoesService){
    this.previsoes = this.previsoesService.getPrevisoes()
    console.log(this.previsoes)


  }

  pesquisar(): void{
    this.previsoesService.obterPrevisoes(this.cidade)
  }

  armazenarNoHistorico(){
    this.previsoesService.armazenarNoHistorico(this.cidade, null)
  }

}
