import { Component, OnInit, ViewChild } from '@angular/core';
import { PortalDirective } from '../portal/directives/portal.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild(PortalDirective) portalDirective!: PortalDirective;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.portalDirective.destroy();
  }

}
