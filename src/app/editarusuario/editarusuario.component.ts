import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { ActivatedRoute , ParamMap, Params, Router } from '@angular/router';
import { Usuario } from '../usuario.modelo';


@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {

  nombre:string;
  direccion:string;
  telefono:string;
  userId:any;
  idEditar:any;
  usuarioEditado:Usuario[]=[];

  constructor(private crudservice:CrudServiceService,
    private rutactiva:ActivatedRoute,
    private router:Router) {

  }

  ngOnInit(): void { 
    this.obtenerid();
    this.obtenerUsuario();   
  }

  obtenerid(){
    this.rutactiva.paramMap.subscribe((idusuario:ParamMap)=>{
      this.userId = parseInt(idusuario.get("id")!);
    })
  }

  obtenerUsuario(){
    this.crudservice.obtenerUsuario(this.userId).subscribe((respuesta:any)=>{
      //for (let clave of respuesta){
        this.nombre=(respuesta[0].nombre);
        this.direccion=(respuesta[0].direccion);
        this.telefono=(respuesta[0].telefono);
        this.idEditar=(respuesta[0].id);
      //}
    });
  }

  UsuarioEditado(){
    if(window.confirm("DESEA EDITAR ESTE USUARIO?::")){
      let usuarioaeditar = new Usuario(this.nombre,this.direccion,this.telefono);
      this.crudservice.editarUsuario(usuarioaeditar,this.userId);
      alert("USUARIO EDITADO CORRECTAMENTE.");
      this.router.navigate(['listado']);
    }
  }

  Cancelar(){
    this.limpiarCampos();
    this.router.navigate(['listado']);
  }

  limpiarCampos(){
    this.nombre='';
    this.direccion='';
    this.telefono='';
  }

}
