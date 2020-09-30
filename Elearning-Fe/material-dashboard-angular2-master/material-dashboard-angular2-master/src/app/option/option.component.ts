import { Component, Inject, OnInit } from '@angular/core';
import { OptionService } from 'app/service/option.service';
import { Option } from 'app/model/Option';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  question: any;
  checked = false;
  option: Option = new Option();
  constructor(private optionService: OptionService,
    private dialogRef: MatDialogRef<OptionComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.option.question = this.data.question;
  }
  onSubmit() {
    console.log(this.option)
    this.dialogRef.close('It was saved');
    this.optionService.addOption(this.option).subscribe(res => {
      console.log(res);
    })
  }
}
