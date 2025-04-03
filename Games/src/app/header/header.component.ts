import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  searchQuery: string = ''; // Stocke la requête de recherche

  constructor(private router: Router) { }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      // Redirige vers une page de recherche avec le titre comme paramètre
      this.router.navigate(['/search'], { queryParams: { title: this.searchQuery } });
    }
  }
}
