import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-header-section',
  standalone: true,
  imports: [],
  templateUrl: './top-header-section.component.html',
  styleUrl: './top-header-section.component.scss'
})
export class TopHeaderSectionComponent {
  @Input() heading = '' ;
  @Input() paragraph = '';
}
