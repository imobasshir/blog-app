import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from 'src/app/services/first.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(
    private firstSevice: FirstService,
    private snackbar: SnackbarService,
  ) { }

  goToHome() {
    this.firstSevice.goToHome();
    this.snackbar.openSnackBar('User Loggedin', 'Done');
  }

  goToHomeAdmin() {
    this.firstSevice.goToHomeAdmin();
    this.snackbar.openSnackBar('Admin Loggedin', 'Done');
  }
}
