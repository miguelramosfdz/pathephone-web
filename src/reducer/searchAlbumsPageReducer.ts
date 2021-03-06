import { SearchAlbumsPageState } from "type/state";
import { AppEvent } from "type/event";
import { createSearchAlbumsPageState } from "util/createSearchAlbumsPageState";

export const searchAlbumsPageReducer = (
  state: SearchAlbumsPageState,
  event: AppEvent
): SearchAlbumsPageState => {
  switch (event.type) {
    case "GET_ALBUM_PREVIEWS_BY_QUERY": {
      if (event.status === "RESOLVED") {
        if (state.albums.length === 0) {
          return {
            ...state,
            albums: event.payload
          };
        }
        const newAlbums = event.payload.filter(({ id }) =>
          state.albums.some(album => album.id !== id)
        );

        return {
          ...state,
          newAlbums: [...state.newAlbums, ...newAlbums]
        };
      }

      if (event.status === "REJECTED") {
        return {
          ...createSearchAlbumsPageState(),
          failed: true
        };
      }

      return state;
    }
    case "SEARCH_ALBUMS_PAGE__RETRY":
      return {
        ...state,
        failed: false
      };
    case "SEARCH_ALBUMS_PAGE__SHOW_NEW_RESULTS":
      return {
        ...state,
        albums: [...state.newAlbums, ...state.albums],
        newAlbums: []
      };
    case "SEARCH_ALBUMS_PAGE__NEW_QUERY":
      return {
        ...createSearchAlbumsPageState()
      };
    default:
      return state;
  }
};
