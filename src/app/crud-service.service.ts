import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from './usuario.modelo';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  Agregar:string='http://localhost/APIusuarios/agrgarusuario.php';
  Listado:string='http://localhost/APIusuarios/listarusuarios.php';
  ObtenerUsuario:string='http://localhost/APIusuarios/obtenerusuario.php';
  EditarUsuario:string='http://localhost/APIusuarios/editarusuario.php';

  constructor(private hhtpclient:HttpClient) { }

  agregarUsusario(nuevousuario:Usuario){
    this.hhtpclient.post(this.Agregar,JSON.stringify(nuevousuario)).subscribe(res=>{
      if(res==="agregado"){
        alert ("Usuario agregado correctamente");
      }
    });
  }

  listarUsuarios(){
    return this.hhtpclient.get(`${this.Listado}`);
  }

  obtenerUsuario(id:any){
    return this.hhtpclient.get(`${this.ObtenerUsuario}?id=${id}`);
  }

  editarUsuario(usuarioaeditar:any,id:number){
    this.hhtpclient.post(`${this.EditarUsuario}?id=${id}`,usuarioaeditar).subscribe(res=>{
      console.log(res);
    })
  }

}
