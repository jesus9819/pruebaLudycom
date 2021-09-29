import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataLocalService } from '../../services/data-local.service'
import { Usuarios } from 'src/app/models/usuarios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

 

  usuarios: Usuarios = new Usuarios();

 t

  constructor(private dataService: DataLocalService,
              private router: Router) { }

  ngOnInit(): void {

  }

  guardar(form: NgForm){
  console.log(form);
  if(form.invalid){
    console.log("formulario invalido");
    Swal.fire({
      title: 'Error',
      text: 'Los campos son requeridos',
      icon: 'error'
    })
    return;
  }
  


  console.log(this.usuarios);
  this.dataService.guardarUsuario(this.usuarios);

  Swal.fire({
    title: 'Exito',
    text: 'Datos guardados con exito',
    icon: 'success'
  })
  form.resetForm();
  this.router.navigate(['/home']);
  }

}
