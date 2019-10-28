import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPostoComponent } from './meu-posto.component';

describe('MeuPostoComponent', () => {
  let component: MeuPostoComponent;
  let fixture: ComponentFixture<MeuPostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
