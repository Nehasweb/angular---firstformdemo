import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { BugInfoComponent } from "./bug-info/bug-info.component";
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, PersonalInfoComponent, BugInfoComponent, FooterComponent]
})
export class AppComponent {
  title = 'ass12';
}
