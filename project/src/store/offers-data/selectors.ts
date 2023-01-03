import { NameSpace } from "../../const";
import { RoomOffer } from "../../types/room-offer";
import { State } from "../../types/state";

export const getOffers = (state: State):RoomOffer[] => state[NameSpace.Offers].roomOffers;
export const getQuestionsDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
