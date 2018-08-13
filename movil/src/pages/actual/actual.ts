import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecomendacionProvider} from '../../providers/recomendacion/recomendacion';

/**
 * Generated class for the ActualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actual',
  templateUrl: 'actual.html',
})
export class ActualPage {
  datos:any;
  variable:any;
  ciclos:any=[];
an:any[]=[];
auxiliar =0;
info="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public enso:RecomendacionProvider) {
  this.enso= enso; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualPage');
  }
  ngOnInit(){
    var variable;
       this.enso.fucion().subscribe(
         data=>{
         this.datos=data.enso;
        
        this.datos=this.datos.split("\n");
        for (let index = 0; index < this.datos.length; index++) {
          const element = this.datos[index];
          if(index>2){
           var row = this.datos[index].split(" ");
         var y=row[row.length-1];
         var ciclo=row[0]; }
         this.ciclos.push(ciclo);
         this.an.push(y);}
          }
       );
       setTimeout(() => {
    
        this.an.pop();

        this.variable= this.an[this.an.length-1];
        console.log(this.variable);
        if(this.variable<-0.5){ this.auxiliar=100;
                 this.info="NIÑA";
        }
        if(this.variable>0.5){ this.auxiliar=0;
               this.info="NIÑO";
        }
        if(this.variable>=-0.5 ){ this.auxiliar=50;
                 this.info="NEUTRA";
        }
        if(this.variable>=0.5 ){ this.auxiliar=50;
          this.info="NEUTRA";
        }
       }, 5000);
    
     }

}
