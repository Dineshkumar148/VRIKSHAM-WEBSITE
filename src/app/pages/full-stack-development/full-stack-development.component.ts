import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderSectionComponent } from '../../components/app-shell/components/top-header-section/top-header-section.component';

@Component({
  selector: 'app-full-stack-development',
  standalone: true,
  imports: [RouterLink, TopHeaderSectionComponent],
  templateUrl: './full-stack-development.component.html',
  styleUrl: './full-stack-development.component.scss'
})
export class FullStackDevelopmentComponent {

}
