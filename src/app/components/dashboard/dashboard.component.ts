import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empleados: number = 0;
  numArea: number = 0;
  activos: number = 0;
  inactivos: number = 0;

  constructor(private dataService: DataLocalService) { }

  ngOnInit(): void {

   this.empleados = this.dataService.getUsuario().length;
   this.numArea = this.dataService.getAreas().length;
  
   this.getActivos();

  }

   getActivos(){

    let activ = this.dataService.getUsuario();

   

   for(let i = 0; i < activ.length; i++){
    if(activ[i].estado == true){
      this.activos = this.activos + 1;
     }else{
      this.inactivos = this.inactivos + 1;
     }
   }

  //  console.log("activos", this.activos);



   }

}
