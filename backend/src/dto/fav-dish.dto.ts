export interface FavDishDto {
  readonly id: string;
  readonly name: string;
  readonly category?: string;
  readonly area?: string;
  readonly instructions: string;
  readonly ingredients: string[];
  readonly mesures: string[];
  readonly image?: string;
  readonly src?: string;
}
