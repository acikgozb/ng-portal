//libraries
import { AfterViewInit, ComponentRef, Directive, Input, TemplateRef, Type } from '@angular/core';
//services
import { PortalService } from '../services/portal.service';

@Directive({
  selector: '[withPortal]'
})
export class PortalDirective implements AfterViewInit {
  @Input("withPortal") targetSelector: string | undefined;

  private portalComponentRef!: ComponentRef<any>;

  constructor(
    private portalService: PortalService,
    private templateRef: TemplateRef<any>
  ) {}

  ngAfterViewInit() {
    this.portalComponentRef = this.portalService.createPortalWithContent(this.templateRef, this.targetSelector);
  }

  destroy() {
    this.portalComponentRef.destroy();
  }
}
