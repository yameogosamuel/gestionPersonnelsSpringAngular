import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/Employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
   public host:string="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  public getProducts(){
    return this.httpClient.get(this.host+"/employees");
  }

  public getEmployeesByMc(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/chercherEmployees?mc="+mc+"&page="+page+"&size="+size);
  }

  public deleteRessource(id:number){
    return this.httpClient.delete(this.host+"/employees/"+id);
  }

  public saveRessource(url,data):Observable<Employee>{

    return this.httpClient.post<Employee>(url,data);
  }

  public getRessource(url):Observable<Employee>{

    return this.httpClient.get<Employee>(url);
  }
  public updateRessource(url,data):Observable<Employee>{

    return this.httpClient.put<Employee>(url,data);
  }
}
