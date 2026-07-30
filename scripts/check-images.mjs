import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const roots = ["app", "components", "lib"];
const urls = new Set();

async function walk(dir) {
  for (const entry of await readdir(dir)) {
    const path = join(dir, entry);
    if ((await stat(path)).isDirectory()) {
      await walk(path);
      continue;
    }
    if (!/\.(ts|tsx)$/.test(entry)) continue;
    const source = await readFile(path, "utf8");
    for (const url of source.match(/https:\/\/images\.unsplash\.com\/[^"]+/g) ?? []) {
      urls.add(url);
    }
  }
}

for (const root of roots) await walk(root);

const results = await Promise.all(
  [...urls].map(async (url) => {
    try {
      const res = await fetch(url, { redirect: "follow" });
      return { url, status: res.status };
    } catch (error) {
      return { url, status: `ERR ${error.message}` };
    }
  }),
);

for (const { url, status } of results) {
  if (status !== 200) console.log(`FAIL ${status} ${url}`);
}
console.log(`\nTotal: ${urls.size} · Fallidas: ${results.filter((r) => r.status !== 200).length}`);
