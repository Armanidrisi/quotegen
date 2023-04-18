import { allquotes } from "./data";
import * as fs from "fs";
import { CategoryNotFoundError } from "./exception";

function getrandom<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function get_quotes(category: string = "all"): any[] {
  const categoryLower = category.toLowerCase();
  if (allquotes.hasOwnProperty(categoryLower)) {
    return allquotes[categoryLower];
  } else {
    throw new CategoryNotFoundError("This Category Is Not Available");
  }
}
export function getQuote(category: string = "all"): string {
  const quotes: string[] = get_quotes(category.toLowerCase());
  const single: string = getrandom(quotes);
  return single;
}
