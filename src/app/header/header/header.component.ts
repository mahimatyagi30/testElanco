import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  goToCore() {
    return this.router.navigate(['/core'] )
  }

  goToApplications() {
    return this.router.navigate(['/applications'])
  }

  goToresources() {
    return this.router.navigate(['/resources'])
  }

  goToHome() {
    return this.router.navigate(['/home'])
  }
}
