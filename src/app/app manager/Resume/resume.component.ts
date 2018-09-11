import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  url: 'https://i0.wp.com/vcvoices.org/wp-content/uploads/2017/05/sunflowers.jpg?zoom=2&fit=1024%2C640';

}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
