import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importo los componentes que hemos agregado 
import {Pais1Component} from  './pais1/pais1.component';
import {Pais2Component} from  './pais2/pais2.component';
import {Pais3Component} from  './pais3/pais3.component';;

//Para que funcionen las rutas en la estructura de angular agregamos nuestras rutas.

const routes: Routes = [
  {//primera ruta con el component para ejecutarlo e ir a la URL
    path: 'pais1',
    component: Pais1Component
  },
  {//segunda ruta
    path: 'pais2',
    component: Pais2Component
  },

  {//tercera ruta
    path: 'pais3',
    component: Pais3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
