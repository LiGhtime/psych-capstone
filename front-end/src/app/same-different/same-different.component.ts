import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { createAnimation } from '@ionic/core';
import { IonSlides } from '@ionic/angular';

enum Stage { START, MEMORIZE, MASK, SELECT, CORRECT, INCORRECT }

@Component({
  selector: 'app-same-different',
  templateUrl: './same-different.component.html',
  styleUrls: ['./same-different.component.scss'],
})
export class SameDifferentComponent implements OnInit {
  @Input() facePaths : string[];
  @Output() finished = new EventEmitter<[number, number]>();
  @ViewChild('slideElement', {static: false}) slideElement: IonSlides;

  constructor() { }

  ngOnInit() {

    this.currentSlide = 0;
    this.progressPercent = 0;
    this.score = 0;
    this.fadeIn = createAnimation();

    this.slideInfo = [];
    for (let i = 0; i < this.facePaths.length; i++) {

      let displayedFace = this.facePaths[i];
      if (Math.random() > .5) {
        displayedFace = this.facePaths[Math.floor(Math.random() * this.facePaths.length)];
      }

      this.slideInfo.push({
        correctFace: this.facePaths[i],
        displayedFace: displayedFace,
        selection: null,
        stage: Stage.START
      });

    }

    this.timer = timer(500).subscribe(async () => {
      let fadeInOverlay = createAnimation()
        .addElement(document.querySelectorAll('.overlay'))
        .fill('none')
        .duration(500)
        .fromTo('opacity', '0', '.9');
      await fadeInOverlay.play();
      if (this.slideInfo[this.currentSlide].stage == Stage.START) {
        Array.from(document.getElementsByClassName('overlay') as HTMLCollectionOf<HTMLElement>)[0].style.opacity = '.9';
      }
    });

  }

  ngAfterViewInit() {
    this.slideElement.lockSwipes(true);
  }

  ngOnDestroy() {
    if (this.interval) {
      this.interval.unsubscribe();
    }
    if (this.timer) {
      this.timer.unsubscribe();
    }
  }

  Stage = Stage;
  mask : string = 'assets/background_imgs/mask1.png';
  memorizeTime : number = 3;

  currentSlide : number
  progressPercent : number;
  score : number;
  timeRemaining : number;
  interval : any;
  timer : any;
  fadeIn : any;
  slideInfo : any;

  async selectFace(sameFace : boolean) {
    if (this.slideInfo[this.currentSlide].stage == Stage.SELECT) {

      if (sameFace) {
        let swipeRight = createAnimation()
        .addElement(document.querySelectorAll('.swipe-card')[this.currentSlide])
        .fill('none')
        .duration(300)
        .keyframes([
          { offset: 0, transform: 'translateX(0%)' },
          { offset: 0.5, transform: 'translateX(100%)' },
          { offset: 0.5, transform: 'translateX(-100%)' },
          { offset: 1, transform: 'translateX(0%)' }
        ]);
        await swipeRight.play();
      } else {
        let swipeLeft = createAnimation()
        .addElement(document.querySelectorAll('.swipe-card')[this.currentSlide])
        .fill('none')
        .duration(300)
        .keyframes([
          { offset: 0, transform: 'translateX(0%)' },
          { offset: 0.5, transform: 'translateX(-100%)' },
          { offset: 0.5, transform: 'translateX(100%)' },
          { offset: 1, transform: 'translateX(0%)' }
        ]);
        await swipeLeft.play();
      }

      this.slideInfo[this.currentSlide].selection = sameFace;
      if (sameFace == (this.slideInfo[this.currentSlide].displayedFace == this.slideInfo[this.currentSlide].correctFace)) {
        this.score++;
        this.slideInfo[this.currentSlide].stage = Stage.CORRECT;
      } else {
        this.slideInfo[this.currentSlide].stage = Stage.INCORRECT;
      }
      this.progressPercent = (this.currentSlide + 1)/this.facePaths.length;
      this.slideElement.lockSwipes(false);
      this.slideElement.lockSwipeToPrev(true);
      
      let slide = this.currentSlide;
      timer(1000).subscribe(async () => {
        this.fadeIn = createAnimation()
          .addElement(document.querySelectorAll('.footer'))
          .fill('none')
          .duration(500)
          .fromTo('opacity', '0', '0.75');
        if (slide == this.currentSlide) {
          await this.fadeIn.play();
          Array.from(document.getElementsByClassName('footer') as HTMLCollectionOf<HTMLElement>)[this.currentSlide].style.opacity = '.75';  
        }
      });
    }
  }

