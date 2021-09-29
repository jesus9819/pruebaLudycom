import { Component, OnInit, Input } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Usuarios } from 'src/app/models/usuarios';
import { Area } from 'src/app/models/area';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //usuarios: Usuarios[];

  @Input() usuario: Usuarios;

  constructor(public dataService: DataLocalService) { }

  ngOnInit(): void {
     
     console.log("usuario", this.dataService.getUsuario());

     
  }

  borrar(usuario: Area){

    this.dataService.borrarUsuario(usuario);
  }
  editar(usuario:Area){
    this.dataService.editarUsaurio(usuario);
  }

}
