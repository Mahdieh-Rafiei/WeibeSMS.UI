import {ButtonRowConfigInterface} from './button-row-config.interface';

export interface RowColumnConfigInterface {
    propertyName?: string;
    sign?: string;
    isDateTime?: boolean;
    isDate?: boolean;
    hasSummaryDisplay?: boolean;
    hideInResponsive?: boolean;
    buttonConfig?: ButtonRowConfigInterface;
    hasArrowClass?: boolean;

    classSelector?(item: any): string;

    manipulationMethod?(item: any): string;
}

