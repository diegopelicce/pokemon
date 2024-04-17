import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaralhoProprioComponent } from './baralho-proprio.component';

describe('BaralhoProprioComponent', () => {
  let component: BaralhoProprioComponent;
  let fixture: ComponentFixture<BaralhoProprioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaralhoProprioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaralhoProprioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
