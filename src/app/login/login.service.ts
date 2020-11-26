import { Injectable } from '@angular/core';

interface Acao{
  id: number,
  nome: string,
  valor: number,
  
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  acoes: Array<Acao> = [];

  constructor() {}
    
  tabelaAcoes(){ 

    this.acoes = [];
    

  }
}
