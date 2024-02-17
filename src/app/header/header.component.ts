import { Component } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AlertModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
