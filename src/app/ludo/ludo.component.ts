import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ludo',
  templateUrl: './ludo.component.html',
  styleUrls: ['./ludo.component.css']
})
export class LudoComponent implements OnInit {

  counts=[0,0,0,0,0,0];
  probab=[0.00,0.00,0.00,0.00,0.00,0.00];
  totalCount = 0;
  pause=false;
  caption = "Pause";
  startTime=new Date();

  imgs=[
    'assets/one.png','assets/two.png','assets/three.png',
    'assets/four.png','assets/five.png','assets/six.png'
  ];

  currImg = this.imgs[0];

  constructor() {

  }

  getWidth(indx) {
    let num = this.probab[indx] * 100;
    num = parseInt(num+"");
    return num+"px";
  }

  togglePause() {
    if(!this.pause) {
      this.pause = true;
      this.caption = "Play";
    } else {
      this.pause = false;
      this.caption = "Pause";
    }
  }

  ngOnInit(): void {
    setInterval(()=>{
      if(!this.pause) {
        this.spin();
      }
    },50);
  }

  spin(){
    let num = Math.random();
    num*=600;
    num=parseInt(num+"");
    num=num%6;
    this.counts[num]++;
    this.totalCount=this.counts[0]+this.counts[1]+this.counts[2]+this.counts[3]+this.counts[4]+this.counts[5];
    for(let i=0;i<6;i++){
      let p = parseFloat((this.counts[i]/this.totalCount).toFixed(2));
      this.probab[i]=p;
    }
    this.currImg = this.imgs[num];
  }

}
