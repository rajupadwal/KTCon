import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { DPRModel,ItemGroupDetail } from '../../models/dpr.model';
import { DPRService } from "../dpr.service";


@Component({
  selector: 'app-add-daily-progress-report',
  templateUrl: './add-daily-progress-report.component.html',
  styleUrls: ['./add-daily-progress-report.component.css']
})
export class AddDailyProgressReportComponent implements OnInit {
  addDPRForm: FormGroup;
  resultList: ItemGroupDetail[]=[];
  constructor(private formBuilder: FormBuilder,private  dprService:DPRService ) { }

  ngOnInit() {

    this.dprService.setDPRItemGroupDetails(); 

    this.addDPRForm = this.formBuilder.group({
      DPRId: [{ value: '' , disabled: true }],
      ClientItemGroupDetailId: [{}, Validators.required],
      ProjectItemGroupDetailId: ['', Validators.required],
      DPRContractorItemGroupDetailId: ['', Validators.required],
      WorkNameItemGroupDetailId: ['', Validators.required],
      TargetDate: ['', Validators.required],
      DPRDate: ['', Validators.required],
      DPRAssociateNameItemGroupDetailId: ['', Validators.required],
      DPRUserItemGroupDetailId: ['', Validators.required],
      KTRepresentativeItemGroupDetailId: ['', Validators.required],
      ReportText: ['', Validators.required],
    });

    this.onChanges();
  }

  onChanges(): void {
    this.addDPRForm.valueChanges.subscribe(val => {
      console.log(val.toString());
    });
  }

  public Search(groupName:string,$event) {
    this.resultList = this.dprService.itemGroupDetails.filter(x => x.GroupName.toUpperCase() == groupName.toUpperCase() && x.ItemName.toUpperCase().indexOf($event.query.toUpperCase())>=0);
  }

}
