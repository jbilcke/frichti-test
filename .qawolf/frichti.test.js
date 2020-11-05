const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("frichti", async () => {
  const page = await context.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.click('text="Start!"');
  await page.click('[placeholder="Rechercher un produit.."]');
  await page.click('text="Houmous de betteraves"');
  await page.click('text="Carottes râpées au gingembre"');
  await page.click('text="Carottes croquantes aux herbes fraîches"');
  await page.click('text="Houmous de carottes éco-responsable"');
  await page.click('[placeholder="Rechercher un produit.."]');
  await page.fill('[placeholder="Rechercher un produit.."]', "past");
  await page.click('text="Salade pastèque menthe feta"');
  await page.click('[placeholder="Rechercher un produit.."]');
  await page.fill('[placeholder="Rechercher un produit.."]', '');
  await page.click("text=Gluten");
  await page.click('text="Houmous de betteraves"');
  await page.click('text="Carottes croquantes aux herbes fraîches"');
  await page.click('text="Houmous de carottes éco-responsable"');
  await page.click('text="Salade gourmande de pois chiches, feta & herbes"');
  await page.click("text=Lactose");
  await page.click('text="3 produits"');
  await page.click('[aria-label="cross"]');
  await page.click('text="9 produits"');
});
