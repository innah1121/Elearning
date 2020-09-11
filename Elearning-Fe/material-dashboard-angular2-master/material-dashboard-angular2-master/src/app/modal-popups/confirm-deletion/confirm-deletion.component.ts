import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-deletion',
  templateUrl: './confirm-deletion.component.html',
  styleUrls: ['./confirm-deletion.component.css']
})
export class ConfirmDeletionComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ConfirmDeletionComponent>) { }

  ngOnInit() {
  }
  // closeDialog(){
  //    this.dialogRef.close(false);
  // }

}
