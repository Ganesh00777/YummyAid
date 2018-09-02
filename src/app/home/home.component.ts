import { Component,TemplateRef , OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  // styleUrls: ['./app.component.scss']
})
export class HomeComponent {
  title = 'app';
   modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }

}
