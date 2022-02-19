import { CELL_SOLUTION_STATE, CELL_STATE, IHint, ILogic, ILogicSolution } from './type';
import _ from 'lodash'

export function splitSum(array: CELL_SOLUTION_STATE[]):number[] {
  return array.join('').split(CELL_STATE.BLANK.toString()).reduce<number[]>((acc, cellState:string) => {
    if (!cellState) return acc;
    return [...acc,cellState.length];
  }, []);
}
