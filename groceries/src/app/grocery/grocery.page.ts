import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {

  title = "Billie's Grocery List";

  constructor(private toastCtrl: ToastController, private alertController: AlertController, private dataService: GroceriesServiceService) {

  }

  ngOnInit() {
  }

  loadItems() {
    return this.dataService.items;
  }


  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }


  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: "Please enter item to add to grocery list.",
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
            this.dataService.addItem(item);
          }
        }
      ]
    });

    await alert.present();
  }

  async editItem(item, index) {
    console.log("Editing ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing ' + item.name,
      duration: 3000,
      position: 'top'
    });

    toast.present();
    this.showEditItemPrompt(item, index);
  }

  async showEditItemPrompt(item, index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: "Please edit grocery list.",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: item.name
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'quantity',
          value: item.quantity
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
          text: 'Edit',
          handler: item => {
            console.log('Item edited', item);
            this.dataService.editItem(item, index)
          }
        }
      ]
    });
    await alert.present();
  }

  async removeItem(item, index) {
    console.log("Removing ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing ' + item.name,
      duration: 3000,
      position: 'top'
    });

    toast.present();
    this.dataService.removeItem(index);


  }

}
