import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area';
import { DataLocalService } from 'src/app/services/data-local.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-area',
  templateUrl: './new-area.component.html',
  styleUrls: ['./new-area.component.css']
})
export class NewAreaComponent implements OnInit {

  area: Area = new Area();

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
    
  
   
    
    this.dataService.guardarArea(this.area);
  
    Swal.fire({
      title: 'Exito',
      text: 'Datos guardados con exito',
      icon: 'success'
    })

    form.resetForm();
    this.router.navigate(['/area']);
    }

}
