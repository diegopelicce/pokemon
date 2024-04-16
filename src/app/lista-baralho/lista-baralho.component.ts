import { Component, OnInit } from '@angular/core';
import { ColumnType, IgxColumnComponent, IgxGridComponent, IgxPaginatorComponent } from 'igniteui-angular';
import { Employee, employeesData } from './localData';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-lista-baralho',
  templateUrl: './lista-baralho.component.html',
  styleUrls: ['./lista-baralho.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxPaginatorComponent]
})
export class ListaBaralhoComponent implements OnInit {
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
