//libraries
import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  TemplateRef
} from '@angular/core';
//components
import { PortalComponent } from '../portal.component';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  createPortalWithContent(content: TemplateRef<any>, selector: string = "body") {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PortalComponent);
    const portalRef = componentFactory.create(this.injector);

    //attach portal to ng-tree so that change detection can run (JS).
    this.applicationRef.attachView(portalRef.hostView);

    //attach component dom to target place (template).
    const targetDOMContainer = document.querySelector(selector) as HTMLElement;
    const componentDOM = (portalRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    targetDOMContainer.appendChild(componentDOM);

    portalRef.instance.projectedContent = content;

    //return portal instance so that dynamic component can destroy it's parent injector.
    return portalRef;
  }
}
