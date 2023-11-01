// BENEFIT ITEMS
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { BsCreditCardFill } from "react-icons/bs";

// AD TILE
import adTile1 from "../assets/adtiles/ad-tile1.jpg";
import adTile2 from "../assets/adtiles/ad-tile2.jpg";

// DEAL49ITEMS
import headphones from "../assets/heroPage/wireless-headphones.png";
import trimmer from "../assets/heroPage/trimmer.png";
import joystick from "../assets/heroPage/joystick.png";

// TOP BRANDS
import canon_logo from "../assets/topBrands/canon_logo.svg";
import panasonic_logo from "../assets/topBrands/panasonic-logo.svg";
import philips_logo from "../assets/topBrands/philips-logo.svg";
import samsung_logo from "../assets/topBrands/samsung-logo.svg";
import sony_logo from "../assets/topBrands/sony-logo.svg";
import whirlpool_logo from "../assets/topBrands/whirlpool-logo.svg";
import huawei_logo from "../assets/topBrands/huawei-logo.svg";
import xiaomi_logo from "../assets/topBrands/xiaomi-logo.svg";

// CUSTOMER REVIEW
import user1 from "../assets/users/user1.jpg";
import user2 from "../assets/users/user2.jpg";
import user3 from "../assets/users/user3.jpg";
import user4 from "../assets/users/user4.jpg";
import user5 from "../assets/users/user5.jpg";
import user6 from "../assets/users/user6.jpg";

import { TbHomeHeart } from "react-icons/tb";

export const benefitItems = [
  {
    id: "bft_1",
    Icon: LiaShippingFastSolid,
    title: "Free shipping",
    subTitle: "When you spend $80 or more",
  },
  {
    id: "bft_2",
    Icon: RiCustomerService2Fill,
    title: "We are available 24/7",
    subTitle: "Need help? contact us anytime",
  },
  {
    id: "bft_3",
    Icon: GiReturnArrow,
    title: "Satisfied or return",
    subTitle: "Easy 30-day return policy",
  },
  {
    id: "bft_4",
    Icon: BsCreditCardFill,
    title: "100% secure payments",
    subTitle: "Visa, Mastercard, Stripe, PayPal",
  },
];

export const adTiles = [
  {
    id: "adId_1",
    adTileURL: adTile1,
    adURL: "/products/gadgets",
  },
  {
    id: "adId_2",
    adTileURL: adTile2,
    adURL: "/todays-deal",
  },
];

export const deal49Items = [
  {
    id: "dealId_1",
    bgColor: "#F1F2F6",
    title: "Wireless headphones",
    imgURL: headphones,
  },
  {
    id: "dealId_2",
    bgColor: "#E8EBED",
    title: "Grooming",
    imgURL: trimmer,
  },
  {
    id: "dealId_3",
    bgColor: "#F8EDD1",
    title: "Video games",
    imgURL: joystick,
  },
];

// PRODUCT LAYOUT DATA
export const categoryItems = [
  {
    id: "ctgyId_0",
    link_to: "/products/all-products",
    title: "All Products",
  },
  {
    id: "ctgyId_1",
    link_to: "/products/air-conditioner",
    title: "Air conditioner",
  },
  {
    id: "ctgyId_2",
    link_to: "/products/audio-video",
    title: "Audio & video",
  },
  {
    id: "ctgyId_3",
    link_to: "/products/gadgets",
    title: "Gadgets",
  },
  {
    id: "ctgyId_4",
    link_to: "/products/home-appliances",
    title: "Home appliances",
  },
  {
    id: "ctgyId_5",
    link_to: "/products/kitchen-appliances",
    title: "kitchen appliances",
  },
  {
    id: "ctgyId_6",
    link_to: "/products/pc-laptop",
    title: "PCs & laptop",
  },
  {
    id: "ctgyId_7",
    link_to: "/products/refrigerator",
    title: "Refrigerator",
  },
  {
    id: "ctgyId_8",
    link_to: "/products/smart-home",
    title: "Smart home",
  },
];

