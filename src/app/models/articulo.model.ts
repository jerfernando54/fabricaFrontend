export interface Articulo {
  OF?: number,
  ARTICULO?: string,
  Descripcion?: string,
  Cantidad?: number,
  UNID_EMBALADAS?: number,
}

const fabrica: Partial <Articulo> = {};