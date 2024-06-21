import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

// This is a CMS file. What we call a content management system.
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: 1,
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    images: [
      {url1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bb5e235a-9096-44cd-af79-f8f09da6683c/air-jordan-1-retro-high-og-latte-shoes-fTHb42.png"},
      {url2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1156119-7b9f-4d44-a307-417bea74b0ff/air-jordan-1-low-se-craft-shoes-8SsDw6.png"},
      {url4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d35c686b-f9e6-49cb-9381-9bcc79388e72/air-jordan-i-high-g-golf-shoes-qKzTBg.png"},
      {url3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e6648ed-4722-4085-8fcb-882cc674454f/air-jordan-i-high-g-golf-shoes-qKzTBg.png"},
    ],
  },
  {
    id: 2,
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    images: [
      {url1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/211d4d31-22dc-4792-aafd-70a6d32a4fdf/air-jordan-i-high-g-golf-shoes-qKzTBg.png"},
      {url2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/913bcc8e-541d-4f42-9f34-eaacf1dfbb1b/air-jordan-i-high-g-golf-shoes-qKzTBg.png"},
      {url4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/90d704ea-7732-4a95-a1ee-de579353e339/air-jordan-1-low-shoes-zTWr01.png"},
      {url3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/525eacce-5bfe-48b5-b6de-4ce71c6ba657/air-jordan-1-low-shoes-zTWr01.png"},
    ],
  },
  {
    id: 3,
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    images: [
      {
        url1: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/622aaff1-d6c9-4238-9c21-d01c885eb47a/air-jordan-1-mid-se-shoes-qG5ltp.png",
      },
      {
        url2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ac668959-a9ca-4711-b40c-3997706a7db2/air-jordan-1-mid-se-older-shoes-ZMGf1Z.png",
      },
      {
        url4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c0c33429-7a81-4342-8255-fe8127379a71/tatum-2-younger-shoes-qC9JTx.png",
      },
      {
        url3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d919d83-d1f7-4a02-ac88-6dd8fef7cba6/pegasus-41-older-road-running-shoes-z1216h.png",
      },
    ],
  },
  {
    id: 4,
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    images: [
      {url1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3353afa7-2855-472b-bcd4-1cec1b0f33a0/revolution-7-older-running-shoes-RTdvsl.png"},
      {url2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d59cfbce-e99c-4130-9086-234a3fa45418/revolution-7-older-running-shoes-RTdvsl.png"},
      {url4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e887cbee-14a7-4504-801a-45f4aeae4201/revolution-7-older-running-shoes-RTdvsl.png"},
      {url3: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c4afccf2-6c93-4b7d-b1ed-387420a076af/revolution-7-older-running-shoes-RTdvsl.png"},
    ],
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
