import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "kmeal-nx-newmenu",
  templateUrl: "./newmenu.component.html",
  styleUrls: ["./newmenu.component.scss"]
})
export class NewmenuComponent {
  menuForm = this.fb.group({
    company: null,
    itemName: [null, Validators.required],
    description: [null, Validators.required],
    photo: null,
    spicy_level: null,
    vegetarian: null,
    cooking_time: null, 
    section_id: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert("Thanks!");
  }
}
