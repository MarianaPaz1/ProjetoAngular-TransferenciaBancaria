import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {
  //link para o backend
  url = "/transferencias"



  constructor(private http:HttpClient) { }
  getTodos(){
    return this.http.get(this.url)
  }
  getUma(id:any){
    return this.http.get(this.url + "/" + id)
  }
  add(transferencia:Transferencia){
    return this.http.post(this.url, transferencia)
  }

  deletar(id:any){
    return this.http.delete(this.url + "/" + id)
  }

  editar(id:any, transferencia:Transferencia){
    return this.http.put(this.url + "/" + id, transferencia)
  }
}

export interface Transferencia{
  id_tranferencia?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
}
