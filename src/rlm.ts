import { MessageEvent } from "@foxglove/extension";
import { LocationFix } from "@foxglove/schemas";
import { ExtensionContext } from "@foxglove/studio";

interface RLM_POSITION_0XF2 {
    LATITUDE: number;
    LONGITUDE: number;
}

export function registerRLMConverters(extensionContext: ExtensionContext): void {
    extensionContext.registerMessageConverter({
      fromSchemaName: "RLM_POSITION_0XF2",
      toSchemaName: "foxglove.LocationFix",
      converter: (
        rlm_position_msg: RLM_POSITION_0XF2,
        message_event: MessageEvent<RLM_POSITION_0XF2>,
      ): Partial<LocationFix> => {
        return {
          latitude: rlm_position_msg.LATITUDE,
          longitude: rlm_position_msg.LONGITUDE,
          timestamp: message_event.receiveTime,
        };
      },
    });
  }