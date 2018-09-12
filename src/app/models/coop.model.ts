export class CoopProducts {
    directProducts: DirectProduct[];
    directProductsTotalItems: number;
    spellingSuggestions?: any;
    makeSense: boolean;
    facets: Facet[];
}

export class Facet {
    facet: string;
    values: Value[];
    min?: any;
    max?: any;
}

export class Value {
    filter: string;
    count: number;
    value: string;
    child?: any;
}

export class DirectProduct {
    id: number;
    identifier: string;
    ean: string;
    name: string;
    manufacturer: string;
    image: Image;
    price: number; 
    priceUnit: string;
    taxRate: number;
    comparativePrice: string;
    comparativeUnit: string;
    variants: Variant[];
    details: Details;
    sections: Section[][];
    entityType: string;
    escapedName: string;
    richRelevanceClickTrackingUrl: string;
    addToCartParams: string;
}

export class Section {
    id: number;
    name: string;
    escapedName: string;
}

export class Details {
    description?: string;
    isEko?: boolean;
    isKrav?: boolean;
    isFairTrade?: boolean;
    isSvanen?: boolean;
    isNyckelhal?: boolean;
    isNyhet?: boolean;
    fromSweden?: boolean;
    isWeightProduct?: boolean;
    origin?: string;
    minimumStorageTemperature?: string;
    maximumStorageTemperature?: string;
    alcoholPercentage?: string;
    healthSafetyInformation?: HealthSafetyInformation;
    allergyInfo?: AllergyInfo[];
    nutritionFacts?: string[];
    content?: string;
    attributes?: (Attribute | Attributes2)[];
    size?: Size;
    dinner?: Dinner;
    isAlwaysLowPrice?: boolean;
}

export class Dinner {
    isDinner: boolean;
    type: string;
    maxDelivery: number;
}

export class Size {
    size: number;
    unit: string;
    averagePieceWeight: number;
}

export class Attributes2 {
    name: string;
    isEko: boolean;
    identifier: string;
    image?: Image;
}

export class Attribute {
    name: string;
    image: Image;
    isEko: boolean;
    identifier: string;
}

export class AllergyInfo {
    contains: string;
    remark: string;
    substanceName: string;
}

export class HealthSafetyInformation {
    hsSignalWordsCode: HsSignalWordsCode;
    precautionaryStatement: any[];
    hazardStatement: any[];
    attributes: any[];
}

export class HsSignalWordsCode {
}

export class Variant {
    id: number;
    name: string;
    weight: number;
    price: number;
}

export class Image {
    url: string;
    path: string;
    identifier: string;
}