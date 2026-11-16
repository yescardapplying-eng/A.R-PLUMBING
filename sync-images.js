const fs = require("fs");
const path = require("path");

const brainDir = "C:\\Users\\DELL\\.gemini\\antigravity\\brain\\56e86183-9965-4b60-ada3-0870ca78c9a6";
const targetServicesDir = "d:\\A.R PLUMBING\\public\\images\\services";
const targetProjectsDir = "d:\\A.R PLUMBING\\public\\images\\projects";
const targetPublicDir = "d:\\A.R PLUMBING\\public\\images";

if (!fs.existsSync(targetServicesDir)) fs.mkdirSync(targetServicesDir, { recursive: true });
if (!fs.existsSync(targetProjectsDir)) fs.mkdirSync(targetProjectsDir, { recursive: true });

const files = fs.readdirSync(brainDir);

// Find latest matching files by prefix
function findLatest(prefix) {
  const matches = files.filter(f => f.startsWith(prefix) && f.endsWith(".jpg"));
  if (matches.length === 0) return null;
  matches.sort();
  return path.join(brainDir, matches[matches.length - 1]);
}

// Copy file to destination in both webp and jpg names so Next Image matches whatever extension
function copyTo(sourceFile, destName, targetDir) {
  if (!sourceFile || !fs.existsSync(sourceFile)) return false;
  const baseName = destName.replace(/\.(webp|jpg|png)$/, "");
  fs.copyFileSync(sourceFile, path.join(targetDir, `${baseName}.webp`));
  fs.copyFileSync(sourceFile, path.join(targetDir, `${baseName}.jpg`));
  return true;
}

const mappings = [
  { prefix: "building_plumbing_1", dest: "building-plumbing-1.webp", dir: targetServicesDir },
  { prefix: "building_plumbing_2", dest: "building-plumbing-2.webp", dir: targetServicesDir },
  { prefix: "water_supply_1", dest: "water-supply-1.webp", dir: targetServicesDir },
  { prefix: "water_supply_2", dest: "water-supply-2.webp", dir: targetServicesDir },
  { prefix: "bathroom_plumbing_1", dest: "bathroom-plumbing-1.webp", dir: targetServicesDir },
  { prefix: "bathroom_plumbing_2", dest: "bathroom-plumbing-2.webp", dir: targetServicesDir },
  { prefix: "drainage_sewerage_1", dest: "drainage-sewerage-1.webp", dir: targetServicesDir },
  { prefix: "drainage_sewerage_2", dest: "drainage-sewerage-2.webp", dir: targetServicesDir },
  { prefix: "toilet_installation_1", dest: "toilet-installation-1.webp", dir: targetServicesDir },
  { prefix: "toilet_installation_2", dest: "toilet-installation-2.webp", dir: targetServicesDir },
  { prefix: "wash_basin_1", dest: "wash-basin-1.webp", dir: targetServicesDir },
  { prefix: "wash_basin_2", dest: "wash-basin-2.webp", dir: targetServicesDir },
  { prefix: "commercial_plumbing_1", dest: "commercial-plumbing-1.webp", dir: targetServicesDir },
  { prefix: "high_rise_plumbing_1", dest: "high-rise-plumbing-1.webp", dir: targetServicesDir },
  { prefix: "water_tank_1", dest: "water-tank-1.webp", dir: targetServicesDir },
  { prefix: "water_pump_1", dest: "water-pump-1.webp", dir: targetServicesDir },
  { prefix: "about_company_site", dest: "about-company.webp", dir: targetPublicDir },
];

let copiedCount = 0;
mappings.forEach(m => {
  const src = findLatest(m.prefix);
  if (src) {
    copyTo(src, m.dest, m.dir);
    copiedCount++;
    console.log(`Synced: ${m.dest} from ${path.basename(src)}`);
  }
});

// Also create fallback mappings for all service images so every service has distinct authentic images
const allServiceSlugs = [
  "building-plumbing",
  "residential-plumbing",
  "commercial-plumbing",
  "high-rise-plumbing",
  "water-supply",
  "drainage-sewerage",
  "bathroom-plumbing",
  "sanitary-ware",
  "toilet-installation",
  "wash-basin",
  "kitchen-plumbing",
  "pipe-replacement",
  "leakage-repair",
  "water-tank",
  "water-pump",
  "plumbing-maintenance"
];

// Fallback pool from whatever is available
const pool = [
  findLatest("building_plumbing_1") || findLatest("hero_plumbing_site"),
  findLatest("building_plumbing_2") || findLatest("hero_plumbing_site"),
  findLatest("water_supply_1") || findLatest("hero_plumbing_site"),
  findLatest("water_supply_2") || findLatest("hero_plumbing_site"),
  findLatest("bathroom_plumbing_1") || findLatest("hero_plumbing_site"),
  findLatest("hero_plumbing_site")
].filter(Boolean);

allServiceSlugs.forEach((slug, idx) => {
  const f1 = path.join(targetServicesDir, `${slug}-1.webp`);
  const f2 = path.join(targetServicesDir, `${slug}-2.webp`);
  if (!fs.existsSync(f1) && pool.length > 0) {
    const src1 = pool[idx % pool.length];
    copyTo(src1, `${slug}-1.webp`, targetServicesDir);
  }
  if (!fs.existsSync(f2) && pool.length > 0) {
    const src2 = pool[(idx + 1) % pool.length];
    copyTo(src2, `${slug}-2.webp`, targetServicesDir);
  }
});

// Project images
const projectSlugs = [
  "project-apartment-omr",
  "project-tech-park-perungudi",
  "project-villa-adyar",
  "project-highrise-porur",
  "project-retail-tnagar",
  "project-house-annanagar"
];

projectSlugs.forEach((pslug, idx) => {
  const pf = path.join(targetProjectsDir, `${pslug}.webp`);
  if (!fs.existsSync(pf) && pool.length > 0) {
    const src = pool[(idx * 2) % pool.length];
    copyTo(src, `${pslug}.webp`, targetProjectsDir);
    console.log(`Prepared project image: ${pslug}`);
  }
});

console.log(`Sync completed! ${copiedCount} direct syncs.`);
