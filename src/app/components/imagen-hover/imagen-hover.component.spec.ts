import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenHoverComponent } from './imagen-hover.component';

describe('ImagenHoverComponent', () => {
  let component: ImagenHoverComponent;
  let fixture: ComponentFixture<ImagenHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
