import { ExtensionContext } from "@foxglove/studio";

import { registerRLMConverters } from "./rlm";

export function activate(extensionContext: ExtensionContext): void {
    registerRLMConverters(extensionContext);
}
