import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { participantelist } from './model/participante.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  participantelist:Array<participantelist> = new Array<participantelist>();

  constructor(private http:Http){

  }

  
  listarparticipantes(){
    this.http
    .get("http://seminariogrado.webcindario.com/persisitr.php")
    .subscribe((response)=>{
      this.futbolList = response.json();
      console.log(this.futbolList);
      let listarparticipante = document.getElementById("listarparticipante");
    });            
  }


}
