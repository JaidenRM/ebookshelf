interface IRating {
  numerator: number
  denominator: number
}

export interface IReview {
  rating: IRating
  comment: string
}
