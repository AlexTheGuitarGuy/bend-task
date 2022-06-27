export interface Thing {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: string;
  countActive: number;
}

export interface Area {
  areaId: number;
  name: string;
}
