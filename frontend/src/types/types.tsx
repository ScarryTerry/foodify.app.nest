export interface IDish {
  id: string,
  name: string,
  category?: string,
  area?: string,
  instructions: string,
  ingredients: string[],
  mesures: string[],
  image?: string,
  src?: string
}
