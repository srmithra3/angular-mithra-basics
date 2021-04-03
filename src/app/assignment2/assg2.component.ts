import { Component } from '@angular/core';

@Component({
  selector: 'app-asgnmnt',
  templateUrl: './assg2.component.html',
  styleUrls: ['./assg2.component.css']
})
export class Assg2Component {
  username = '';
   showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
