import {HttpClient} from '@angular/common/http';
import {Component, ElementRef, Input, NgModule, OnInit} from '@angular/core';


@Component({
  selector: 'kmeal-nx-svg-viewer',
  template: '<div class="kmeal-nx-svg-viewer" aria-hidden="true"></div>',
})
export class SvgViewer implements OnInit {
  @Input() src: string;
  @Input() scaleToContainer: boolean;

  constructor(private elementRef: ElementRef, private http: HttpClient) { }

  ngOnInit() {
    this.fetchAndInlineSvgContent(this.src);
  }

  private inlineSvgContent(template) {
    this.elementRef.nativeElement.innerHTML = template;

    if (this.scaleToContainer) {
      let svg = this.elementRef.nativeElement.querySelector('svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  }

  private fetchAndInlineSvgContent(path: string): void {
    const svgAbsPath = getAbsolutePathFromSrc(path);
    this.http.get(svgAbsPath, {responseType: 'text'}).subscribe(svgResponse => {
      this.inlineSvgContent(svgResponse);
    });
  }
}

function getAbsolutePathFromSrc(src: string) {
  return src.slice(src.indexOf('assets/') - 1);
}

@NgModule({
  exports: [SvgViewer],
  declarations: [SvgViewer],
})
export class SvgViewerModule { }
