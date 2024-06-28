import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopHeaderSectionComponent } from '../../components/app-shell/components/top-header-section/top-header-section.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterLink, RouterOutlet,TopHeaderSectionComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {}
