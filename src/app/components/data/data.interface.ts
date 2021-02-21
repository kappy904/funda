export interface Details {
  AangebodenSinds: string;
  AangebodenSindsTekst: string;
  AantalBadkamers: number;
  AantalKamers: number;
  AantalSlaapkamers?: null;
  AantalWoonlagen: string;
  Aanvaarding: string;
  Adres: string;
  AfgekochtDatum?: null;
  BalkonDakterras?: null;
  BedrijfsruimteCombinatieObject?: null;
  BezichtingDagdelen?: null[] | null;
  BezichtingDagen?: null[] | null;
  BijdrageVVE?: null;
  Bijzonderheden: string;
  Bouwjaar: string;
  Bouwvorm: string;
  BronCode: string;
  ContactpersoonEmail: string;
  ContactpersoonTelefoon: string;
  Cv: string;
  DatumOndertekeningAkte: string;
  Deeplink?: null;
  DetailInfo: DetailInfo;
  EigendomsSituatie: string;
  Energielabel: Energielabel;
  ErfpachtBedrag: number;
  Garage: string;
  GarageIsolatie: string;
  GarageVoorzieningen: string;
  GelegenOp?: null;
  GewijzigdDatum: string;
  HoofdFoto: string;
  HoofdFotoSecure: string;
  HoofdTuinType?: null;
  Id: number;
  IndBasisPlaatsing: boolean;
  IndFotos: boolean;
  IndIpix: boolean;
  IndOpenhuizenTopper: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVeilingProduct: boolean;
  IndVideo: boolean;
  Inhoud: number;
  InternalId: string;
  IsIngetrokken: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  Isolatie: string;
  Kenmerken?: KenmerkenEntity[] | null;
  KenmerkenKort: KenmerkenKort;
  KenmerkenTitel?: null;
  Ligging: string;
  MLIUrl?: null;
  Makelaar: string;
  MakelaarId: number;
  MakelaarTelefoon: string;
  MedeAanbieders?: null[] | null;
  Media?: MediaEntity[] | null;
  Foto?: string[] | null;
  MobileURL: string;
  ObjectType: string;
  ObjectTypeMetVoorvoegsel: string;
  OpenHuizen?: null[] | null;
  PerceelOppervlakte: number;
  PermanenteBewoning: string;
  Plaats: string;
  Postcode: string;
  Prijs: Prijs;
  PrijsGeformatteerd: string;
  Project?: null;
  ProjectNaam?: null;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SchuurBerging?: null;
  SchuurBergingIsolatie?: null;
  SchuurBergingVoorzieningen?: null;
  ScrambledId: string;
  ServiceKosten: number;
  SoortAanbod: number;
  SoortDak: string;
  SoortGarage: string;
  SoortParkeergelegenheid: string;
  SoortPlaatsing: number;
  SoortWoning: string;
  Titels?: TitelsEntity[] | null;
  ToonBezichtigingMaken: boolean;
  ToonBrochureAanvraag: boolean;
  ToonMakelaarWoningaanbod: boolean;
  ToonReageren: boolean;
  TransactieAfmeldDatum: string;
  TransactieMakelaarId?: null;
  TransactieMakelaarNaam?: null;
  TuinLigging?: null;
  TypeProject: number;
  URL: string;
  Veiling: Veiling;
  VerkoopStatus: string;
  Verwarming: string;
  Video?: null;
  VolledigeOmschrijving: string;
  Voorzieningen: string;
  WGS84_X: number;
  WGS84_Y: number;
  WarmWater: string;
  WoonOppervlakte: number;
  EersteHuurPrijs?: null;
  EersteHuurPrijsLang?: null;
  EersteKoopPrijs: number;
  EersteKoopPrijsLang: string;
  HuurPrijs?: null;
  HuurPrijsLang?: null;
  HuurPrijsTot?: null;
  Huurprijs?: null;
  HuurprijsFormaat?: null;
  KoopPrijs: number;
  KoopPrijsLang: string;
  Koopprijs: number;
  KoopprijsFormaat: string;
  KoopprijsTot?: null;
  ShortURL: string;
  Tuin: string;
  VeilingGeformatteerd?: null;
}

export interface DetailInfo {
  HasPromotionLabel: boolean;
  PromotionLabelType: number;
  RibbonColor: number;
  RibbonText?: null;
  Tagline?: null;
}

export interface Energielabel {
  Definitief: boolean;
  Index?: null;
  Label: string;
  NietBeschikbaar: boolean;
  NietVerplicht: boolean;
}

export interface KenmerkenEntity {
  Ad?: null;
  Kenmerken?: KenmerkenEntity1[] | null;
  LokNummer: number;
  SubKenmerk?: SubKenmerk | null;
  Titel: string;
}

export interface KenmerkenEntity1 {
  Naam: string;
  NaamCss?: string | null;
  Waarde: string;
  WaardeCss?: string | null;
}

export interface SubKenmerk {
  Ad?: null;
  Kenmerken?: null[] | null;
  LokNummer: number;
  SubKenmerk?: null;
  Titel: string;
}

export interface KenmerkenKort {
  Ad?: null;
  Kenmerken?: KenmerkenEntity2[] | null;
  LokNummer: number;
  SubKenmerk?: null;
  Titel?: null;
}

export interface KenmerkenEntity2 {
  Naam: string;
  NaamCss?: null;
  Waarde: string;
  WaardeCss?: null;
}

export interface MediaEntity {
  Categorie: number;
  ContentType: number;
  Id: string;
  IndexNumber: number;
  MediaItems?: MediaItemsEntity[] | null;
  Metadata?: null;
  Omschrijving: string;
  RegistratieVerplicht: boolean;
  Soort: number;
}

export interface MediaItemsEntity {
  Category: number;
  Height: number;
  Url: string;
  UrlSecure: string;
  Width: number;
}

export interface Prijs {
  GeenExtraKosten?: null;
  HuurAbbreviation: string;
  Huurprijs?: null;
  HuurprijsOpAanvraag: string;
  HuurprijsTot?: null;
  KoopAbbreviation: string;
  Koopprijs: number;
  KoopprijsOpAanvraag: string;
  KoopprijsTot?: null;
  OriginelePrijs?: null;
  VeilingText: string;
}

export interface TitelsEntity {
  Omschrijving: string;
  Pagina: number;
}

export interface Veiling {
  EindDatum?: null;
  Link?: null;
  StartDatum?: null;
  VeilingPartij?: null;
}
