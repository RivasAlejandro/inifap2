import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecomendacionProvider} from '../../providers/recomendacion/recomendacion';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {DetallePage} from '../detalle/detalle';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arreglo=[];
  actual={}
desc:any;
  constructor(
    public navCtrl: NavController,
    public  api:RecomendacionProvider,
   public http:Http,
  public alertCtrl: AlertController) {
 this.carga();
  }

  ngOnInit(){
  }
logo(fase):string{
  let str= "";
  if(fase=="Niño"){ str="assets/imgs/boy.png";}
  if(fase=="Niña"){ str="assets/imgs/girl.png";}
  if(fase=="Neutra"){ str="assets/imgs/neutral.png";}


  return str ;
}
mostrar(msj){
  let alert = this.alertCtrl.create({
  title:'Recomendación',
    message:'<p>'+msj+'</p>',
    buttons:  [
      {text:'OK'}
    ]
  });
  alert.present();

}
gotoDetalle(catalogo,titulo,valor,fecha){
this.navCtrl.push(DetallePage,
  {
    catalogo:catalogo, 
    titulo:titulo,
    valor:valor,
    fecha:fecha
  });

}
  mostrarInfo(nombre,info ){
    let alert = this.alertCtrl.create({
      title: nombre,
      message:'<p>'+info+'</p>',
      buttons:  [
        {text:'OK'}
      ]
    });
    alert.present();



  }
  carga():void{
    this.api.todas().subscribe(
    res=>{
   
        this.arreglo=res; 
       console.log(this.arreglo);
    }, 
    error=>{
         console.log(error);
    }
    );
  

  }

}

