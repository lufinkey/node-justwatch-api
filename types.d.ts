export default class JustWatch {
  constructor(options?: JustWatchOptions)
  search(options: string | SearchInput): Promise<SearchResults>
  getProviders(): Promise<Provider[]>
  getGenres(): Promise<Genre[]>
  getSeason(season_id: number): Promise<Season>
  getEpisodes(show_id: number): Promise<Episode[]>
  getTitle(content_type: ContentType, title_id: TitleID): Promise<Title>
  getPerson(person_id: number): Promise<Person>
}

export type JustWatchOptions = {
  locale: string
}

export type SearchInput = {
  cinema_release: null
  content_types: ContentType[]
  genres: string[]
  languages: string[]
  max_price: unknown
  min_price: unknown
  monetization_types: MonetizationType[]
  page_size: number
  page: number
  presentation_types: PresentationType[]
  providers: Provider[]
  query: string
  release_year_from: unknown
  release_year_until: unknown
  scoring_filter_types: unknown
}

export enum ContentType {
  Movie = 'movie',
  Show = 'show',
}

export type TitleID = number
export interface Title {
  id: TitleID
  jw_entity_id: string
  title: string
  full_path: string
  full_paths: Fullpaths
  poster: string
  poster_blur_hash: string
  backdrops: Backdrop[]
  short_description: string
  original_release_year: number
  object_type: string
  original_title: string
  localized_release_date: string
  offers: Offer[]
  clips: Clip[]
  scoring: Scoring[]
  credits: Credit[]
  external_ids: Externalid[]
  genre_ids: number[]
  age_certification: string
  runtime: number
  production_countries: string[]
  cinema_release_date: string
  permanent_audiences: string[]
}

export interface Externalid {
  provider: string
  external_id: string
}

export enum MonetizationType {
  Buy = 'buy',
  Rent = 'rent',
  Flatrate = 'flatrate',
}

export enum PresentationType {
  SD = 'sd',
  HD = 'hd',
  UHD = '4k',
}

export interface Urls {
  standard_web: string
  deeplink_web?: string
}

export interface SearchResults {
  page: number
  page_size: number
  total_pages: number
  total_results: number
  items: Title[]
}

export type ProviderID = number
export interface Provider {
  id: ProviderID
  technical_name: string
  short_name: string
  clear_name: string
  display_priority: number
  priority: number
  monetization_types: MonetizationType[]
  icon_url: string
  icon_blur_hash: string
  slug: string
  data: ProviderData
  addon_packages?: unknown
  parent_packages?: unknown
}

export interface ProviderData {
  deeplink_data: unknown[]
  packages: Packages
}

export interface Packages {
  android_tv: string
  fire_tv: string
  tvos: string
  tizenos: string
  webos: string
  xbox: string
}

export interface Genre {
  id: number
  short_name: string
  technical_name: string
  translation: string
  slug: string
}

export interface Season {
  jw_entity_id: string
  id: number
  title: string
  full_path: string
  full_paths: Fullpaths
  poster: string
  poster_blur_hash: string
  backdrops: Backdrop[]
  original_release_year: number
  object_type: string
  original_title: string
  offers: Offer[]
  clips: Clip[]
  scoring: Scoring[]
  credits: Credit[]
  external_ids: Externalid[]
  genre_ids: number[]
  runtime: number
  episodes: Episode[]
  show_id: number
  show_title: string
  season_number: number
}

export interface Episode {
  jw_entity_id: string
  id: number
  title: string
  short_description: string
  object_type: string
  offers: function[]
  runtime: number
  episode_number: number
  season_number: number
  original_release_year?: number
  show_id?: number
  season_number?: number
  episode_number?: number
  show_title?: number
}

export interface Credit {
  role: string
  character_name?: string
  person_id: number
  name: string
}

export interface Person {
  jw_entity_id: string
  id: number
  short_description: string
  object_type: 'person'
  full_name: string
  date_of_birth: string
}

export interface Scoring {
  provider_type: string
  value: number
}

export interface Clip {
  type: string
  provider: string
  external_id: string
  name: string
}

export interface Offer {
  country: string
  currency: string
  element_count?: number
  jw_entity_id: string
  last_change_date_provider_id?: string
  last_change_date?: string
  last_change_difference?: number
  last_change_percent?: number
  last_change_retail_price?: number
  monetization_type: MonetizationType
  new_element_count: number
  presentation_type: string
  provider_id: number
  retail_price?: number
  type?: string
  urls: Urls
}
export interface Backdrop {
  backdrop_url: string
  backdrop_blur_hash: string
}

export interface Fullpaths {
  SEASON_DETAIL_OVERVIEW?: string
  MOVIE_DETAIL_OVERVIEW?: string
}
