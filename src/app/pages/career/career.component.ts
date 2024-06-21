import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {}
