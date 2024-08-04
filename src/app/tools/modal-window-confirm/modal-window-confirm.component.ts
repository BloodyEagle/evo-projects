import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-window-confirm',
  templateUrl: './modal-window-confirm.component.html',
  styleUrls: ['./modal-window-confirm.component.css']
})
export class ModalWindowConfirmComponent {
  modalRef?: BsModalRef;
  @Input() title: string = 'Всплывающее окно';
  @Input() type: 'img' | 'text' = 'text';
  @Input() message: string =  'Вы уверены?';
  @Input() img: string = '';
  @Input() buttons: {confirmMsg: string, declineMsg: string} = {confirmMsg: 'Да', declineMsg: 'Нет'}

  @Output() onConfirm = new EventEmitter<boolean>();

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  callConfirm(): void {
    this.modalRef?.hide();
    this.onConfirm.emit(true);
  }

  callDecline(): void {
    this.modalRef?.hide();
    this.onConfirm.emit(false);
  }
}
