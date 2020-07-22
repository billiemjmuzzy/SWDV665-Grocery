import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(private alertController: AlertController, private dataService: GroceriesServiceService ) { }
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

}