  async startMemorizeTimer() {

    if (this.currentSlide == 0) {
      let fadeOutOverlay = createAnimation()
        .addElement(document.querySelectorAll('.overlay'))
        .fill('none')
        .duration(200)
        .fromTo('opacity', '.9', '0');
      await fadeOutOverlay.play();
    }

    this.timeRemaining = this.memorizeTime;
    this.slideInfo[this.currentSlide].stage = Stage.MEMORIZE;
    this.timer = timer(this.timeRemaining * 1000).subscribe(() => {
      this.startMaskTimer();
    });
    this.interval = interval(1000)
      .pipe(
        takeUntil(timer(this.timeRemaining * 1000))
      )
      .subscribe(async () => {
        let inflate = createAnimation()
          .addElement(document.querySelector('.time-left'))
          .fill('none')
          .duration(400)
          .keyframes([
            { offset: 0, transform: 'scale(1, 1)' },
            { offset: 0.5, transform: 'scale(2, 2)' },
            { offset: 1, transform: 'scale(1, 1)' }
          ]);
        this.timeRemaining--;
        await inflate.play();
      });
  }

  startMaskTimer() {
    this.slideInfo[this.currentSlide].stage = Stage.MASK;
    this.timer = timer(2000).subscribe(() => {
      this.slideInfo[this.currentSlide].stage = Stage.SELECT;
      timer(500).subscribe(async () => {
        let fadeInSwipe = createAnimation()
          .addElement(document.querySelector('.swipe-footer'))
          .fill('none')
          .duration(500)
          .fromTo('opacity', '0', '1');
        await fadeInSwipe.play();
        if (this.slideInfo[this.currentSlide].stage == Stage.SELECT) {
          Array.from(document.getElementsByClassName('swipe-footer') as HTMLCollectionOf<HTMLElement>)[0].style.opacity = '1';  
        }
        let arrowPulse = createAnimation()
          .addElement(document.querySelectorAll('.pulse'))
          .fill('none')
          .duration(10000)
          .keyframes([
            { offset: 0, opacity: '1' },
            { offset: 0.1, opacity: '0' },
            { offset: 0.2, opacity: '1' },
            { offset: 0.3, opacity: '0' },
            { offset: 0.4, opacity: '1' },
            { offset: 0.5, opacity: '0' },
            { offset: 0.6, opacity: '1' },
            { offset: 0.7, opacity: '0' },
            { offset: 0.8, opacity: '1' },
            { offset: 0.9, opacity: '0' },
            { offset: 1, opacity: '1' },
          ]);
        await arrowPulse.play();
      });      
    });
  }

  getSrc(index : number) {
    if (this.slideInfo[index].stage == Stage.MEMORIZE) {
      return this.slideInfo[index].correctFace;
    } else if (this.slideInfo[index].stage == Stage.MASK) {
      return this.mask;
    } else {
      return this.slideInfo[index].displayedFace;
    }
  }

  showFeedback() {
    return !this.endCardDisplayed() && (this.slideInfo[this.currentSlide].stage == Stage.CORRECT || this.slideInfo[this.currentSlide].stage == Stage.INCORRECT);
  }

  endCardDisplayed() {
    return this.currentSlide >= this.facePaths.length;
  }

  async changeSlide() {
    if (await this.slideElement.getActiveIndex() > this.currentSlide) {
      this.currentSlide = await this.slideElement.getActiveIndex();
      await this.slideElement.lockSwipes(true);
      await this.fadeIn.stop();
      let footers = Array.from(document.getElementsByClassName('footer') as HTMLCollectionOf<HTMLElement>);
      for (let i = 0; i < footers.length; i++) {
        footers[i].style.opacity = '0';
      }

      if (!this.endCardDisplayed()) {
        this.startMemorizeTimer();
      }
    }
  }
}
