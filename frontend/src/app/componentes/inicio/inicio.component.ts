import { TransferenciasService,Transferencia } from 'src/app/service/transferencias.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //declarando o vetor do tipo transferencia, que declaramos e exportou do transferencias.service
  listarTransferencia:Transferencia[]

  constructor(private transferenciasService:TransferenciasService, private router:Router) {
    //inicializando o vetor. ele é um vetor, então precisa receber um vetor vazio.
    this.listarTransferencia = []

  }

  ngOnInit(): void {
    //mostra no console.
    this.listarTransferencias()
  }

  listarTransferencias(){
    //pega o que foi declarado em transferência Service e exibe o resultado
    this.transferenciasService.getTodos().subscribe({
      //o resultado que está vindo do "next", estamos colocando dentro do listrarTransferencia. O next está vindo da função do transferência service.
      next: (resultado) => this.listarTransferencia=<any>resultado,
      //caso o resultado dê erro, declare o erro.
      error: (erro) => console.error(erro),
      //caso não dê erro, exiba a mensagem declarada abaixo.
      complete: () => console.info("Finalizado com sucesso.")
    })



}
deletar(id:any){
  this.transferenciasService.deletar(id).subscribe({
    next: (resultado) => this.listarTransferencias(),
    error: (erro) => console.error(erro),
    complete: ()=> console.info("Deletado com sucesso")
  })

}

editar(id:any){
  this.router.navigate(["/edit" + "/" + id])
}

}

