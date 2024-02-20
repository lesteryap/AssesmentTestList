import { ComponentFixture, TestBed } from '@angular/core/testing';
import { List3Page } from './list3.page';

describe('List3Page', () => {
  let component: List3Page;
  let fixture: ComponentFixture<List3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(List3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
