import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from 'src/app/models/articulo.model';

@Pipe({
  name: 'productionPipe'
})
export class ProdPipe implements PipeTransform {

  transform(articulos: Readonly<Articulo[]>): Articulo[] {
    return articulos.filter(articulo => articulo.Cantidad! <= articulo.UNID_EMBALADAS! || articulo.Cantidad! - articulo.UNID_EMBALADAS!  > 0);
  }

}
