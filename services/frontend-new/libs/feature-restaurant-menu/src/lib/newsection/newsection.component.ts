import { Component, OnInit, OnDestroy } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { MenuService } from "../services/menu.service";
import { Book } from "../model/books";
import { Section } from "../model/section";
import { SearchTransactionsForwardGQL } from '../generated/graphql';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { ScatterService } from "@kmeal-nx/scatter";

@Component({
  selector: "kmeal-nx-newsection",
  templateUrl: "./newsection.component.html",
  styleUrls: ["./newsection.component.scss"]
})
export class NewsectionComponent implements OnInit, OnDestroy {

  unSubscription$ = new Subject();

  sectionsForm = this.fb.group({
    section: [null, Validators.required],
    menuBook: [null, Validators.required]
  });

  menubooks: Book[];
  sections: Section[];
  selectedSections: Section[];
  selectedMenuBook: Book;
  isReady = false;

  constructor(
    private scatterService: ScatterService,
    private searchTransactionsForwardGQL: SearchTransactionsForwardGQL,
    private menuService: MenuService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
  }

  async ngOnInit() {
    this.menubooks = await this.menuService.getMyBooks();
    this.sections = await this.menuService.getMySections();
    this.sections = this.sections.filter(sec => !!sec.is_active);
    this.selectedSections = this.sections;
    this.isReady = true;
    const accountName = await this.menuService.getAccountName();
    const sub = this.searchTransactionsForwardGQL.subscribe({
      "query": `receiver:${this.scatterService.code} auth:${accountName} status:executed  db.table:sec/${this.scatterService.code}`,
    }).pipe(takeUntil(this.unSubscription$));
    sub.subscribe((next) => {
      console.log(next);
    })
  }

  dropSections(event: CdkDragDrop<Book[]>) {
    console.log('changed order!', event);
  }

  async onSectionsSubmit() {
    if (!this.sectionsForm.valid) {
      this.openSnackBar("Invalid", "");
      return;
    }

    try {
      const resp = await this.menuService.addSection(this.selectedMenuBook.book_id, this.sectionsForm.get('section').value);
      this.sections = await this.menuService.getMySections();
      this.sections = this.sections.filter(sec => !!sec.is_active);

      this.selectedSections.push(this.sections[this.sections.length - 1]);
      this.menubooks = await this.menuService.getMyBooks();
    }
    catch (e) {
      this.openSnackBar(e, '');
    }
  }

  async onBookChange(evt) {
    const secs = evt.value.sections;
    this.selectedSections = this.sections.filter(sec => secs.includes(sec.section_id)) as any;
  }


  async deleteMenuSection(ev) {
    if (!this.selectedMenuBook) {
      this.openSnackBar('Select a book', '');
      return;
    }

    try {
      console.log(ev);
      const resp = await this.menuService.deleteSection(this.selectedMenuBook.book_id, ev.section_id);
      this.sections = await this.menuService.getMySections();
      this.selectedSections = this.sections.filter(sec => this.selectedMenuBook)
      console.log('done ? ', this.sections);
    }
    catch (e) {
      this.openSnackBar(e, '');
    }
  }


  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.unSubscription$.next();
    this.unSubscription$.complete();
  }
}
