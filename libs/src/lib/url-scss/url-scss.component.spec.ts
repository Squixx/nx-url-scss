import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlScssComponent } from './url-scss.component';

describe('UrlScssComponent', () => {
  let component: UrlScssComponent;
  let fixture: ComponentFixture<UrlScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlScssComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UrlScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
