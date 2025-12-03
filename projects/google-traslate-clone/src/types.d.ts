import type { AUTO_LANGUAGE, SUPPORTED_LANGUAGE } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGE
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LENGUAGE'; payload: string }
  | { type: 'SET_TO_LENGUAGE'; payload: string }
  | { type: 'SET_FROM_TEX'; payload: string }
  | { type: 'SET_RESULT'; payload: string }

export enum SectionType {
  from = 'from',
  to = 'to',
}
