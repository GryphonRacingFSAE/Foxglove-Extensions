import { ExtensionContext } from "@foxglove/studio";

interface RLM_POSITION_0XF2{
  LATITUDE: number;
  LONGITUDE: number;
}

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "RLM_POSITION_0XF2",
    toSchemaName: "foxglove.LocationFix",
    converter: (RLM_POSITION_0XF2: RLM_POSITION_0XF2) => {
      
       return { latitude: RLM_POSITION_0XF2.LATITUDE,
                longitude: RLM_POSITION_0XF2.LONGITUDE
       };
    },
  });
}