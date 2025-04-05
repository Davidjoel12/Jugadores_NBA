import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nba-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nba-navbar.component.html',
  styleUrls: ['./nba-navbar.component.scss']
})
export class NbaNavbarComponent {
  menuItems = [
    { name: 'Games', route: '/games' },
    { name: 'Schedule', route: '/schedule' },
    { name: 'Watch', route: '/watch' },
    { name: 'News', route: '/news' },
    { name: 'Stats', route: '/stats' },
    { name: 'Standings', route: '/standings' },
    { name: 'Playoffs', route: '/playoffs' },
    { name: 'Teams', route: '/teams' },
    { name: 'Players', route: '/players' },
    { name: 'NBA Play', route: '/play' },
    { name: 'Fantasy', route: '/fantasy' },
    { name: 'NBA Bet', route: '/bet' },
    { name: 'League Pass', route: '/league-pass' },
    { name: 'Store', route: '/store' },
    { name: 'Tickets', route: '/tickets' }
  ];
}