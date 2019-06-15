import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollArticleThirdComponent } from './scroll-article-third.component';

describe('ScrollArticleThirdComponent', () => {
  let component: ScrollArticleThirdComponent;
  let fixture: ComponentFixture<ScrollArticleThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollArticleThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollArticleThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
