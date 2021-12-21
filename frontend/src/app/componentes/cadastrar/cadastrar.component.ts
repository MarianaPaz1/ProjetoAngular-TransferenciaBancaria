import { TransferenciasService,Transferencia } from 'src/app/service/transferencias.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  transferencia:Transferencia = {
    id_tranferencia: "",
    nomeCliente: "",
    valor: "",
    contaCliente: ""
  }

  constructor(private TransferenciaService: TransferenciasService, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrar(){
    delete this.transferencia.id_tranferencia
    this.TransferenciaService.add(this.transferencia).subscribe({
      next: (resultado)=> console.log(resultado),
      error: (erro) => console.error(erro),
      complete: ()=> console.info("Adicionado com sucesso.")
    })
    this.router.navigate(["/inicio"
  ])


  }

}
