import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chercher',
  templateUrl: './chercher.component.html',
  styleUrls: ['./chercher.component.css']
})
export class ChercherComponent implements OnInit {
  public employees:any;
  public currentPage:number=0;
  public size:number=5;
  public mc:string="e";
  public totalPages:number;
  public pages:Array<number>;
  public currentMotCle:string="";
  constructor(private catService:CatalogueService, private router:Router) { }
  ngOnInit() {
  }

  onChercher(form: any) {
      this.currentPage=0;
      this.currentMotCle=form.motCle;
      this.chercherEmployee();
    }

  private chercherEmployee() {
      this.catService.getEmployeesByMc(this.currentMotCle,this.currentPage,this.size)
      .subscribe(data => {
        this.totalPages = data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
        this.employees = data;
      }, err => {
        console.log(err);
      })
  }

  onPageEmployee(i: number) {
    this.currentPage=i;
    this.chercherEmployee();
  }

  onDeleteProduct(e) {
    let conf=confirm("Etes vous sûre de vouloir supprimer?");
    if(conf) {
      this.catService.deleteRessource(e.id)
        .subscribe(data=>{
          this.chercherEmployee()
        },err=>{
          console.log(err);
        })
  }
}

  onEditEmployee(e) {
    let url="http://localhost:8080/employees/"+e.id;
    this.router.navigateByUrl("/editer/"+btoa(url));
    //this.router.navigateByUrl("/editer/"+btoa(url));
  }
}
