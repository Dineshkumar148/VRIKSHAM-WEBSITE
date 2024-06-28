import { Component } from '@angular/core';
import { TopHeaderSectionComponent } from '../../components/app-shell/components/top-header-section/top-header-section.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TopHeaderSectionComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
