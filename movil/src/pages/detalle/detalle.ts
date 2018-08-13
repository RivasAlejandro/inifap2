import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  catalogo:any; 
  fecha:any; 
  titulo:any; 
  valor:any;
  msj:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.catalogo=this.navParams.get('catalogo');
console.log(this.catalogo);

this.titulo = this.navParams.get('titulo');

this.valor= this.navParams.get('valor');
this.fecha  = this.navParams.get('fecha');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }
  cambiaMsj(m){
  this.msj = m; 
  }

}
