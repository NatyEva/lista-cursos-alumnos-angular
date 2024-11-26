import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { CommonModule } from '@angular/common';
import { Alumno } from '../alumno';
@Component({
  selector: 'app-tabla-alumnos',
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit{

  public alumnos?: Alumno []

  ngOnInit(): void {
    
    this.alumnos= alumnos
  }

}
