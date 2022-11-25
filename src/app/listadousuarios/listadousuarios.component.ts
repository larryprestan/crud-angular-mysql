import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';
import { Usuario } from '../usuario.modelo';

@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']
})
export class ListadousuariosComponent implements OnInit {

  usuarios:any;

  constructor(private crudservice:CrudServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listado();
  }

  listado(){
    this.crudservice.listarUsuarios().subscribe((res:any)=>{
      this.usuarios=res;
    });
  }

  obtenerEditar(id:any){
    this.crudservice.obtenerUsuario(id);
    this.router.navigate(['editar']);
  }

}
