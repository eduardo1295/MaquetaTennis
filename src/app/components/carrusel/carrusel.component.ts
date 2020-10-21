import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
  x = 3;
  images = [
    'assets/png/group-10.png',
    'assets/png/group-10.png',
    'assets/png/group-10.png',
    'assets/png/group-10.png',
  ];
  bandera = [true, true, true, false];
  constructor() { }

  ngOnInit(): void {
  }

  cambioMas(){
    const j = this.x;
    if ( this.x + 1  >= 4){
        this.x = 0;
        this.bandera[this.x] = false;
    }else{
      this.x++;
      this.bandera[this.x] = false;
    }
    // console.log(j);
    // console.log(this.x);
    this.bandera[j] = true;
    this.cambiarOrdenMas ( this.x );
  }

  cambioMenos(){
    const j = this.x;
    if ( this.x - 1  < 0){
        this.x = 3;
        this.bandera[this.x] = false;
    }else{
      
      this.x = this.x - 1;
      this.bandera[this.x] = false;
    }
    
    
    this.bandera[j] = true;
    this.cambiarOrdenMenos ( this.x );
  }

  cambiarOrdenMas(eliminado){
    let aux = eliminado + 1 ;
    console.log(aux);
    let flag = true;
    let j = 1;
    while ( flag === true && j < 50 ){
      if ( aux === eliminado){
          flag = false;
          console.log("entro");
      }
      else if ( aux === 4){
        aux = 0 ;
        let cambiar = document.getElementById('img_' + (aux) );
        cambiar.style.order = j.toString();
        console.log("aaa");
      }else {
        let cambiar = document.getElementById('img_' + aux);
        cambiar.style.order = j.toString();
        console.log("b");
        aux++;
      }
      j++;
    } 
  }

  cambiarOrdenMenos(eliminado){
    let aux = eliminado + 1 ;
    console.log(eliminado);
    let flag = true;
    let j = 1;
    while ( flag === true && j < 50 ){
      if ( aux === eliminado){
          flag = false;
          console.log("entro");
      }
      else if ( aux === 4){
        aux = 0 ;
        let cambiar = document.getElementById('img_' + (aux) );
        cambiar.style.order = j.toString();
        console.log("aaa");
      }else {
        let cambiar = document.getElementById('img_' + aux);
        cambiar.style.order = j.toString();
        console.log("b");
        aux++;
      }
      j++;
    } 
  }
  
  // cambiarOrden(eliminado){
  //   let cambiar = document.getElementById('img_0');
  //   cambiar.style.order = 2;
  // }
}
