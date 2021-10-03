export interface Player {
  readonly _id: string;
  readonly phoneNumber: string;
  readonly email: string;
  name: string;
  rankings: number;
  rankingPositions: number;
  playerUrlPicture: string;
}
