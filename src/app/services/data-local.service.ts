import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usuarios';
import { Area } from '../models/area';

@Injectable({
  providedIn: 'root'
})

export class DataLocalService {

  usuarios: Usuarios[] = [];
  areas: Area[] = [];

  constructor() {
    this.getUsuario();
   }

 
  guardarUsuario(usuario: Usuarios){

    this.usuarios.push(usuario);

    console.log(this.usuarios);
     
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));

  }

  guardarArea(area: Area){
   
    this.areas.push(area);

    console.log(this.areas);
     
    localStorage.setItem("areas", JSON.stringify(this.areas));

  }

  getUsuario(){
      
  const userStorage =  JSON.parse(localStorage.getItem("usuarios"));

  if(userStorage){
    this.usuarios = userStorage;
  }

  return userStorage;

  }


  getAreas(){
      
    const areaStorage =  JSON.parse(localStorage.getItem("areas"));

  if(areaStorage){
    this.areas = areaStorage;
  }

  return areaStorage;

  }

  borrarUsuario(usuario){

    this.usuarios =  this.usuarios.filter(user => user.numeroDocumento !== usuario.numeroDocumento);

    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));

  }


  borrarArea(area){

    this.areas =  this.areas.filter(ar => ar.codigo !== area.codigo);

    localStorage.setItem("areas", JSON.stringify(this.areas));

  }

  editarUsaurio(usuario){
    this.usuarios.filter(user => user.numeroDocumento !== usuario.numeroDocumento);
    console.log(usuario);
    
    // localStorage.getItem("usuarios",JSON.stringify)
  }
  
  

 

}
