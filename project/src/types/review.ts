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
  },
};

export type ReviewCommentPayload = {
  comment: string,
  rating: number,
  id: number,
  onSuccess: () => void,
};
