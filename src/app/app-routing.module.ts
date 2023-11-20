import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './curso/cursos/cursos.component';
import { AlumnosComponent } from './alumno/alumnos/alumnos.component';
import { DocenteModule } from './docente/docente.module';
import { DocentesComponent } from './docente/docentes/docentes.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path:'cursos', component: CursosComponent},
 {path:'alumnos', component: AlumnosComponent},
 {path:'docente', component: DocentesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
