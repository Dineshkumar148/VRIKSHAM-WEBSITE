import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopHeaderSectionComponent } from '../../components/app-shell/components/top-header-section/top-header-section.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TopHeaderSectionComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
