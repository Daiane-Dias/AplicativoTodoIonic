import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ItemUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-update',
  templateUrl: 'item-update.html',
})
export class ItemUpdatePage {
  title: string;
  description: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  }

  ionViewDidLoad() {
    // this.title = this.navParams.get('item').title;
    // this.description = this.navParams.get('item').description;
    //console.log('ionViewDidLoad ItemUpdatePage');
  }
  editItem(){
    
    let addItem ={
      title:this.title,
      description:this.description
    };
  
    this.view.dismiss(addItem);
   
    
    }
  close(){
    this.view.dismiss();
  }
}
