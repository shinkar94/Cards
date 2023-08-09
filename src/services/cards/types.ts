export type GetRequestType = {
  id?: string
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export type CardsResponse = {
  items: RootObjectItems[]
  pagination: RootObjectPagination
}
export type RootObjectItems = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  rating: number
  created: string
  updated: string
}
export type RootObjectPagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
