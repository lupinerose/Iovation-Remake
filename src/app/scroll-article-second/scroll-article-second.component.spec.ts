import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollArticleSecondComponent } from './scroll-article-second.component';

describe('ScrollArticleSecondComponent', () => {
  let component: ScrollArticleSecondComponent;
  let fixture: ComponentFixture<ScrollArticleSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollArticleSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollArticleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
