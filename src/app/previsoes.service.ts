import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})

//Padrão de Projeto (Design Pattern): Observer
export class PrevisoesService {

  private previsoesSubject = new Subject();
  
  private appid: string = "ef0b0973b783e0614ac87612ec04344b";
  private url: string = 
    `https://api.openweathermap.org/data/2.5/forecast`;

  constructor (
    private httpClient: HttpClient
  ){

  }

  obterPrevisoes(cidade: string): void {
    this.url =
      `${this.url}?q=${cidade}&appid=${this.appid}`
    this.httpClient.get(this.url).subscribe((resposta) => {
      this.previsoesSubject.next(resposta)
    })
  }
  registrarComponenteComoInteressado() {
    return this.previsoesSubject.asObservable()
  }
}
