import { test } from "@playwright/test";

// This is a static privacy policy page with no authentication.
// Auth tests are intentionally skipped — no auth exists on this site.
test.skip(true, "no auth — static page only");

test("placeholder to satisfy runner", async () => {
  // never executes
});
