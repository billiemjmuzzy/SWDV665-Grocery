import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(private alertController: AlertController, private dataService: GroceriesServiceService) { }

  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item' : 'Add Item',
      message: item ? "Please edit grocery list." : "Please enter item to add to grocery list.",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'quantity',
          value: item ? item.quantity : null
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
          text: 'Save',
          handler: item => {
            console.log('Save clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index)
            }
            else {
              this.dataService.addItem(item);
            }

          }
        }
      ]
    });
    await alert.present();
  }

}
