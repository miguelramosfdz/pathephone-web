import { SERVICE_MOCK_DELAY } from "util/constant";
import { setAsyncTimeout } from "util/setAsyncTimeout";
import { TrackPreview } from "type/model";
import { getTrackPreviewMocks } from "util/mock/trackPreviewMock";

export const getTrackPreviewsByAlbumIds = async (
  ids: string[]
): Promise<TrackPreview[]> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);

  return getTrackPreviewMocks(10);
};
