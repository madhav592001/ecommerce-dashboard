import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items:Item[] ; 
  search_query:string ; 

  ngOnInit(): void {
    this.items = [
      {
        name:"Smart watch",
        image_url:"https://themesberg.com/docs/pixel-bootstrap/assets/img/shop/item-1.png", 
        desc:"A watch full of features for your daily lives necessity",
        price:"Rs. 1999"
      },
      {
        name:"Iphone 14 pro",
        image_url:"https://media.croma.com/image/upload/v1662655665/Croma%20Assets/Communication/Mobiles/Images/261979_4_fb9xio.png", 
        desc:"Iphone with the latest IOS features! Best ever in the industry",
        price:"Rs. 1,19,000"
      },
      {
        name:"Washing machine",
        image_url:"https://media.croma.com/image/upload/v1670589814/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/229553_0_hgavkf.png", 
        desc:"A 20L washing machine for perfect cleaning of your clothes",
        price:""
      },
      {
        name:"Smart watch",
        image_url:"https://themesberg.com/docs/pixel-bootstrap/assets/img/shop/item-1.png", 
        desc:"A watch full of features for your daily lives necessity",
        price:"Rs. 1999"
      },
      {
        name:"Iphone 14 pro",
        image_url:"https://media.croma.com/image/upload/v1662655665/Croma%20Assets/Communication/Mobiles/Images/261979_4_fb9xio.png", 
        desc:"Iphone with the latest IOS features! Best ever in the industry",
        price:"Rs. 1,19,000"
      },
      {
        name:"Washing machine",
        image_url:"https://media.croma.com/image/upload/v1670589814/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/229553_0_hgavkf.png", 
        desc:"A 20L washing machine for perfect cleaning of your clothes",
        price:""
      },
    ]
  }

}
