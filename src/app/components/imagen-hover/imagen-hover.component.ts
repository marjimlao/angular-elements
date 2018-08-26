import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-imagen-hover',
  templateUrl: './imagen-hover.component.html',
  styleUrls: ['./imagen-hover.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ImagenHoverComponent implements OnInit {

  @ViewChild('capaTexto') capaTexto: ElementRef;

  @Input('texto') texto: string;
  @Input('imagen') imagen: string;
  @Input('colorFondo') colorFondo: string;
  @Input('colorTexto') colorTexto: string;
  @Input('ancho') ancho: string;
  @Input('alto') alto: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  mostrarTexto() {
    this.renderer.setStyle(this.capaTexto.nativeElement, 'opacity', 0.8);
  }

  ocultarTexto() {
    this.renderer.setStyle(this.capaTexto.nativeElement, 'opacity', 0);
  }

}
