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
  pageSize = 10
  public localData: any[] = [];
  title = 'lista-baralho';

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getCards(1, 10).subscribe(res => {
      this.localData = res.data
    })
  }

  public onColumnInit(column: ColumnType): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}
