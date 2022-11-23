import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Previsoes} from 'src/app/model/Previsoes';
import {Historic} from 'src/app/model/Historic';
import {TableModule} from 'primeng/table';

@Injectable({
  providedIn: 'root'
  
})
  
//Padrão de Projeto (Design Pattern): Observer
export class HistoricoService {
  private historicoSubject = new Subject();
  private readonly url: string = 
    "https://g665df6fa3d1993-projetorest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tb_historico/";
    
    
   
  historic: Historic[] = [ ]

  public obterHistorico(): void {  
      const httpHeaders = new HttpHeaders(
        {
          'content-type':'application/json'
        }
      )

        this.httpClient.get(this.url,{headers: httpHeaders}).subscribe((resposta) => {
                console.log(resposta)
            for (let i=0;i<=25;i++) {
             this.historic.push( {cidade: resposta[i].cidade, datapesquisa: resposta[i].datapesquisa })
           } 

           this.getHistoric()
          
        })
    }



  getHistoric (): Historic[]{
    return this.historic;
  }



  constructor (
    private httpClient: HttpClient
  ){ }



}
 