import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';
import {Employee} from '../model/Employee';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  public mode: number=1;
  public currentEmployee: Employee;

  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit() {
  }

  onSaveEmployee(data: any) {
    this.catService.saveRessource(this.catService.host+"/employees",data)
      .subscribe(res=>{
        //console.log(res)
        //this.router.navigateByUrl("/produits");
        this.currentEmployee=res;
        this.mode=2;
      },err=>{
        console.log(err);
      })
  }

  onAjouter() {
    this.mode=1;
  }
}
