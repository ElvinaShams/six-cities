import { Review } from './../../types/review';
import { State } from "../../types/state";
import { NameSpace } from '../../const';

export const getComments = (state: State): Review[] => state[NameSpace.Comments].comments;
