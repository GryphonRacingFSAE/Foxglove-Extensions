import { MessageEvent } from "@foxglove/studio";

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "RLM_POSITION_0XF2",
    toSchemaName: "foxglove.LocationFix",
    converter: (RLM_POSITION_0XF2: RLM_POSITION_0XF2, messageEvent: MessageEvent<RLM_POSITION_0XF3>) => {
      
       return { latitude: RLM_POSITION_0XF2.LATITUDE,
                longitude: RLM_POSITION_0XF2.LONGITUDE
       };
    },
  });
}