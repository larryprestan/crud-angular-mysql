import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';
import { Usuario } from '../usuario.modelo';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {

  nombre:string;
  direccion:string;
  telefono:string;

  constructor(private crudservice:CrudServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    let nuevousuario = new Usuario(this.nombre,this.direccion,this.telefono);
    this.crudservice.agregarUsusario(nuevousuario);
    this.limpiarCampos();
    this.router.navigate(['listado']);
  }

  limpiarCampos(){
    this.nombre='';
    this.direccion='';
    this.telefono='';
  }

}
