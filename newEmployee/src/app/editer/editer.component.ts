import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/Employee';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  public currentEmployee: Employee;
  public url: string;

  constructor(private router:Router, private activitedRoute:ActivatedRoute, private catService:CatalogueService) { }

  ngOnInit() {
    this.url=atob(this.activitedRoute.snapshot.params.id);
    this.catService.getRessource(this.url)
      .subscribe(data=>{
        this.currentEmployee=data;
      },err=>{
        console.log(err);
      })
  }

  onUpdateEmployee(data: any) {
    this.catService.updateRessource(this.url,data)
      .subscribe(data=>{
        alert("La mise à jour a été effectuée avec succès!!!");
        this.router.navigateByUrl("/chercher")
      },err=>{
        console.log(err);
      })
  }

}

