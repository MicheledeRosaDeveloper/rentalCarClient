import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements  OnChanges {

  constructor() { }
  @Input() columns!:string[];
  @Input() rows!:any[];



  ngOnChanges(changes: SimpleChanges): void {
    // Verifica se ci sono cambiamenti nei dati di input
    if (changes['rows'] && changes['rows'].currentValue) {
      // Aggiorna la tabella o esegui altre azioni necessarie
      console.log('Dati di input aggiornati:', this.rows);
    }
  }

}
