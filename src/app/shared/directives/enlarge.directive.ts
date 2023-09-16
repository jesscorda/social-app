import type {
  AfterViewInit,
  ElementRef,
  Renderer2} from '@angular/core';
import {
  Directive,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appEnlarge]',
})
export class EnlargeDirective implements AfterViewInit {
  constructor(private _el: ElementRef, private _renderer2: Renderer2) {}

  ngAfterViewInit(): void {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this._renderer2.setStyle(
      this._el.nativeElement,
      'transform',
      'scale(1.05)'
    );
    this._renderer2.setStyle(
      this._el.nativeElement,
      'background-color',
      '#F3E5F5'
    );
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this._renderer2.setStyle(this._el.nativeElement, 'transform', 'scale(1)');
    this._renderer2.setStyle(
      this._el.nativeElement,
      'background-color',
      '#ffffff'
    );
  }
}
