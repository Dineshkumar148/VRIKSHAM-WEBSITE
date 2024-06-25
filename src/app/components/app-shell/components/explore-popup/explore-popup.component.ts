import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-explore-popup',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './explore-popup.component.html',
  styleUrl: './explore-popup.component.scss',
})
export class ExplorePopupComponent {
  @Inject(MatDialogRef)
  public dialogRef!: MatDialogRef<ExplorePopupComponent>;

  closeDialog() {
    this.dialogRef.close();
  }
}
