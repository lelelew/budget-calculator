/**
 * An available thing a user can buy
 * with a price range.
 */
export interface Item {
  type: string;
  name: string;
  lowPrice: number;
  highPrice: number;
}
