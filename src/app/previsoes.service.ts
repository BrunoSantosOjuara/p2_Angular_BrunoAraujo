import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Previsoes} from 'src/app/model/Previsoes';
import {TableModule} from 'primeng/table';

@Injectable({
  providedIn: 'root'
  
})
  
//Padrão de Projeto (Design Pattern): Observer
export class PrevisoesService {
  minhaprevisao: any
  private previsoesSubject = new Subject();
  
  private appid: string = "6c916327fba2e586d3508924647bf8df";
  private url: string = 
    `https://api.openweathermap.org/data/2.5/forecast`;

  constructor (
    private httpClient: HttpClient
  ){ }
    
  previsoes: Previsoes[] = [ ]

  public obterPrevisoes(cidade: string): void {
      this.url =
      `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${this.appid}&units=metric`
    this.httpClient.get(this.url).subscribe((resposta: any) => {
      //const icon = resposta.list[0].weather[0].icon
      const dt_txt = resposta.list[0].dt_txt
      const dtaux = dt_txt.substr(0,10)+'T'+dt_txt.substr(11)+'Z'
     //'http://openweathermap.org/img/wn/10d.png'
      this.armazenarNoHistorico(cidade, dtaux)
     
      for (let i=39;i>=0;i--) {
        this.previsoes.unshift( {cidade: resposta.city.name, 
                              data:`${resposta.list[i].dt_txt.substr(8,2)}/${resposta.list[i].dt_txt.substr(5,2)}/${resposta.list[i].dt_txt.substr(0,4)}${resposta.list[i].dt_txt.substr(10,6)}`,
                              icone:`https://openweathermap.org/img/wn/${resposta.list[i].weather[0].icon}.png`,
                              temperaturaMin: resposta.list[i].main.temp_min, 
                              temperaturaMax: resposta.list[i].main.temp_max })
      } ;

      this.getPrevisoes()
      this.previsoesSubject.next(this.previsoes)
    })
  }
  
  
  armazenarNoHistorico(cidade: string, data: string){
    const linkOracle = "https://g665df6fa3d1993-projetorest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tb_historico/"
    this.httpClient.post(linkOracle, {cidade: cidade, datapesquisa: data}).subscribe(res => {
      console.log('Resposta Oracle')
      console.log(res)
    })  
  }
  
  registrarComponenteComoInteressado() {
    return this.previsoesSubject.asObservable()
  }
  
  getPrevisoes (): Previsoes[]{
    return this.previsoes;
  }



}
 