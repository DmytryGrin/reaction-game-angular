/**
 * 0 - untouched
 * 3 - pending
 * 1 - player
 * 2 - computer
 */
export interface Cell {
  x: number;
  y: number;
  value: 0 | 1 | 2 | 3;
}