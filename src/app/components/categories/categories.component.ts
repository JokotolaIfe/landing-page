import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(){

  }
  cards = [
    {
      title: 'Nigerian Dishes',
      description: 'This dish is available at our restaurants accross Nigeria, Click the order button below to place an order',
      buttonText: 'SEE MORE',
      img: 'https://travel.jumia.com/blog/ng/wp-content/uploads/2016/02/maxresdefault-3.jpg'
    },
    {
      title: 'African Dishes',
      description: 'Dishes are available at our restaurants accross Nigeria, Click the see more button below to see more foods under this section',
      buttonText: 'SEE MORE',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgwMqNmqKPOksnI2c5bGwW5fyErvy4_tBtAfRw21nOM3vsq8g9A&s'
    },
    {
      title: 'Pepper Soup',
      description: 'Dishes are available at our restaurants accross Nigeria, Click the see more button below to see more foods under this section',
      buttonText: 'SEE MORE',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTit19t1Axwyye7Gfa3qbXArJJDQcDC3V__CJI2x6RMRlYo9XiBAA&s'
    },
    {
      title: 'Chinese Foods',
      description: 'Dishes are available at our restaurants accross Nigeria, Click the see more button below to see more foods under this section',
      buttonText: 'SEE MORE',
      img: 'https://food.jumia.com.ng/blog/wp-content/uploads/2015/09/Chinese-dish-blog-4-13-10-Fotolia_3119789_M1-1024x686.jpg'
    },
    {
      title: 'Jollof Rice',
      description: 'Dishes are available at our restaurants accross Nigeria, Click the see more button below to see more foods under this section',
      buttonText: 'SEE MORE',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBZ0rUKYbSGMI0AfAFJR4VplMlrCGcyYaNnkFQEmxr63Qr-zEKQ&s'
    },
    {
      title: 'Local Dishes',
      description: 'Dishes are available at our restaurants accross Nigeria, Click the see more button below to see more foods under this section',
      buttonText: 'SEE MORE',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1nJGAWddbqjFmFFFyXwcXOsW_OLQwQV2-eCZE-vICSb3JAl-ew&s'
    },
  
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
  

}
