import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { laborComponent } from '../labor/labor.component';
import { MaterialEquipmentComponent } from '../material-equipment/material-equipment';

@Component({
    selector: 'project-details',
    templateUrl: 'project-details.html'
})
export class projectDetailsComponent {
    project: any;

    constructor(public navParams: NavParams, public navController: NavController) {
        this.project = this.navParams.data;
        console.log(this.project);
        //sample json data
        this.project = {
            id: 'pr001',
            address: "18 Henry st",
            city: "Cambridge",
            state: "MA",
            zip: "01742",
            price: "$975,000",
            title: "Stunning Victorian",
            prod: 4,
            mat: 3,
            long: -71.11095,
            lat: 42.35663,
            picture: "xyz.jpg",
            thumbnail: "abc.jpg",
            tags: "colonial",
            description: "Lorem ipsum dolor sit amet",
            owner: {
                id: 1,
                name: "Caroline Kingsley",
                title: "Senior Broker",
                picture: "qwe.jpg"
            }
        }
    }
    openLmeDetails(lme: any) {
        if (lme == "l") {
            console.log("lme")
            this.navController.push(laborComponent, lme);
        } else {
            this.navController.push(MaterialEquipmentComponent, lme);
        }
    }
}