export const topBrands = [
  {
    id: "tb_1",
    logo: canon_logo,
  },
  {
    id: "tb_2",
    logo: panasonic_logo,
  },
  {
    id: "tb_3",
    logo: philips_logo,
  },
  {
    id: "tb_4",
    logo: samsung_logo,
  },
  {
    id: "tb_5",
    logo: sony_logo,
  },
  {
    id: "tb_6",
    logo: whirlpool_logo,
  },
];

export const customerReview = [
  {
    crId: "crId1",
    crName: "Rafael Stokes",
    crReview:
      "The store offers an extensive range of electronic products, from smartphones and laptops to smart home gadgets. It's a one-stop shop for all your tech needs.",
    crPhoto: user1,
  },
  {
    crId: "crId2",
    crName: "Chelsea Turner",
    crReview:
      "I found the prices here to be quite competitive, and they often had great deals and discounts. I felt like I got good value for my money.",
    crPhoto: user2,
  },
  {
    crId: "crId3",
    crName: "Jacqueline Mueller",
    crReview:
      "Navigating the website was a breeze. It's well-organized, making it easy to find what I needed. The search and filter options were helpful.",
    crPhoto: user3,
  },
  {
    crId: "crId4",
    crName: "Olive Borer",
    crReview:
      "I had a question about a specific product, and their customer support was prompt and friendly. They went the extra mile to ensure I got the right item.",
    crPhoto: user4,
  },
  {
    crId: "crId5",
    crName: "Priscilla Jacobson",
    crReview:
      "My order arrived faster than expected, and it was well-packaged to prevent any damage during transit. I couldn't be happier with the entire shopping experience.",
    crPhoto: user5,
  },
  {
    crId: "crId6",
    crName: "Joseph Reinger",
    crReview:
      "The product descriptions were detailed, and I appreciated the specifications and customer reviews, which helped me make informed choices.",
    crPhoto: user6,
  },
];

export const menuBarItems = [
  {
    id: "ctgyId_-1",
    link_to: "/",
    Icon: TbHomeHeart,
    title: "Home",
  },
  {
    id: "ctgyId_0",
    link_to: "/products/all-products",
    title: "All Products",
  },
  {
    id: "ctgyId_1",
    link_to: "/products/air-conditioner",
    title: "Air conditioner",
  },
  {
    id: "ctgyId_2",
    link_to: "/products/audio-video",
    title: "Audio & video",
  },
  {
    id: "ctgyId_3",
    link_to: "/products/gadgets",
    title: "Gadgets",
  },
  {
    id: "ctgyId_4",
    link_to: "/products/home-appliances",
    title: "Home appliances",
  },
  {
    id: "ctgyId_5",
    link_to: "/products/kitchen-appliances",
    title: "kitchen appliances",
  },
  {
    id: "ctgyId_6",
    link_to: "/products/pc-laptop",
    title: "PCs & laptop",
  },
  {
    id: "ctgyId_7",
    link_to: "/products/refrigerator",
    title: "Refrigerator",
  },
  {
    id: "ctgyId_8",
    link_to: "/products/smart-home",
    title: "Smart home",
  },
  {
    id: "ctgyId_9",
    link_to: "/new-arrival",
    title: "New Arrival's",
  },
  {
    id: "ctgyId_10",
    link_to: "/todays-deal",
    title: "Today's deal",
  },
  {
    id: "ctgyId_11",
    link_to: "/gift-card",
    title: "Gift cards",
  },
];

export const supportItems = [
  {
    id: "sprtId_1",
    title: "Expert advice",
    subTitle: "123-456-7890",
  },
  {
    id: "sprtId_2",
    title: "Customer service",
    subTitle: "1-222-345-6789",
  },
  {
    id: "sprtId_3",
    title: "Have any questions?",
    subTitle: "Contact us",
  },
];
