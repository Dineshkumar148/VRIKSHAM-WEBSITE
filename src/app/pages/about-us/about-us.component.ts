import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';
import { ServiceOfferingCardComponent } from '../../components/app-shell/components/service-offering-card/service-offering-card.component';
import { MatDialog } from '@angular/material/dialog';
import { ExplorePopupComponent } from '../../components/app-shell/components/explore-popup/explore-popup.component';
import { TopHeaderSectionComponent } from '../../components/app-shell/components/top-header-section/top-header-section.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TopHeaderSectionComponent, ServiceOfferingCardComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements AfterViewInit {
  #dialog = inject(MatDialog);

  items = [
    { count: 200, label: 'Partners With Us' },
    { count: 120, label: 'Successful Projects' },
    { count: 20, label: 'No. of Course' },
    { count: 200, label: 'Students' },
  ];

  teamMembers = [
    {
      name: 'Santhosh Kumar',
      role: 'Senior SAP Developer',
      imageUrl: 'assets/images/vst-developer-1.png',
    },
    {
      name: 'Parasuraman',
      role: 'Senior SAP Developer',
      imageUrl: 'assets/images/vst-developer-2.png',
    },
    {
      name: 'Dhamotharan',
      role: 'Senior SAP Developer',
      imageUrl: 'assets/images/vst-developer-3.png',
    },
    {
      name: 'Kumaran',
      role: 'Senior SAP Developer',
      imageUrl: 'assets/images/vst-developer-4.png',
    },
    {
      name: 'Sasidharan',
      role: 'Senior SAP Developer',
      imageUrl: 'assets/images/vst-developer-5.png',
    },
    {
      name: 'Subash',
      role: 'Human Resource',
      imageUrl: 'assets/images/vst-developer-6.png',
    },
    {
      name: 'Vengatakrishnan P',
      role: 'SAP Developer',
      imageUrl: 'assets/images/vst-developer-7.png',
    },
    {
      name: 'Sasidharan',
      role: 'SAP Developer',
      imageUrl: 'assets/images/vst-developer-8.png',
    },
    {
      name: 'Deepak Kumar',
      role: 'SAP Developer',
      imageUrl: 'assets/images/vst-developer-9.png',
    },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const counters = this.el.nativeElement.querySelectorAll('.count');
    counters.forEach((counter: HTMLElement) => {
      this.countUp(counter);
    });
  }

  countUp(counter: HTMLElement) {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count')!;
      const count = +counter.innerText.replace('+', '');
      const speed = 200;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toString() + '+';
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toString() + '+';
      }
    };

    updateCount();
  }

  openExplorePopup() {
    this.#dialog.open(ExplorePopupComponent, {
      panelClass: 'explore-popup',
      disableClose: true,
    });
  }
}
