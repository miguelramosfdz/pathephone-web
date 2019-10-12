// @flow strict

import type { TPlaylistTrack } from "type/state";

type TAddToPlaylist = {|
  type: "FEED_ALBUM__ADD_TO_PLAYLIST",
  payload: TPlaylistTrack[]
|};

type TPlay = {|
  type: "FEED_ALBUM__PLAY",
  payload: TPlaylistTrack[]
|};

export type TFeedAlbumEvent = TAddToPlaylist | TPlay;