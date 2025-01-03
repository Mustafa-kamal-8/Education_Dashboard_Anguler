import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common'; // Import NgIf
import { NavbarComponent } from './features/navbar/navbar.component'; // Ensure the path is correct
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, NgIf, NavbarComponent, SidebarComponent], // Add NgIf here
})
export class AppComponent implements OnInit {
  hideNavbar = false;
  hideSidebar = false;
  title: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const hideRoutes = ['/login'];
        this.hideNavbar = hideRoutes.includes(event.urlAfterRedirects);
        this.hideSidebar = hideRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
