import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {

  title = "Billie's Grocery List";

  constructor(private toastCtrl: ToastController, private alertController: AlertController, private dataService: GroceriesServiceService, private inputDialogService: InputDialogService) {

  }

  ngOnInit() {
  }

  loadItems() {
    return this.dataService.items;
  }


  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showAddItemPrompt();
  }


  async editItem(item, index) {
    console.log("Editing ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing ' + item.name,
      duration: 3000,
      position: 'top'
    });

    toast.present();
    this.inputDialogService.showEditItemPrompt(item, index);
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
