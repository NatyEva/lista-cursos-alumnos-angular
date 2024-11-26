import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaCursosComponent } from './tabla-cursos/tabla-cursos.component';
import { TablaAlumnosComponent } from "./tabla-alumnos/tabla-alumnos.component";

@Component({
  selector: 'app-root',
  imports: [TablaCursosComponent, TablaAlumnosComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cursos: boolean= true;
  
  handleCambio(){
    this.cursos=!this.cursos
  }
}
