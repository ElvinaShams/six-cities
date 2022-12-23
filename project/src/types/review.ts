import { reviews } from './../mocks/reviews';
import { RoomOffer } from './room-offer';
import { Id } from "react-toastify"

export type Review = {
  id: number,
  comment: string,
  date: string,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  }
}
