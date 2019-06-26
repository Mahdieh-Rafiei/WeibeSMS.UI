export interface ButtonRowConfigInterface {
  classSelector?(item:any):string;
  innerHTMLSelector(item:any):string;
  action?(item:any):any;
}
