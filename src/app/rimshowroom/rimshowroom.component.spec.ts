import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RimshowroomComponent } from './rimshowroom.component';


describe('ShowShowRoomComponent', () => {
  let component: RimshowroomComponent;
  let fixture: ComponentFixture<RimshowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimshowroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RimshowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
