import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsIconComponent } from './user-details-icon.component';

describe('UserDetailsIconComponent', () => {
  let component: UserDetailsIconComponent;
  let fixture: ComponentFixture<UserDetailsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
