import { Component, OnInit } from '@angular/core';
import { TransferenciasService, Transferencia} from 'src/app/service/transferencias.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  transferencia:Transferencia = {
    id_tranferencia: "",
    nomeCliente: "",
    valor: "",
    contaCliente: ""
  }

  constructor(private transferenciaservice:TransferenciasService, private activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id_inicio = <any>this.activatedroute.snapshot.params['id']
    this.transferenciaservice.getUma(id_inicio).subscribe({
      next: (resultado) => this.transferencia = (resultado),
      error: (erro) => console.error(erro),
      complete: () => console.info ("Dados apresentados")

    })
  }

  modificar(){
    this.transferenciaservice.editar(this.transferencia.id_tranferencia, this.transferencia ).subscribe({
      next: (resultado) => console.log(resultado),
      error: (erro) => console.error(erro),
      complete: ()=> console.info ("Editado com sucesso")
    })
    this.router.navigate(['/inicio'])
  }



}
