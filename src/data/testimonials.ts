export interface Testimonial {
  id: number;
  quote: string;
  customer: string;
  location: string;
  breed: string;
  image: string;
}

const IMG = "https://puppy.instabizweb.com";

export const featuredTestimonial: Testimonial = {
  id: 0,
  quote:
    "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.",
  customer: "Sarah M.",
  location: "Dubai, UAE",
  breed: "Maltipoo",
  image: `${IMG}/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp`,
};

export interface HappyMoment {
  id: number;
  caption: string;
  image: string;
}

export const happyMoments: HappyMoment[] = [
  {
    id: 1,
    caption: "Lulu 🧸 with her new mummy ❤️",
    image: `${IMG}/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp`,
  },
  {
    id: 2,
    caption: "Adorable Maltipoo baby 🧸❤️",
    image: `${IMG}/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg`,
  },
  {
    id: 3,
    caption: "My new teddy puppy 🥰🧸",
    image: `${IMG}/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg`,
  },
  {
    id: 4,
    caption: "Our new puppies 🧸🥰🤗",
    image: `${IMG}/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg`,
  },
  {
    id: 5,
    caption: "New puppy 🧸😍",
    image: `${IMG}/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg`,
  },
  {
    id: 6,
    caption: "Gang of 3 😍🧸",
    image: `${IMG}/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg`,
  },
  {
    id: 7,
    caption: "So happy 😍😍",
    image: `${IMG}/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg`,
  },
  {
    id: 8,
    caption: "New pup 🤗💫",
    image: `${IMG}/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg`,
  },
];
