import { ExtensionContext } from "@foxglove/studio";
import { rlmPosition0xf2 } from "./RLM";


export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "RLM_POSITION_0XF2",
    toSchemaName: "foxglove.LocationFix",
    converter: (RLM_POSITION_0XF2: rlmPosition0xf2) => {
      
       return { latitude: RLM_POSITION_0XF2.LATITUDE,
                longitude: RLM_POSITION_0XF2.LONGITUDE
       };
    },
  });
}