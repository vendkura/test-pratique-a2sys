import { Component, PipeTransform } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import operation_data from '../../assets/json/operation_data.json';
// import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


interface Operation{
  id: number| string|undefined,
  annee: number |string,
  trimestre: number | string,
  nature: string | number,
  reference: string | number,
  montant: number | string,
  nom: string | number
} 
function search(text:string, pipe:PipeTransform):Operation[]{
  return operation_data.filter((data)=>{
    const term = text.toLowerCase();
    return(
      data.annee.toString().includes(term) || 
      pipe.transform(data.nom).includes(term) ||
			pipe.transform(data.trimestre).includes(term)
    );
  } );
}
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  // data$:Observable<Operation[]>;
  // filter = new FormControl('', { nonNullable: true });
  operation : Operation[] = operation_data;

//   constructor(pipe: DecimalPipe) {
// 		this.data$ = this.filter.valueChanges.pipe(
// 			startWith(''),
// 			map((text) => search(text, pipe)),
// 		);

// }
}