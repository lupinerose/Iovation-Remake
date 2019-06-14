import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollArticleFirstComponent } from './scroll-article-first.component';

describe('ScrollArticleFirstComponent', () => {
  let component: ScrollArticleFirstComponent;
  let fixture: ComponentFixture<ScrollArticleFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollArticleFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollArticleFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
