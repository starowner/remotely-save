import { strict as assert } from "assert";

import type { RemotelySavePluginSettings } from "../src/baseTypes";
import { messyConfigToNormal, normalConfigToMessy } from "../src/configPersist";

const DEFAULT_SETTINGS: RemotelySavePluginSettings = {
  webdav: {
    address: "https://example.com/webdav",
    username: "测试中文",
    password: "test 🍎 emoji",
    authType: "basic",
    manualRecursive: false,
  },
  password: "password",
  serviceType: "webdav",
  currLogLevel: "info",
  ignorePaths: ["somefoldertoignore"],
  enableStatusBarInfo: true,
};

describe("Config Persist tests", () => {
  it("should encrypt go back and forth conrrectly", async () => {
    const k = DEFAULT_SETTINGS;
    const k2 = normalConfigToMessy(k);
    const k3 = messyConfigToNormal(k2);
    assert.deepEqual(k3, k);
  });
});
