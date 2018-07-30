import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { FormlyFieldConfig, FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { TableColumn } from '@swimlane/ngx-datatable/release/types';


@Component({
  selector: 'formly-field-datatable',
  template: `
    <ngx-datatable
      #table
      class="bootstrap"
      [rows]="model"
      [columns]="columns"
      [columnMode]="to.columnMode"
      [rowHeight]="to.rowHeight"
      [headerHeight]="to.headerHeight"
      [footerHeight]="to.footerHeight"
      [limit]="to.limit"
      [scrollbarH]="to.scrollbarH"
      [reorderable]="to.reorderable"
      [externalSorting]="true"
      [selectionType]="'single'">
      <ng-template #genericcolumn ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row" let-column="column">
        <formly-field
          [model]="getModel(model,column,rowIndex)"
          [field]="getField(field,column, rowIndex)"
          [options]="options"
          [form]="formControl">
        </formly-field>
      </ng-template>
    </ngx-datatable>
`,
})

export class DatatableTypeComponent extends FieldArrayType implements OnInit {
  @ViewChild('genericcolumn') public genericcolumn: TemplateRef<any>;

  // column description
  columns: TableColumn[];

  ngOnInit() {
    this.columns = this.field.fieldArray.fieldGroup.map(el => ({
      name: el.templateOptions.label,
      prop: el.key,
      cellTemplate: this.genericcolumn,
    }));
  }

  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  getField(field: FormlyFieldConfig, column: TableColumn, rowIndex: number ): FormlyFieldConfig {
    return field.fieldGroup[rowIndex].fieldGroup.find(f => f.key === column.prop);
  }

  getModel(model, column: TableColumn, rowIndex): any {
    return model[rowIndex];
  }
}