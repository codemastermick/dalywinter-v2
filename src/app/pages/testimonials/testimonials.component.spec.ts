import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TestimonialsComponent, Testimonial } from "./testimonials.component";
import { MaterialModule } from "app/shared/material.module";
import { TestimonialsRoutingModule } from "./testimonials-routing.module";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { firebaseConfig } from "app/firebaseconfig";

describe("TestimonialsComponent", () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;

  const input: Testimonial = {
    author: "Demo Bob",
    description: "A demo testimonial",
    position: "CEO at nowhere",
    done: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsComponent],
      imports: [
        MaterialModule,
        TestimonialsRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig)
      ],
      providers: [AngularFirestore]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.testimonials = input;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have testimonial content", () => {
    expect(component.testimonials).not.toBeUndefined();
  });

  it("should return a testimonial", () => {
    expect((component.testimonials as Testimonial).author).toBe(input.author);
    expect((component.testimonials as Testimonial).description).toBe(input.description);
  });
});
