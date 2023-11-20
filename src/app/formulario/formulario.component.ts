import { Component } from '@angular/core';
import { Alumno } from './alumno';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

persona = {
  id:'',
  nombre:'',
 edad:'',
 correo:'',
 semestre:''
};
cantsemestres=["Primer semestre","Segundo semestre","Tercer semestre","Cuarto semestre","Quinto semestre","Sexto semestre","Séptimo semestre","Octavo semestre", "Noveno semestre", "Décimo semestre"];
modelo = new Alumno("0001","Arturo Céspedes","32","artCes@gmail.com",this.cantsemestres[0]);
  enviado =  false
enviarF(){
  console.log(this.persona)
  this.enviado = true;
}

}
