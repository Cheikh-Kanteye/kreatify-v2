import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('videoID') videoID!: ElementRef;
  playPause() {
    const video: HTMLVideoElement = this.videoID.nativeElement;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}
