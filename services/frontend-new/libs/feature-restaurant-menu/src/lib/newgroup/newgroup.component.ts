import { Component, OnInit }       from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar }             from "@angular/material";
import { MenuService }             from "../services/menu.service";
import { Book }                    from "../model/books";

@Component({
  selector: "kmeal-nx-newgroup",
  templateUrl: "./newgroup.component.html",
  styleUrls: ["./newgroup.component.scss"]
})
export class NewgroupComponent implements OnInit {

  menuBookForm = this.fb.group({
    menubook: [null, Validators.required]
  });

  menubooks: Book[] = [];
  canCreate: boolean = true;

  constructor(private menuService: MenuService,
              public  snackBar   : MatSnackBar,
              private fb         : FormBuilder) {
  }

  async ngOnInit() {
    this.menubooks = await this.menuService.getMyBooks();
    console.log(this.menubooks);
  }

  async onBookSubmit() {
    if (!this.menuBookForm.valid) {
      this.openSnackBar("Enter menu book", "");
      return;
    }

    try {
     const resp = await this.menuService.createbook(this.menuBookForm.value.menubook);
     console.log('resp ', resp);
     this.menubooks.push(this.menuBookForm.value.menubook);
     this.openSnackBar("menu book created", "");
    }
    catch (e) {
      this.openSnackBar("Error creating menu book :" + e, "");
    }
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
