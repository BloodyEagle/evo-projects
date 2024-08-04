import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-window-share',
  templateUrl: './modal-window-share.component.html',
  styleUrls: ['./modal-window-share.component.css']
})
export class ModalWindowShareComponent {
  modalRef?: BsModalRef;
  @Input() type: 'img' | 'text' = 'text';
  @Input() buttons: { declineMsg: string } = {declineMsg: 'Закрыть'}

  @Output() onConfirm = new EventEmitter<boolean>();

  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  callDecline(): void {
    this.modalRef?.hide();
    this.onConfirm.emit(false);
  }
}
