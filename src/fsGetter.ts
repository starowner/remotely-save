import type { RemotelySavePluginSettings } from "./baseTypes";
import type { FakeFs } from "./fsAll";
import { FakeFsWebdav } from "./fsWebdav";

/**
 * To avoid circular dependency, we need a new file here.
 */
export function getClient(
  settings: RemotelySavePluginSettings,
  vaultName: string,
  saveUpdatedConfigFunc: () => Promise<any>
): FakeFs {
  return new FakeFsWebdav(settings.webdav, vaultName, saveUpdatedConfigFunc);
}
