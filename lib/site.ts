/**
 * Constantes du site. SITE_URL est l'unique endroit à modifier quand le
 * domaine définitif est branché : canonical, sitemap, robots et JSON-LD en dépendent.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dotnet.ftnsolutions.fr").replace(/\/$/, "");

export const PERSON_NAME = "Yassin Ajaoun";
export const PHONE_DISPLAY = "06 37 19 31 48";
export const PHONE_HREF = "tel:+33637193148";
export const EMAIL = "contact@ftnsolutions.fr";

/** Lien mailto pré-rempli : le prospect n'a qu'à compléter le contexte. */
export const MAILTO_MISSION = `mailto:${EMAIL}?subject=${encodeURIComponent("Mission .NET / C#")}&body=${encodeURIComponent(
  "Bonjour Yassin,\n\nContexte du projet :\nStack (.NET Framework / .NET 8 / .NET 10...) :\nRégie ou forfait :\nDate de démarrage souhaitée :\nSur site, remote ou hybride :\n\n",
)}`;

export const PERSON_ID = `${SITE_URL}/#yassin-ajaoun`;
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON_NAME,
  jobTitle: "Développeur .NET / C# freelance",
  url: SITE_URL,
  telephone: "+33637193148",
  email: EMAIL,
  knowsAbout: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Monétique", "Systèmes de paiement"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wolfisheim",
    postalCode: "67202",
    addressRegion: "Grand Est",
    addressCountry: "FR",
  },
  worksFor: { "@id": BUSINESS_ID },
  sameAs: ["https://github.com/ajaounyassin", "https://linkedin.com/in/yassin-ajaoun", "https://ftnsolutions.fr"],
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: "FTNSolutions",
  description: "Développement .NET / C# en freelance : régie, forfait, migration et renfort d'équipe. Strasbourg et remote.",
  url: SITE_URL,
  telephone: "+33637193148",
  email: EMAIL,
  address: personSchema.address,
  founder: { "@id": PERSON_ID },
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "AdministrativeArea", name: "Alsace" },
    { "@type": "Country", name: "France" },
  ],
  priceRange: "€€€",
};
