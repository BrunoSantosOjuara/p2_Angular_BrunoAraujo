import { HttpClient } from '@angular/common/http';
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

        
        this.httpClient.get(this.url).subscribe((resposta: any) => {
        //t
          console.log(resposta)
                
                
                for (let i=0;i<=24;i++) {
                 this.historic.push( {cidade: resposta.items[i].cidade, 
                  datapesquisa: `${resposta.items[i].datapesquisa.substr(8,2)}
                                /${resposta.items[i].datapesquisa.substr(5,2)}
                                /${resposta.items[i].datapesquisa.substr(0,4)}` })}
                 
        })      
         this.getHistoric()
          
        }
    
           


  getHistoric (): Historic[]{
    return this.historic;
  }



  constructor (
    private httpClient: HttpClient
  ){ }


  registrarhistoricoInteressado() {
  return this.historicoSubject.asObservable()
  }

}
 