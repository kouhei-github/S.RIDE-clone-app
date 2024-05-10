export interface RootObject {
  type: string;
  features: Feature[];
  attribution: string;
}

interface Feature {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

interface Properties {
  mapbox_id: string;
  feature_type: string;
  full_address: string;
  name: string;
  name_preferred: string;
  coordinates: Coordinates;
  place_formatted: string;
  reading: Reading;
  context: Context;
  address_number?: string;
  block?: Block;
  bbox?: number[];
}

interface Context {
  address?: Block;
  block?: Block;
  neighborhood?: Block;
  locality?: Block;
  place: Block;
  region: Block;
  postcode?: Block;
  country: Country;
}

interface Country {
  mapbox_id: string;
  name: string;
  country_code: string;
  country_code_alpha_3: string;
}

interface Block {
  mapbox_id: string;
  name: string;
}

interface Reading {
  'ja-Kana': string;
  'ja-Latn': string;
}

interface Coordinates {
  longitude: number;
  latitude: number;
  accuracy?: string;
}

interface Geometry {
  type: string;
  coordinates: number[];
}