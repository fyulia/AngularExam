import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraddComponent } from './editoradd.component';

describe('EditoraddComponent', () => {
  let component: EditoraddComponent;
  let fixture: ComponentFixture<EditoraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
