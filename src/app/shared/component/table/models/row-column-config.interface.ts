export interface RowColumnConfigInterface {
  propertyName?:string;
  sign?:string;
  isDateTime?:boolean;
  isDate?:boolean;
  hasSummaryDisplay?:boolean;
  hasButton?:boolean;
  hasArrowClass?:boolean;
  classSelector?(item:any):string;
}
