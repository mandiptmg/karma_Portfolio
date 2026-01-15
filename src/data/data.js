import auto from "../assets/project/auto.jpg";
import baje from "../assets/project/baje.jpg";
import temple from "../assets/project/temple.jpg";
import aboveCloud from "../assets/project/above the cloud.jpg";
import babyDog from "../assets/project/baby_with_dog.jpg";
import childrenCycle from "../assets/project/childreen Ridee cycle.jpg";
import nightDog from "../assets/project/night view with dog.jpg";
import nightMode from "../assets/project/nightMode.jpg";
import trekking from "../assets/project/treking.jpg";

// video
import coffee from "../assets/video/coffee.mp4";
import peace from "../assets/video/peace.mp4";
import trekVideo from "../assets/video/trek.mp4";
import Couple from "../assets/video/couple_music_video.mp4";



import video1 from "../assets/realstatevideo/video1.MP4";
import video2 from "../assets/realstatevideo/video2.MP4";
import video3 from "../assets/realstatevideo/video3.MP4";
import video4 from "../assets/realstatevideo/video4.MP4";
import video5 from "../assets/realstatevideo/video5.MP4";
import video6 from "../assets/realstatevideo/video8.MP4";
import video7 from "../assets/realstatevideo/video7.MP4";
import video8 from "../assets/realstatevideo/video8.MP4";
import video9 from "../assets/realstatevideo/video9.MP4";
import video10 from "../assets/realstatevideo/video10.mp4";
import video11 from "../assets/realstatevideo/video11.mp4";
import video12 from "../assets/realstatevideo/video12.mp4";

// testimonial image
// testimonial images (Revo Real Estate Agents)
import abhinav from "../assets/Agent/abhinav.jpg";
import arpit from "../assets/Agent/arpit.jpg";
import sajid from "../assets/Agent/sajid.jpeg";
import shafia from "../assets/Agent/shafia.jpeg";
import manjit from "../assets/Agent/manjit.jpeg";
import tarun from "../assets/Agent/tarun.jpeg";

