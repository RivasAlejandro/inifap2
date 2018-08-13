
import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Recomendacion} from '../../app/entities/recomendacion.entity';

/*
  Generated class for the RecomendacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecomendacionProvider {
recomendaciones:any;
  constructor(public http: Http) {

  }

  todas():Observable<Recomendacion[]>{
    return this.http.get('http://167.99.182.224/api/recomendacion/todas')
     .map ((res:Response)=>{
         return res.json();
  
    })
       .catch((error:any)=>{
          return Observable.throw(new Error(error.status));
          });
    
    }
    fucion(){
      return this.http.get('http://167.99.182.224/api/enso').map(
        result=>{
             let data = result.json();
            
             return data;
        }
      );
    
    }


}

