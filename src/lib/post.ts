type postsType = {
  slug: string;
  title: string;
  content: string;
  category: string;
};

const CATEGORIES = [
  { name: "Humans", catslug: "humans" },
  { name: "Animals", catslug: "animals" },
  { name: "Tech Rants", catslug: "tech-rants" },
];

const POSTS: postsType[] = [
  {
    slug: "tailwind-headwind",
    title: "Tailwind CSS: More Like a Headwind!",
    content:
      "Tailwind CSS, oh how you've complicated my life! What's with the never-ending class names and the constant flipping between documentation? Utility-first? More like confusion-first!",
    category: "tech-rants",
  },
  {
    slug: "sass-mess",
    title: "SASS or SASSy Mess?",
    content:
      "SASS seemed like a dream with variables and mixins. Now, it's just layers upon layers of nested nightmares. I'm spending more time debugging than coding!",
    category: "tech-rants",
  },
  {
    slug: "responsive-headache",
    title: "Responsive Design: A Responsive Headache",
    content:
      "Responsive design? More like irresponsive! One minute, everything looks great, the next, it's a jumbled mess. And don't get me started on media queries!",
    category: "tech-rants",
  },
  {
    slug: "browser-torment",
    title: "Browser Compatibility: The Eternal Torment",
    content:
      "Browser compatibility is a cruel joke. You align everything perfectly in one browser, and it's a disaster in another. It's like playing whack-a-mole with CSS!",
    category: "tech-rants",
  },
  {
    slug: "stick-post",
    title: "Where did I bury my stick?",
    content:
      "this is a blog post from a dog. How did that happen. Dogs can&apos;t type",
    category: "animals",
  },
  {
    slug: "procrastination-masterclass",
    title: "The Art of Procrastination: A Masterclass",
    content:
      "Procrastination is not just a skill; it's an art form. Learn the secrets of putting things off until the last minute and still somehow managing to get by.",
    category: "humor",
  },
  {
    slug: "gardening-joy",
    title: "The Joy of Gardening",
    content:
      "In the midst of nature, finding joy in gardening is a therapeutic experience. From planting seeds to seeing blooms, the journey is as beautiful as the flowers themselves.",
    category: "gardening",
  },
  {
    slug: "coffee-productivity",
    title: "Coffee: The Elixir of Productivity... Or Not",
    content:
      "They say coffee fuels productivity, but what if it's just a conspiracy by caffeine-addicted aliens to control our minds? Join me in unraveling the mysteries of the coffee cup.",
    category: "humor",
  },
  {
    slug: "sock-conspiracy",
    title: "The Great Sock Conspiracy",
    content:
      "Why do socks disappear in the laundry? Is there a secret society of socks plotting their escape? In this investigative report, we delve into the enigma of the missing sock.",
    category: "humor",
  },
  {
    slug: "zoom-meeting-survival",
    title: "Surviving Zoom Meetings: A Guide to Mute Button Mishaps",
    content:
      "Navigating the treacherous terrain of Zoom meetings is not for the faint of heart. From accidental unmutes to video call wardrobe malfunctions, this guide covers it all.",
    category: "humor",
  },
  {
    slug: "mismatched-decor",
    title: "DIY Home Decor: Embracing the 'Mismatched' Aesthetic",
    content:
      "Who says everything has to match? Embrace the chaos of mismatched home decor and turn your living space into a masterpiece of eclectic confusion. Bonus points for asymmetry!",
    category: "humor",
  },
  {
    slug: "pencil-conspiracy",
    title: "The Great Pencil Conspiracy: Where Do They Disappear To?",
    content:
      "Pencils seem to have a life of their own, disappearing when you need them the most. Join me in exploring the mystical journey of pencils and their elusive nature.",
    category: "humor",
  },
  {
    slug: "cooking-art",
    title: "The Art of Cooking",
    content:
      "Cooking is not just a task; it's an art. From spices to techniques, every dish tells a story. Explore the world of flavors and embark on a culinary adventure.",
    category: "cooking",
  },
  {
    slug: "meditation-peace",
    title: "Finding Peace in Meditation",
    content:
      "Amid the chaos of daily life, meditation offers a sanctuary of peace. Discover the benefits of mindfulness and unlock a calmer, more centered version of yourself.",
    category: "wellness",
  },
];

// get all posts
// you can replace the content inside with a db call or something.
export function getPosts() {
  return POSTS;
}

// gets one of the posts by its slug
export function getPostsBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategory() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
