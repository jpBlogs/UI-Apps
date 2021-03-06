/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuicklinksComponent } from './quicklinks.component';

describe('QuicklinksComponent', () => {
  let component: QuicklinksComponent;
  let fixture: ComponentFixture<QuicklinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicklinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
