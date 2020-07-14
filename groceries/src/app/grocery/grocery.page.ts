import { Component, OnInit} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


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

  constructor(private toastCtrl: ToastController, private alertController: AlertController) {

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

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: "Please enter item to add to grocery list",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: item => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: item => {
            console.log('Item added', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }



}
