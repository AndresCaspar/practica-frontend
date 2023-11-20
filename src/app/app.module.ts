import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraModule } from './cabecera/cabecera.module';
import { HeadComponent } from './cabecera/head/head.component';
import { FooterComponent } from './footer/footer.component';
import { CursoModule } from './curso/curso.module';
import { CursosComponent } from './curso/cursos/cursos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { DocenteModule } from './docente/docente.module';
import { DocentesComponent } from './docente/docentes/docentes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    CursosComponent,
    FormularioComponent,
    DocentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
