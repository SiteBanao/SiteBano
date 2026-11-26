/**
 * Photography used across the site.
 * All photos are from Unsplash (https://unsplash.com) under the Unsplash License:
 * free to use for commercial and non-commercial purposes, no permission needed.
 * Only free images.unsplash.com photos are used (no Unsplash+ / premium images).
 * To swap a photo, replace its ID with one from any free Unsplash photo URL.
 */

export interface Photo {
  src: string;
  alt: string;
}

export interface CaptionedPhoto extends Photo {
  caption: string;
}

export interface DemoPhotos {
  hero: Photo;
  about: Photo;
  /** One per service, in the same order as the demo's services. */
  services: [Photo, Photo, Photo, Photo];
  gallery: CaptionedPhoto[];
}

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;
const p = (id: string, alt: string): Photo => ({ src: u(id), alt });
const g = (id: string, caption: string, alt = caption): CaptionedPhoto => ({ src: u(id), alt, caption });

export const demoPhotos: Record<string, DemoPhotos> = {
  "chai-and-crumbs-cafe": {
    hero: p("1761483281417-778013dc0177", "Tea being poured into small clay kulhad cups"),
    about: p("1521017432531-fbd92d768814", "People relaxing inside a cosy café"),
    services: [
      p("1636920272028-c27f1ae474c3", "Spiced chai topped with cinnamon and star anise"),
      p("1623334044303-241021148842", "Freshly baked croissants"),
      p("1601050690597-df0568f70950", "Golden fried samosas with green chilli"),
      p("1717587052948-fb9825de50f8", "A table set with bowls of food for a party"),
    ],
    gallery: [
      g("1567880905822-56f8e06fe630", "Café interior", "Modern coffee shop interior with a curved counter"),
      g("1761483281417-778013dc0177", "Kulhad chai", "Tea poured into clay cups"),
      g("1643944471768-2d2eac3afb6d", "Bakery counter", "Display case filled with pastries"),
      g("1601050690597-df0568f70950", "Samosa platter", "Fried samosas on a wooden tray"),
      g("1541167760496-1628856ab772", "Coffee bar", "Barista making latte art"),
      g("1511081692775-05d0f180a065", "Evening seating", "Café seating under hanging bulbs"),
    ],
  },
  "carewell-family-clinic": {
    hero: p("1631217868264-e5b90bb7e133", "A smiling doctor talking to a patient in a clinic"),
    about: p("1758691462430-81160850496c", "Doctor consulting with an elderly man and a child"),
    services: [
      p("1666214277730-e9c7e755e5a3", "Doctor talking to a patient in a consultation room"),
      p("1576091160550-2173dba999ef", "Stethoscope beside a laptop"),
      p("1581594549595-35f6edc7b762", "Gloved hands preparing a vaccine"),
      p("1606206591513-adbfbdd7a177", "Blood collection tubes in a laboratory rack"),
    ],
    gallery: [
      g("1519494026892-80bbd2d6fd0d", "Reception", "Clinic lobby reception"),
      g("1758691462126-2ee47c8bf9e7", "Family care", "Doctor consulting a mother and child"),
      g("1629909614456-6b1c5c94cecc", "Waiting area", "Waiting area with a couch and plants"),
      g("1532187863486-abf9dbad1b69", "Diagnostics lab", "Laboratory test tubes being filled"),
      g("1532938911079-1b06ac7ceec7", "Our doctors", "Doctor holding a stethoscope"),
      g("1764727291644-5dcb0b1a0375", "Front desk", "Modern reception desk"),
    ],
  },
  "nestora-realty": {
    hero: p("1624204386084-dd8c05e32226", "Modern apartment building with glass balconies at dusk"),
    about: p("1551361415-69c87624334f", "White residential building in daylight"),
    services: [
      p("1682184805271-11671b7ecf4c", "Bright modern living room with a large window"),
      p("1545324418-cc1a3fa10c00", "High-rise apartment building from below"),
      p("1564471925181-982d3a6c1a3f", "Modern residential building exterior"),
      p("1741764014072-68953e93cd48", "Open-plan living room and kitchen"),
    ],
    gallery: [
      g("1628592102751-ba83b0314276", "Living room", "Modern living room with framed art"),
      g("1715985160053-d339e8b6eb94", "Modular kitchen", "Kitchen with refrigerator and counter"),
      g("1632743441209-8a09b8a37e25", "Lounge", "Living room with a large window"),
      g("1642976975710-1d8890dbf5ab", "Clubhouse", "Furnished lounge with a chandelier"),
      g("1662454419716-c4c504728811", "Master bedroom", "Bedroom with a made bed"),
      g("1515263487990-61b07816b324", "Project exterior", "Apartment tower seen from below"),
    ],
  },
  "glow-and-grace-salon": {
    hero: p("1781450090585-1a511b7066d9", "Modern hair salon interior with stylish chairs and mirrors"),
    about: p("1761839256791-6a93f89fb8b0", "Stylist preparing a client in a salon"),
    services: [
      p("1580618672591-eb180b1a973f", "Hairstylist blow-drying a client's hair"),
      p("1570172619644-dfd03ed5d881", "Facial mask treatment at a spa"),
      p("1774660810725-fb04e002003d", "Hairstylist creating an updo"),
      p("1632345031435-8727f6897d53", "Manicure at a nail salon"),
    ],
    gallery: [
      g("1600948836101-f9ffda59d250", "Styling stations", "Salon chairs facing round mirrors"),
      g("1643684391140-c5056cfd3436", "Facial therapy", "Relaxing facial massage"),
      g("1610992015762-45dca7fa3a85", "Nail art", "Hand with pink manicured nails"),
      g("1774660810725-fb04e002003d", "Bridal styling", "Bridal hair updo in progress"),
      g("1634449571010-02389ed0f9b0", "Precision cuts", "Woman getting a haircut"),
      g("1633681926022-84c23e8cb2d6", "Salon lounge", "Salon with black chairs and brick wall"),
    ],
  },
  "brightpath-academy": {
    hero: p("1572847748080-bac263fae977", "Student standing to answer in a classroom with classmates"),
    about: p("1758270705482-cee87ea98738", "Students talking in a lecture hall"),
    services: [
      p("1758685845902-acd5db1b532b", "Teacher writing formulas on a chalkboard"),
      p("1784359065403-93da31c36115", "Students studying in a library reading room"),
      p("1571260899304-425eee4c7efc", "Student carrying textbooks"),
      p("1522202176988-66273c2fd55f", "Students studying together at a table"),
    ],
    gallery: [
      g("1636202339022-7d67f7447e3a", "Classrooms", "Children sitting at desks in a classroom"),
      g("1784359065403-93da31c36115", "Library", "Busy library reading room"),
      g("1758270704763-22072a90d3b6", "Lecture hall", "Students in a lecture hall"),
      g("1707944746058-4da338d0f827", "Science lab", "Students in lab coats working in a lab"),
      g("1522202176988-66273c2fd55f", "Study groups", "Students laughing while studying"),
      g("1758685848095-249ad965f4f3", "Maths sessions", "Maths formulas on a chalkboard"),
    ],
  },
  "pixel-and-pine-studio": {
    hero: p("1499951360447-b19be8fe80f5", "MacBook Pro beside an iMac on a designer's desk"),
    about: p("1677111105589-18eb5ca22aba", "Designer working at a desk with a laptop"),
    services: [
      p("1636247499180-13285c86be9b", "Branded book cover with a logo"),
      p("1547658719-da2b51169166", "Monitor displaying a website design"),
      p("1767449441925-737379bc2c4d", "Mobile app interface designs"),
      p("1587440871875-191322ee64b0", "Planning a project on paper"),
    ],
    gallery: [
      g("1636247499734-893da2bcfc1c", "Brand identity", "Series of designed brochures"),
      g("1663153203139-40c3caf54a79", "Mobile app", "Mobile application interface"),
      g("1666875753105-c63a6f3bdc86", "Dashboard UI", "Dashboard user interface"),
      g("1632062549850-44a0a6eede16", "Print design", "Hand holding an open designed book"),
      g("1558655146-d09347e92766", "Design system", "Monitor showing a design system"),
      g("1621111848501-8d3634f82336", "The studio", "iMac on a wooden desk"),
    ],
  },
  "smilecraft-dental": {
    hero: p("1629909613654-28e377c37b09", "Modern dental office with chair and equipment"),
    about: p("1777331903190-341a3dd0441b", "Dentist talking to a patient in a modern dental office"),
    services: [
      p("1606811971618-4486d14f3f99", "Dental examination with mirror and tool"),
      p("1771442873038-dda05b6ca447", "Gloved hand holding dental tools"),
      p("1593022356769-11f762e25ed9", "Dental model with teeth"),
      p("1677026010083-78ec7f1b84ed", "Close-up of a bright white smile"),
    ],
    gallery: [
      g("1598256989800-fe5f95da9787", "Treatment room", "Dental chair in a bright clinic"),
      g("1762625570087-6d98fca29531", "Waiting lounge", "Modern waiting room"),
      g("1777331903190-341a3dd0441b", "Consultations", "Dentist explaining treatment"),
      g("1588776814546-daab30f310ce", "Expert care", "Dentists performing a procedure"),
      g("1771442873038-dda05b6ca447", "Sterile tools", "Dental examination tools"),
      g("1489278353717-f64c6ee8a4d2", "Happy smiles", "Woman smiling"),
    ],
  },
  "freshbasket-grocers": {
    hero: p("1764955307141-056b240923a1", "Small grocery store filled with fresh produce"),
    about: p("1591586116988-62fe65164f8d", "Fresh vegetables on a market stall"),
    services: [
      p("1488459716781-31db52582fe9", "Assorted fresh fruits at a market"),
      p("1578916171728-46686eac8d58", "Grocery aisle with cereal and milk"),
      p("1604719312566-8912e9227c6a", "Grocery store aisle with stocked shelves"),
      p("1542838132-92c53300491e", "Fresh vegetables ready for delivery"),
    ],
    gallery: [
      g("1566385101042-1a0aa0c1268c", "Fresh produce", "Variety of vegetables"),
      g("1765850909380-2bdfc1c33422", "Staples aisle", "Shelves stocked with groceries"),
      g("1760776140488-32fcfab4066a", "Beverages & dairy", "Shelves with beverages and food"),
      g("1485637701894-09ad422f6de6", "Farm-fresh tomatoes", "Tomatoes in baskets"),
      g("1604200657090-ae45994b2451", "Fruit stand", "Street fruit stand"),
      g("1612305424474-403a79cc4383", "Seasonal fruits", "Bananas on a wooden crate"),
    ],
  },
  "launchly-saas": {
    hero: p("1551288049-bebda4e38f71", "Performance analytics graphs on a laptop screen"),
    about: p("1559136555-9303baea8ebd", "Two colleagues working together at a computer"),
    services: [
      p("1783115259399-3a5a3e0e4592", "Hands typing on a laptop showing a spreadsheet"),
      p("1551650975-87deedd944c3", "Smartphone showing a dashboard"),
      p("1784729553968-07da5d7b7c99", "Laptop displaying data analytics charts"),
      p("1541746972996-4e0b0f43e02a", "Team having a meeting"),
    ],
    gallery: [
      g("1460925895917-afdab827c52f", "Dashboard", "Laptop on a glass table showing a dashboard"),
      g("1781246435700-afec19012b45", "Analytics", "Laptop with charts by a sunny window"),
      g("1763038311036-6d18805537e5", "Reports", "Woman working with charts and graphs"),
      g("1551650975-87deedd944c3", "Mobile app", "Phone showing a dashboard"),
      g("1758876022295-00ec1f0e39f4", "Team planning", "People planning with sticky notes"),
      g("1606857521015-7f9fcf423740", "Our office", "People working at computers"),
    ],
  },
};

/** Images for the Services page, keyed by service id. */
export const servicePhotos: Record<string, Photo> = {
  "website-development": p("1498050108023-c5249f4df085", "MacBook showing code on a busy desk"),
  "landing-pages": p("1781606989061-420b8dda8a17", "Tablet displaying a website"),
  "business-websites": p("1499951360447-b19be8fe80f5", "MacBook Pro beside an iMac"),
  "portfolio-websites": p("1558655146-d09347e92766", "Monitor showing a design system"),
  "website-redesign": p("1777503810337-e78757a41278", "Tablet displaying creative design software"),
  "website-maintenance": p("1504868584819-f8e8b4b6d7e3", "Laptop showing website analytics"),
  "custom-development": p("1587691592099-24045742c181", "Developer pointing at code on a screen"),
};

export const aboutPhoto: Photo = p(
  "1487338875411-8880f74114a2",
  "A clean workspace with two monitors on a desk",
);
