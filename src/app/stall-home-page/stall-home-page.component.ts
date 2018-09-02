import { Component,TemplateRef , OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-stall-home-page',
  templateUrl: './stall-home-page.component.html',
  styleUrls: ['./stall-home-page.component.css']
})
export class StallHomePageComponent implements OnInit {



  ngOnInit() {
  }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }


}
