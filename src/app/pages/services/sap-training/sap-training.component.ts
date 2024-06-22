import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseCardComponentComponent } from '../../../components/app-shell/components/course-card-component/course-card-component.component';

@Component({
  selector: 'app-sap-training',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CourseCardComponentComponent],
  templateUrl: './sap-training.component.html',
  styleUrl: './sap-training.component.scss',
})
export class SapTrainingComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const paths = [
      document.getElementById('anim1') as unknown as SVGAnimateElement,
      document.getElementById('anim2') as unknown as SVGAnimateElement,
      document.getElementById('anim3') as unknown as SVGAnimateElement,
      document.getElementById('anim4') as unknown as SVGAnimateElement,
      document.getElementById('anim5') as unknown as SVGAnimateElement,
      document.getElementById('anim6') as unknown as SVGAnimateElement,
    ];

    function restartAnimations() {
      paths.forEach((anim, index) => {
        anim.beginElement();
      });
    }

    // Listen for the end of the last animation to restart the sequence
    paths[5].addEventListener('endEvent', restartAnimations);

    // Initial start
    restartAnimations();
  }
}
