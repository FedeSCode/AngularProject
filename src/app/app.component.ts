import { Component} from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title= "Angular Project"
  isAuth = false;
  student: any;
  seconds!: number;
  counterSubscription!: Subscription;
  
  constructor(){
  }
  
  ngOnInit() {
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value)=>{
        this.seconds = value;
      },
      (error) => {
        console.log('An error occurred !: '+error);
      },
      ()=>{
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

  lastUpdate = new Date();

  





}

