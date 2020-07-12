import { Component, OnInit} from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {

  title = "Billie's Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    }

  ];

  constructor(private toastCtrl: ToastController) {

  }

  ngOnInit() {
  }
  
  async removeItem(item) {
    console.log("Removing ", item);
    const toast = await this.toastCtrl.create({
      message: 'Removing ' + item.name,
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }




}
