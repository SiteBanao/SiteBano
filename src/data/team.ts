/**
 * SiteBanao founding team (six co-founders).
 * Photos live in /public/team. Add each founder's name (and a specific role,
 * e.g. "Design Lead") when you're ready; until then cards show "Co-founder".
 * Order follows the team group photo: back row left → right, then front row.
 */

export interface Founder {
  id: string;
  /** Leave null until the founder's real name is confirmed. */
  name: string | null;
  role: string;
  photo: string;
}

export const founders: Founder[] = [
  { id: "founder-1", name: null, role: "Co-founder", photo: "/team/founder-1.webp" },
  { id: "founder-2", name: null, role: "Co-founder", photo: "/team/founder-2.webp" },
  { id: "founder-3", name: null, role: "Co-founder", photo: "/team/founder-3.webp" },
  { id: "founder-4", name: null, role: "Co-founder", photo: "/team/founder-4.webp" },
  { id: "founder-5", name: null, role: "Co-founder", photo: "/team/founder-5.webp" },
  { id: "founder-6", name: null, role: "Co-founder", photo: "/team/founder-6.webp" },
];

export const teamPhoto = {
  src: "/team/founders-group.webp",
  alt: "The six co-founders of SiteBanao together in navy blazers",
  width: 1536,
  height: 1024,
};

export const founderAlt = (f: Founder, index: number) =>
  f.name ? `${f.name}, ${f.role} at SiteBanao` : `SiteBanao co-founder ${index + 1}`;
