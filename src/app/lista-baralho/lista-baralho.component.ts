import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnType, IgxColumnComponent, IgxGridComponent, IgxPaginatorComponent } from 'igniteui-angular';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-lista-baralho',
  templateUrl: './lista-baralho.component.html',
  styleUrls: ['./lista-baralho.component.css'],
  standalone: true,
  imports: [IgxGridComponent, IgxColumnComponent, IgxPaginatorComponent]
})
export class ListaBaralhoComponent implements OnInit {
  @ViewChild('myGrid', { read: IgxGridComponent }) grid!: IgxGridComponent
  pageNumber = 1
  pageSize = 15
  public localData: any[] = [];
  title = 'lista-baralho';

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.httpService.getCards(this.pageNumber, this.pageSize).subscribe(res => {
      this.localData = res.data
    })
  }

  editar(event: any) {
    console.log(event)
  }

  perPageChange(pageSize: number) {
    this.pageSize = pageSize
    this.loadData()
  }

  perPage(pageNumber: number) {
    this.pageNumber = pageNumber
    this.loadData()
  }

  public onColumnInit(column: ColumnType): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}
