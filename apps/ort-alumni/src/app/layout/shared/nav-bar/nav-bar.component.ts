import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Links } from './links.interface';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  links$!: Observable<Links[]>;
  constructor(private service: NavBarService) {}
  ngOnInit(): void {
    this.links$ = this.service.getLinks();
  }
}
