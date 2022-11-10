import { MAX_RATING } from './const';


const getRating = (rating: number): string => `${(100 / MAX_RATING) * rating}%`;

export {getRating};
