import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChercherComponent} from './chercher/chercher.component';
import {AjouterComponent} from './ajouter/ajouter.component';
import {EditerComponent} from './editer/editer.component';


const routes: Routes = [
  {path:"chercher",component:ChercherComponent},
  {path:"ajouter",component:AjouterComponent},
  {path:"editer/:id",component:EditerComponent},
  {path:"",redirectTo:"/chercher",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
