import { Component, Input } from '@angular/core';
import { ResizeService } from './../resize.service';
import { SCREEN_SIZE } from './../screen-size.enum';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {

  size: SCREEN_SIZE;

  constructor(private resizeSvc: ResizeService) {
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        this.size = x;
      });
  }

}
