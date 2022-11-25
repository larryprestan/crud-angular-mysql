import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearusuarioComponent } from './crearusuario/crearusuario.component';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';

const routes: Routes = [
  {path:'crear',component:CrearusuarioComponent},
  {path:'editar/:id',component:EditarusuarioComponent},
  {path:'listado',component:ListadousuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