const data = [
  // Real Estate Videos
  {
    title: "Modern Interior Walkthrough",
    media: video11,
    mediaType: "real-estate-video",
    description: "A cinematic walkthrough showcasing modern interiors with clean design and elegant details.",
  },
  {
    title: "Luxury Living Space Tour",
    media: video10,
    mediaType: "real-estate-video",
    description: "An immersive tour highlighting spacious living areas and contemporary layouts.",
  },
  {
    title: "Premium Apartment Showcase",
    media: video12,
    mediaType: "real-estate-video",
    description: "A refined walkthrough emphasizing luxury finishes and architectural balance.",
  },
  {
    title: "Contemporary Home Walkthrough",
    media: video2,
    mediaType: "real-estate-video",
    description: "A smooth walkthrough presenting modern interiors with natural lighting.",
  },
  {
    title: "Spacious Living Area Tour",
    media: video1,
    mediaType: "real-estate-video",
    description: "A detailed look at open living spaces designed for comfort and functionality.",
  },
  {
    title: "Luxury Apartment Interior",
    media: video6,
    mediaType: "real-estate-video",
    description: "An elegant showcase of premium interiors crafted for modern urban living.",
  },
  {
    title: "Premium Finish & Lighting Tour",
    media: video3,
    mediaType: "real-estate-video",
    description: "Highlighting high-end finishes, ambient lighting, and refined textures.",
  },
  {
    title: "Open-Plan Design Walkthrough",
    media: video4,
    mediaType: "real-estate-video",
    description: "A fluid walkthrough demonstrating seamless open-plan design and flow.",
  },
  {
    title: "Kitchen & Dining Experience",
    media: video5,
    mediaType: "real-estate-video",
    description: "A guided tour of stylish kitchen and dining spaces built for everyday living.",
  },
  {
    title: "Balcony & Exterior Views",
    media: video7,
    mediaType: "real-estate-video",
    description: "A relaxing walkthrough showcasing balconies and stunning exterior views.",
  },
  {
    title: "Urban Apartment Overview",
    media: video8,
    mediaType: "real-estate-video",
    description: "A complete overview of an urban apartment with modern lifestyle elements.",
  },
  {
    title: "Luxury Property Walkthrough",
    media: video9,
    mediaType: "real-estate-video",
    description: "A comprehensive cinematic tour of a luxury property from entry to exit.",
  },

  // Photography
  {
    title: "Urban Street Stories",
    media: auto,
    mediaType: "image",
    description: "Candid moments capturing everyday life and emotions in urban streets.",
  },
  {
    title: "Portraits of Experience",
    media: baje,
    mediaType: "image",
    description: "Intimate portraits reflecting wisdom, character, and lived experiences.",
  },
  {
    title: "Sacred Temple Landscape",
    media: temple,
    mediaType: "image",
    description: "Ancient temples framed by nature, expressing timeless serenity.",
  },
  {
    title: "Above the Clouds",
    media: aboveCloud,
    mediaType: "image",
    description: "Dramatic mountain views rising above layers of clouds.",
  },
  {
    title: "Pure Innocence",
    media: babyDog,
    mediaType: "image",
    description: "A tender moment capturing the bond between a baby and a playful pup.",
  },
  {
    title: "Joyful Ride",
    media: childrenCycle,
    mediaType: "image",
    description: "Children riding bicycles, expressing freedom and pure happiness.",
  },
  {
    title: "Calm Under City Lights",
    media: nightDog,
    mediaType: "image",
    description: "A peaceful dog gazing beneath the glow of city night lights.",
  },
  {
    title: "City Nights",
    media: nightMode,
    mediaType: "image",
    description: "Urban cityscapes captured in dramatic night mode tones.",
  },
  {
    title: "Journey to the Heights",
    media: trekking,
    mediaType: "image",
    description: "Adventure-filled moments from a scenic trekking trail.",
  },

  // Cinematic Videos
  {
    title: "Coffee Ritual",
    media: coffee,
    mediaType: "video",
    description: "A cinematic short capturing the art and calm of coffee preparation.",
  },
  {
    title: "Moments of Peace",
    media: peace,
    mediaType: "video",
    description: "Visual storytelling focused on calm motion and peaceful energy.",
  },
  {
    title: "Trekking Through Nepal",
    media: trekVideo,
    mediaType: "video",
    description: "A cinematic journey through Nepal’s breathtaking trekking routes.",
  },
  {
    title: "Love in Motion",
    media: Couple,
    mediaType: "video",
    description: "A romantic music video capturing emotion, movement, and connection.",
  },
];


export default data;

const testimonials = [
  {
    name: "Tarun Motiani",
    role: "Senior Property Consultant @ Revo Real Estate, Dubai",
    image: tarun,
    stars: 5,
    testimonial:
      "The cinematic property videos transformed how I present listings to my clients. The quality, storytelling, and attention to detail helped me close deals faster.",
  },
  {
    name: "Manjit Roy",
    role: "Real Estate Advisor @ Revo Real Estate, Dubai",
    image: manjit,
    stars: 5,
    testimonial:
      "Extremely professional and reliable. The walkthrough videos and reels boosted my online presence and brought in serious buyer inquiries.",
  },
  {
    name: "Kumar Abhinav",
    role: "Property Consultant @ Revo Real Estate, Dubai",
    image: abhinav,
    stars: 5,
    testimonial:
      "High-quality edits with perfect pacing and music selection. My property listings now look premium and stand out in Dubai’s competitive market.",
  },
  {
    name: "Sajid Khan",
    role: "Luxury Real Estate Agent @ Revo Real Estate, Dubai",
    image: sajid,
    stars: 4,
    testimonial:
      "From interior shots to exterior drone views, every video feels polished and professional. Clients are impressed even before site visits.",
  },
  {
    name: "Shafia",
    role: "Client Relationship Manager @ Revo Real Estate, Dubai",
    image: shafia,
    stars: 5,
    testimonial:
      "Creative, fast, and always on brand. The social media reels significantly increased engagement and client trust.",
  },
  {
    name: "Arpit Singh",
    role: "Property Consultant @ Revo Real Estate, Dubai",
    image: arpit,
    stars: 5,
    testimonial:
      "Excellent understanding of real estate marketing. The visuals help convey lifestyle, not just properties.",
  },
];

export { data, testimonials };
