import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { participantelist } from '../model/participante.model';

@Component({
  selector: 'participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {

   private ParticipanteACrear:participantelist;

  constructor(private http:Http) { 
    this.ParticipanteACrear = new participantelist();
  }

  ngOnInit() {
  }

  
  public GuardarPar()
  {
    this.http.post(
      "http://seminariogrado.webcindario.com/persisitr.php",
      this.ParticipanteACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('participante guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar el participante");
      }
    });

  }

}
