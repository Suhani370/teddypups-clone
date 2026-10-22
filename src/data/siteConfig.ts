export const siteConfig = {
  name: "TeddyPups U.A.E.",
  tagline: "Premium teacup puppies in Dubai",
  description:
    "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.",
  url: "https://puppy.instabizweb.com",
  phone: "+971 54 167 6733",
  email: "teddypupsadmin@gmail.com",
  address: "Downtown Dubai, United Arab Emirates",
  whatsappNumber: "971541676733",
  whatsappLink: (message: string) =>
    `https://wa.me/971541676733?text=${encodeURIComponent(message)}`,
  defaultWhatsappMessage:
    "Hi TeddyPups! I'd love to know more about your puppies.",
  showroomWhatsappMessage:
    "Hi TeddyPups! I'd love to visit the showroom.",
  mapsLink: "https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7",
  social: {
    instagram: "https://www.instagram.com/teddypups.worldwide/",
    tiktok: "https://www.tiktok.com/@teddypupsuae",
    facebook:
      "https://www.facebook.com/profile.php?id=61567496944539",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/puppies", label: "Puppies" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
];
