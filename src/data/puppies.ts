export interface Puppy {
  slug: string;
  name: string;
  breed: string;
  sex: "boy" | "girl" | "boy & girl";
  age: string;
  image: string;
  objectPosition: string;
  hasVideo: boolean;
  status: "available" | "gone-home";
  doorColor: string;
  description: string;
}

const IMG = "https://puppy.instabizweb.com";

export const puppies: Puppy[] = [
  {
    slug: "maltipoo-max-male",
    name: "Max",
    breed: "Maltipoo",
    sex: "boy",
    age: "3 months",
    image: `${IMG}/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp`,
    objectPosition: "53.8% 44.3%",
    hasVideo: true,
    status: "available",
    doorColor: "#a24a1a",
    description:
      "Max is a playful Maltipoo puppy with a fluffy golden coat. He loves belly rubs and playing fetch.",
  },
  {
    slug: "korean-teacup-maltipoo-female",
    name: "Korean Teacup Maltipoo",
    breed: "Maltipoo",
    sex: "girl",
    age: "2 months",
    image: `${IMG}/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg`,
    objectPosition: "52.5% 42.6%",
    hasVideo: true,
    status: "available",
    doorColor: "#5a3a28",
    description:
      "A rare Korean teacup Maltipoo with an adorable teddy bear face. Imported from a certified Korean breeder.",
  },
  {
    slug: "korean-teacup-poodle-female",
    name: "Korean Teacup Poodle",
    breed: "Poodle",
    sex: "girl",
    age: "2 months",
    image: `${IMG}/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg`,
    objectPosition: "54.5% 45.7%",
    hasVideo: true,
    status: "available",
    doorColor: "#d4893f",
    description:
      "An exquisite Korean teacup poodle with a curly apricot coat. Gentle and affectionate temperament.",
  },
  {
    slug: "maltipoo-cavapoo-male",
    name: "Maltipoo & Cavapoo",
    breed: "Maltipoo & Cavapoo",
    sex: "boy",
    age: "3 months Maltipoo & 2 months Cavapoo",
    image: `${IMG}/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg`,
    objectPosition: "44.7% 29.5%",
    hasVideo: true,
    status: "available",
    doorColor: "#b8644a",
    description:
      "A charming duo — a Maltipoo and Cavapoo pair looking for their forever home together or separately.",
  },
  {
    slug: "toy-poodle-male-female",
    name: "Toy Poodle",
    breed: "Toy Poodle",
    sex: "boy & girl",
    age: "2 months",
    image: `${IMG}/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg`,
    objectPosition: "65.4% 44.7%",
    hasVideo: false,
    status: "available",
    doorColor: "#a24a1a",
    description:
      "Adorable toy poodle puppies available in both boy and girl. Hypoallergenic and incredibly smart.",
  },
  {
    slug: "maltipoo-female-2",
    name: "Maltipoo",
    breed: "Maltipoo",
    sex: "girl",
    age: "3 months",
    image: `${IMG}/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg`,
    objectPosition: "64.6% 42.3%",
    hasVideo: true,
    status: "available",
    doorColor: "#5a3a28",
    description:
      "A sweet Maltipoo girl with a dark chocolate coat. She is gentle, loving, and great with children.",
  },
  {
    slug: "pomeranian-female",
    name: "Pomeranian",
    breed: "Pomeranian",
    sex: "girl",
    age: "3 months",
    image: `${IMG}/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg`,
    objectPosition: "40.3% 44.3%",
    hasVideo: false,
    status: "available",
    doorColor: "#d4893f",
    description:
      "A gorgeous Pomeranian girl with a luxurious fluffy coat. Full of energy and personality.",
  },
  {
    slug: "copper-male",
    name: "Copper",
    breed: "Cavapoo",
    sex: "boy",
    age: "2 months",
    image: `${IMG}/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "available",
    doorColor: "#b8644a",
    description:
      "Copper is a handsome Cavapoo boy with a warm copper-colored coat. Friendly and sociable.",
  },
  {
    slug: "shitzu-female",
    name: "Shih Tzu",
    breed: "Shih Tzu",
    sex: "girl",
    age: "2 months",
    image: `${IMG}/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "available",
    doorColor: "#a24a1a",
    description:
      "A beautiful Shih Tzu girl with silky fur. Known for being affectionate and great companions.",
  },
  {
    slug: "shitzu-male",
    name: "Shih Tzu",
    breed: "Shih Tzu",
    sex: "boy",
    age: "2 months",
    image: `${IMG}/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "available",
    doorColor: "#5a3a28",
    description:
      "A charming Shih Tzu boy, playful and loyal. Perfect for families looking for a small companion.",
  },
  {
    slug: "maltipoo-female-1",
    name: "Maltipoo",
    breed: "Maltipoo",
    sex: "girl",
    age: "2.5 months",
    image: `${IMG}/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "available",
    doorColor: "#d4893f",
    description:
      "A darling Maltipoo girl at 2.5 months old. She has the perfect teddy bear look.",
  },
  {
    slug: "maltipoo-female",
    name: "Maltipoo",
    breed: "Maltipoo",
    sex: "girl",
    age: "2 months",
    image: `${IMG}/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "available",
    doorColor: "#b8644a",
    description:
      "A fluffy Maltipoo girl with a cream coat. Gentle, playful, and looking for her forever family.",
  },
  {
    slug: "korean-teacup-pomeranian-1",
    name: "Korean Teacup Pomeranian",
    breed: "Pomeranian",
    sex: "girl",
    age: "2 months",
    image: `${IMG}/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "available",
    doorColor: "#a24a1a",
    description:
      "A tiny Korean teacup Pomeranian girl. Imported from a top Korean breeder with full documentation.",
  },
  {
    slug: "korean-teacup-pomeranian",
    name: "Korean Teacup Pomeranian",
    breed: "Pomeranian",
    sex: "girl",
    age: "2 months",
    image: `${IMG}/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "available",
    doorColor: "#5a3a28",
    description:
      "An adorable Korean teacup Pomeranian with a fox-like face. Premium lineage and health certified.",
  },
  {
    slug: "korean-teacup-pomeranian-male",
    name: "Korean Teacup Pomeranian",
    breed: "Pomeranian",
    sex: "boy",
    age: "2 months",
    image: `${IMG}/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "available",
    doorColor: "#d4893f",
    description:
      "A handsome Korean teacup Pomeranian boy. Rare find with excellent temperament.",
  },
  // Gone home puppies
  {
    slug: "pomeranian-ace-boy",
    name: "Ace",
    breed: "Pomeranian",
    sex: "boy",
    age: "3 months",
    image: `${IMG}/media/mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "gone-home",
    doorColor: "#a24a1a",
    description: "Ace found his forever home!",
  },
  {
    slug: "poodle-leo-male",
    name: "Leo",
    breed: "Poodle",
    sex: "boy",
    age: "3 months",
    image: `${IMG}/media/QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "gone-home",
    doorColor: "#5a3a28",
    description: "Leo found his forever home!",
  },
  {
    slug: "maltipoo-mia-girl",
    name: "Mia",
    breed: "Maltipoo",
    sex: "girl",
    age: "3 months",
    image: `${IMG}/media/4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "gone-home",
    doorColor: "#d4893f",
    description: "Mia found her forever home!",
  },
  {
    slug: "maltipoo-sadie-girl",
    name: "Sadie",
    breed: "Maltipoo",
    sex: "girl",
    age: "3 months",
    image: `${IMG}/media/159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "gone-home",
    doorColor: "#b8644a",
    description: "Sadie found her forever home!",
  },
  {
    slug: "blue-marle-pomeranian",
    name: "Pomeranian (Blue Merle)",
    breed: "Pomeranian",
    sex: "boy",
    age: "3 months",
    image: `${IMG}/media/bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif`,
    objectPosition: "50% 40%",
    hasVideo: false,
    status: "gone-home",
    doorColor: "#a24a1a",
    description: "This Blue Merle Pomeranian found his forever home!",
  },
];

export function getPuppy(slug: string): Puppy | undefined {
  return puppies.find((p) => p.slug === slug);
}

export function getAvailablePuppies(): Puppy[] {
  return puppies.filter((p) => p.status === "available");
}

export function getGoneHomePuppies(): Puppy[] {
  return puppies.filter((p) => p.status === "gone-home");
}
