import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  area: Area = new Area();

  constructor(public dataService: DataLocalService) { }

  ngOnInit(): void {
  }

    //  borrar registro de area
    borrar(area: Area){

      this.dataService.borrarArea(area);
    }
      // fin de registro de area
}
