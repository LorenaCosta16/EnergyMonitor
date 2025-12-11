import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExample } from './form-example';

describe('FormExample', () => {
  let component: FormExample;
  let fixture: ComponentFixture<FormExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
