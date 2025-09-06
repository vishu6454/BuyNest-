const CamerasData = [
  {
    id: 1,
    name: "Canon EOS R5 Mirrorless Camera",
    brand: "Canon",
    category: "Camera",
    mainImage: "https://tse3.mm.bing.net/th/id/OIP.IF1DeI6tYx7qFsnSyQTgfAHaFv?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      " https://tse3.mm.bing.net/th/id/OIP.IF1DeI6tYx7qFsnSyQTgfAHaFv?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse3.mm.bing.net/th/id/OIP.IF1DeI6tYx7qFsnSyQTgfAHaFv?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse3.mm.bing.net/th/id/OIP.IF1DeI6tYx7qFsnSyQTgfAHaFv?rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 380000,
    discountedPrice: 360000,
    discountPercentage: 5,
    size: ["Body Only", "With Lens Kit", "With Battery Grip", "With 2 Lenses", "Full Kit"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens-kit", label: "With Lens Kit" },
      { value: "battery-grip", label: "With Battery Grip" },
      { value: "dual-lens", label: "With 2 Lenses" },
      { value: "full-kit", label: "Full Kit" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.7,
    reviewsCount: 1245,
    boughtInPastMonth: 150,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Canon Official",
    openBoxEligible: true,
    emiStartsAt: 14000,
    protectPromiseFee: 2999,
    offers: [
      { type: "Bank Offer", description: "Get ₹5000 off on HDFC Cards" },
      { type: "Exchange Offer", description: "Up to ₹20000 off on exchange" },
      { type: "No Cost EMI", description: "No Cost EMI Available for 12 months" }
    ]
  },

  {
    id: 2,
    name: "Nikon Z9 Mirrorless Camera",
    brand: "Nikon",
    category: "Camera",
    mainImage: " https://tse4.mm.bing.net/th/id/OIP.MYnWq2alf-Ofou_LlO0pLAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    thumbnailImages: [
      " https://tse4.mm.bing.net/th/id/OIP.MYnWq2alf-Ofou_LlO0pLAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.MYnWq2alf-Ofou_LlO0pLAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse4.mm.bing.net/th/id/OIP.MYnWq2alf-Ofou_LlO0pLAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 510000,
    discountedPrice: 499000,
    discountPercentage: 2,
    size: ["Body Only", "Pro Kit", "With Lens", "With Battery", "Full Set"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "pro-kit", label: "Pro Kit" },
      { value: "lens", label: "With Lens" },
      { value: "battery", label: "With Battery" },
      { value: "full-set", label: "Full Set" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.9,
    reviewsCount: 890,
    boughtInPastMonth: 80,
    newArrival: false,
    deliveryDate: "2 Days",
    deliveryCharge: "Free",
    seller: "Nikon Official",
    openBoxEligible: true,
    emiStartsAt: 20000,
    protectPromiseFee: 3499,
    offers: [
      { type: "Bank Offer", description: "10% off on Axis Bank Credit Card" },
      { type: "Exchange Offer", description: "Exchange your old DSLR for ₹15000 off" },
      { type: "No Cost EMI", description: "0% EMI up to 18 months" }
    ]
  },

  {
    id: 3,
    name: "Sony Alpha 7R V Full-Frame Camera",
    brand: "Sony",
    category: "Camera",
    mainImage: " https://i.pcmag.com/imagery/articles/02qxtVGsyR6RJI5nLgxiEuq-1.fit_lim.v1666985294.jpg",
    thumbnailImages: [
      " https://i.pcmag.com/imagery/articles/02qxtVGsyR6RJI5nLgxiEuq-1.fit_lim.v1666985294.jpg",
      "https://i.pcmag.com/imagery/articles/02qxtVGsyR6RJI5nLgxiEuq-1.fit_lim.v1666985294.jpg ",
      "https://i.pcmag.com/imagery/articles/02qxtVGsyR6RJI5nLgxiEuq-1.fit_lim.v1666985294.jpg "
    ],
    originalPrice: 340000,
    discountedPrice: 320000,
    discountPercentage: 6,
    size: ["Body Only", "With Kit Lens", "With Zoom Lens", "With Accessories", "Bundle"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "kit-lens", label: "With Kit Lens" },
      { value: "zoom-lens", label: "With Zoom Lens" },
      { value: "accessories", label: "With Accessories" },
      { value: "bundle", label: "Bundle" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.8,
    reviewsCount: 1340,
    boughtInPastMonth: 100,
    newArrival: true,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Sony India",
    openBoxEligible: false,
    emiStartsAt: 12500,
    protectPromiseFee: 2599,
    offers: [
      { type: "Bank Offer", description: "₹7000 Cashback on ICICI Cards" },
      { type: "Exchange Offer", description: "₹10000 off on Exchange" },
      { type: "No Cost EMI", description: "0% EMI on 12 months" }
    ]
  },

  {
    id: 4,
    name: "Fujifilm X-T5 Mirrorless Camera",
    brand: "Fujifilm",
    category: "Camera",
    mainImage: "https://m.media-amazon.com/images/I/81Ys8FZ-JjL._AC_SL1500_.jpg ",
    thumbnailImages: [
      " https://m.media-amazon.com/images/I/81Ys8FZ-JjL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Ys8FZ-JjL._AC_SL1500_.jpg ",
      " https://m.media-amazon.com/images/I/81Ys8FZ-JjL._AC_SL1500_.jpg"
    ],
    originalPrice: 185000,
    discountedPrice: 175000,
    discountPercentage: 5,
    size: ["Body Only", "With Lens", "With Dual Battery", "With Flash", "Combo Kit"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens", label: "With Lens" },
      { value: "dual-battery", label: "With Dual Battery" },
      { value: "flash", label: "With Flash" },
      { value: "combo", label: "Combo Kit" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.6,
    reviewsCount: 750,
    boughtInPastMonth: 70,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Fujifilm India",
    openBoxEligible: true,
    emiStartsAt: 7000,
    protectPromiseFee: 1999,
    offers: [
      { type: "Bank Offer", description: "5% Cashback on SBI Cards" },
      { type: "Exchange Offer", description: "₹5000 off on Exchange" },
      { type: "No Cost EMI", description: "0% EMI up to 12 months" }
    ]
  },

  {
    id: 5,
    name: "Panasonic Lumix GH6 Mirrorless Camera",
    brand: "Panasonic",
    category: "Camera",
    mainImage: " https://www.panasonic.com/content/dam/pim/id/id/DC/DC-GH6/DC-GH6/ast-1551948.jpg.pub.thumb.644.644.jpg",
    thumbnailImages: [
      "https://www.panasonic.com/content/dam/pim/id/id/DC/DC-GH6/DC-GH6/ast-1551948.jpg.pub.thumb.644.644.jpg ",
      "https://www.panasonic.com/content/dam/pim/id/id/DC/DC-GH6/DC-GH6/ast-1551948.jpg.pub.thumb.644.644.jpg ",
      "https://www.panasonic.com/content/dam/pim/id/id/DC/DC-GH6/DC-GH6/ast-1551948.jpg.pub.thumb.644.644.jpg "
    ],
    originalPrice: 250000,
    discountedPrice: 230000,
    discountPercentage: 8,
    size: ["Body Only", "Lens Kit", "With Tripod", "With Battery", "Full Kit"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens-kit", label: "Lens Kit" },
      { value: "tripod", label: "With Tripod" },
      { value: "battery", label: "With Battery" },
      { value: "full-kit", label: "Full Kit" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.5,
    reviewsCount: 520,
    boughtInPastMonth: 60,
    newArrival: true,
    deliveryDate: "2 Days",
    deliveryCharge: "Free",
    seller: "Panasonic India",
    openBoxEligible: true,
    emiStartsAt: 9500,
    protectPromiseFee: 1999,
    offers: [
      { type: "Bank Offer", description: "₹2000 Off on Axis Bank Cards" },
      { type: "Exchange Offer", description: "₹10000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI for 12 months" }
    ]
  },

  {
    id: 6,
    name: "GoPro Hero 12 Black Action Camera",
    brand: "GoPro",
    category: "Camera",
    mainImage: "https://tse4.mm.bing.net/th/id/OIP.QHiMo2hdLvBZzTlh1fdSNAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      "https://tse4.mm.bing.net/th/id/OIP.QHiMo2hdLvBZzTlh1fdSNAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse4.mm.bing.net/th/id/OIP.QHiMo2hdLvBZzTlh1fdSNAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse4.mm.bing.net/th/id/OIP.QHiMo2hdLvBZzTlh1fdSNAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 55000,
    discountedPrice: 49900,
    discountPercentage: 9,
    size: ["Standard", "With Accessories", "Adventure Kit", "Waterproof Kit", "Travel Kit"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "accessories", label: "With Accessories" },
      { value: "adventure", label: "Adventure Kit" },
      { value: "waterproof", label: "Waterproof Kit" },
      { value: "travel", label: "Travel Kit" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Standard",
    rating: 4.8,
    reviewsCount: 4200,
    boughtInPastMonth: 500,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "GoPro India",
    openBoxEligible: true,
    emiStartsAt: 2200,
    protectPromiseFee: 599,
    offers: [
      { type: "Bank Offer", description: "₹1500 off on HDFC Bank Cards" },
      { type: "Exchange Offer", description: "₹3000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI up to 6 months" }
    ]
  },

  {
    id: 7,
    name: "Insta360 X4 360-Degree Camera",
    brand: "Insta360",
    category: "Camera",
    mainImage: "https://th.bing.com/th/id/OIP.zsPU8R65Yy52C2QgBUQXXAHaTk?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      "https://th.bing.com/th/id/OIP.zsPU8R65Yy52C2QgBUQXXAHaTk?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://th.bing.com/th/id/OIP.zsPU8R65Yy52C2QgBUQXXAHaTk?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://th.bing.com/th/id/OIP.zsPU8R65Yy52C2QgBUQXXAHaTk?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 62000,
    discountedPrice: 59900,
    discountPercentage: 3,
    size: ["Standard", "With Selfie Stick", "With Invisible Stick", "With Tripod", "Creator Kit"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "selfie-stick", label: "With Selfie Stick" },
      { value: "invisible-stick", label: "With Invisible Stick" },
      { value: "tripod", label: "With Tripod" },
      { value: "creator", label: "Creator Kit" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Standard",
    rating: 4.7,
    reviewsCount: 980,
    boughtInPastMonth: 120,
    newArrival: true,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Insta360 India",
    openBoxEligible: true,
    emiStartsAt: 2500,
    protectPromiseFee: 799,
    offers: [
      { type: "Bank Offer", description: "₹1000 off on SBI Cards" },
      { type: "Exchange Offer", description: "₹2000 off on exchange" },
      { type: "No Cost EMI", description: "EMI Available up to 9 months" }
    ]
  },


{
    id: 8,
    name: "Olympus OM-D E-M1 Mark III",
    brand: "Olympus",
    category: "Camera",
    mainImage: "https://tse2.mm.bing.net/th/id/OIP.9pr0MrJvRCtKvc2TbezBQgHaFB?rs=1&pid=ImgDetMain&o=7&rm=3",
    thumbnailImages: [
      "https://tse2.mm.bing.net/th/id/OIP.9pr0MrJvRCtKvc2TbezBQgHaFB?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse2.mm.bing.net/th/id/OIP.9pr0MrJvRCtKvc2TbezBQgHaFB?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      " https://tse2.mm.bing.net/th/id/OIP.9pr0MrJvRCtKvc2TbezBQgHaFB?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    originalPrice: 160000,
    discountedPrice: 149000,
    discountPercentage: 7,
    size: ["Body Only", "Lens Kit", "Pro Bundle", "With Grip", "With Dual Batteries"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens-kit", label: "Lens Kit" },
      { value: "pro-bundle", label: "Pro Bundle" },
      { value: "grip", label: "With Grip" },
      { value: "dual-batteries", label: "With Dual Batteries" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.6,
    reviewsCount: 645,
    boughtInPastMonth: 50,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Olympus India",
    openBoxEligible: true,
    emiStartsAt: 6000,
    protectPromiseFee: 1999,
    offers: [
      { type: "Bank Offer", description: "5% Cashback on ICICI Bank Cards" },
      { type: "Exchange Offer", description: "₹8000 off on Exchange" },
      { type: "No Cost EMI", description: "No Cost EMI for 12 months" }
    ]
  },

  {
    id: 9,
    name: "Leica Q3 Compact Digital Camera",
    brand: "Leica",
    category: "Camera",
    mainImage: "https://sm.pcmag.com/t/pcmag_uk/review/l/leica-q3/leica-q3_y2xf.1920.jpg",
    thumbnailImages: [
      "https://sm.pcmag.com/t/pcmag_uk/review/l/leica-q3/leica-q3_y2xf.1920.jpg ",
      "https://sm.pcmag.com/t/pcmag_uk/review/l/leica-q3/leica-q3_y2xf.1920.jpg ",
      "https://sm.pcmag.com/t/pcmag_uk/review/l/leica-q3/leica-q3_y2xf.1920.jpg "
    ],
    originalPrice: 580000,
    discountedPrice: 570000,
    discountPercentage: 2,
    size: ["Standard", "With Accessories", "With Strap", "Luxury Kit", "Full Kit"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "accessories", label: "With Accessories" },
      { value: "strap", label: "With Strap" },
      { value: "luxury", label: "Luxury Kit" },
      { value: "full-kit", label: "Full Kit" }
    ],
    color: "Black",
    materialComposition: "Aluminum & Leather",
    variant: "Standard",
    rating: 4.9,
    reviewsCount: 210,
    boughtInPastMonth: 20,
    newArrival: true,
    deliveryDate: "2 Days",
    deliveryCharge: "Free",
    seller: "Leica India",
    openBoxEligible: true,
    emiStartsAt: 24000,
    protectPromiseFee: 4999,
    offers: [
      { type: "Bank Offer", description: "5% Cashback on HDFC Cards" },
      { type: "Exchange Offer", description: "₹25000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI on 24 months" }
    ]
  },

  {
    id: 10,
    name: "DJI Osmo Pocket 3 Handheld Camera",
    brand: "DJI",
    category: "Camera",
    mainImage: "https://th.bing.com/th/id/OIP.Nvhvrh5ORvziMhBHWnzRQgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      "https://th.bing.com/th/id/OIP.Nvhvrh5ORvziMhBHWnzRQgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://th.bing.com/th/id/OIP.Nvhvrh5ORvziMhBHWnzRQgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
      " https://th.bing.com/th/id/OIP.Nvhvrh5ORvziMhBHWnzRQgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    originalPrice: 55000,
    discountedPrice: 51900,
    discountPercentage: 6,
    size: ["Standard", "Creator Combo", "With Accessories", "With Tripod", "With Case"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "creator", label: "Creator Combo" },
      { value: "accessories", label: "With Accessories" },
      { value: "tripod", label: "With Tripod" },
      { value: "case", label: "With Case" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Standard",
    rating: 4.7,
    reviewsCount: 670,
    boughtInPastMonth: 90,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "DJI India",
    openBoxEligible: true,
    emiStartsAt: 2300,
    protectPromiseFee: 899,
    offers: [
      { type: "Bank Offer", description: "₹1000 off on Axis Bank Cards" },
      { type: "Exchange Offer", description: "₹3000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI up to 6 months" }
    ]
  },

  {
    id: 11,
    name: "Kodak PixPro Astro Zoom AZ528",
    brand: "Kodak",
    category: "Camera",
    mainImage: "https://m.media-amazon.com/images/I/7127mWGA51L._SL1500_.jpg ",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/7127mWGA51L._SL1500_.jpg ",
      "https://m.media-amazon.com/images/I/7127mWGA51L._SL1500_.jpg ",
      "https://m.media-amazon.com/images/I/7127mWGA51L._SL1500_.jpg "
    ],
    originalPrice: 35000,
    discountedPrice: 29900,
    discountPercentage: 15,
    size: ["Standard", "With Case", "With Battery", "Travel Kit", "Full Kit"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "case", label: "With Case" },
      { value: "battery", label: "With Battery" },
      { value: "travel", label: "Travel Kit" },
      { value: "full-kit", label: "Full Kit" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Standard",
    rating: 4.3,
    reviewsCount: 460,
    boughtInPastMonth: 50,
    newArrival: false,
    deliveryDate: "2 Days",
    deliveryCharge: "Free",
    seller: "Kodak India",
    openBoxEligible: true,
    emiStartsAt: 1200,
    protectPromiseFee: 599,
    offers: [
      { type: "Bank Offer", description: "₹500 Cashback on ICICI Cards" },
      { type: "Exchange Offer", description: "₹2000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI up to 6 months" }
    ]
  },

// Items 12 to 20 will follow the same structure with Canon, Sony, Nikon, Fujifilm, GoPro, Panasonic brands.

{
    id: 12,
    name: "Canon EOS 200D II DSLR Camera",
    brand: "Canon", 
    category: "Camera",
    mainImage: "https://i.gadgets360cdn.com/products/large/canon-800x623-1611830744.jpg ",
    thumbnailImages: [
      "https://i.gadgets360cdn.com/products/large/canon-800x623-1611830744.jpg ",
      " https://i.gadgets360cdn.com/products/large/canon-800x623-1611830744.jpg",
      " https://i.gadgets360cdn.com/products/large/canon-800x623-1611830744.jpg"
    ],
    originalPrice: 72000,
    discountedPrice: 68900,
    discountPercentage: 4,
    size: ["Body Only", "With Lens", "With Tripod", "With Mic", "Creator Kit"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens", label: "With Lens" },
      { value: "tripod", label: "With Tripod" },
      { value: "mic", label: "With Mic" },
      { value: "creator", label: "Creator Kit" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Body Only",
    rating: 4.5,
    reviewsCount: 1100,
    boughtInPastMonth: 150,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Canon India",
    openBoxEligible: true,
    emiStartsAt: 2900,
    protectPromiseFee: 999,
    offers: [
      { type: "Bank Offer", description: "₹1000 off on Axis Bank Cards" },
      { type: "Exchange Offer", description: "₹5000 off on exchange" },
      { type: "No Cost EMI", description: "EMI Available for 9 months" }
    ]
  },

// Continue similarly to item 20:  
// Sony ZV-1 II, Nikon D7500, Fujifilm X-S20, GoPro Hero 11, Panasonic Lumix S5II, etc.

{
    id: 13,
    name: "Sony ZV-1 II Vlogging Camera",
    brand: "Sony",
    category: "Camera",
    mainImage: " https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2023/05/Sony-ZV-1-II-Vlogging-Camera-3.jpg",
    thumbnailImages: [
      "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2023/05/Sony-ZV-1-II-Vlogging-Camera-3.jpg ",
      "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2023/05/Sony-ZV-1-II-Vlogging-Camera-3.jpg ",
      "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2023/05/Sony-ZV-1-II-Vlogging-Camera-3.jpg "
    ],
    originalPrice: 87000,
    discountedPrice: 82900,
    discountPercentage: 5,
    size: ["Standard", "Vlogging Kit", "With Tripod", "With Mic", "Creator Kit"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "vlogging", label: "Vlogging Kit" },
      { value: "tripod", label: "With Tripod" },
      { value: "mic", label: "With Mic" },
      { value: "creator", label: "Creator Kit" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Standard",
    rating: 4.7,
    reviewsCount: 880,
    boughtInPastMonth: 130,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Sony India",
    openBoxEligible: true,
    emiStartsAt: 3400,
    protectPromiseFee: 1199,
    offers: [
      { type: "Bank Offer", description: "₹2000 off on HDFC Cards" },
      { type: "Exchange Offer", description: "₹4000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI up to 9 months" }
    ]
  },

  {
    id: 14,
    name: "Nikon D7500 DSLR Camera",
    brand: "Nikon",
    category: "Camera",
    mainImage: "https://tse3.mm.bing.net/th/id/OIP.Ofqkfnlt-5ftsIwa2Kg9_AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      "https://tse3.mm.bing.net/th/id/OIP.Ofqkfnlt-5ftsIwa2Kg9_AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse3.mm.bing.net/th/id/OIP.Ofqkfnlt-5ftsIwa2Kg9_AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse3.mm.bing.net/th/id/OIP.Ofqkfnlt-5ftsIwa2Kg9_AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 95000,
    discountedPrice: 89900,
    discountPercentage: 6,
    size: ["Body Only", "With Lens", "With Tripod", "With Bag", "Full Kit"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens", label: "With Lens" },
      { value: "tripod", label: "With Tripod" },
      { value: "bag", label: "With Bag" },
      { value: "full-kit", label: "Full Kit" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.6,
    reviewsCount: 790,
    boughtInPastMonth: 110,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Nikon India",
    openBoxEligible: true,
    emiStartsAt: 3500,
    protectPromiseFee: 1099,
    offers: [
      { type: "Bank Offer", description: "₹1500 off on SBI Cards" },
      { type: "Exchange Offer", description: "₹4000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI for 9 months" }
    ]
  },

  {
    id: 15,
    name: "Fujifilm X-S20 Mirrorless Camera",
    brand: "Fujifilm",
    category: "Camera",
    mainImage: " https://tse3.mm.bing.net/th/id/OIP.auQgSbxJti8JKieoN3LvxwHaF9?rs=1&pid=ImgDetMain&o=7&rm=3",
    thumbnailImages: [
      "https://tse3.mm.bing.net/th/id/OIP.auQgSbxJti8JKieoN3LvxwHaF9?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      " https://tse3.mm.bing.net/th/id/OIP.auQgSbxJti8JKieoN3LvxwHaF9?rs=1&pid=ImgDetMain&o=7&rm=3",
      " https://tse3.mm.bing.net/th/id/OIP.auQgSbxJti8JKieoN3LvxwHaF9?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    originalPrice: 135000,
    discountedPrice: 129000,
    discountPercentage: 4,
    size: ["Body Only", "With Lens Kit", "With Mic", "With Grip", "Pro Kit"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens-kit", label: "With Lens Kit" },
      { value: "mic", label: "With Mic" },
      { value: "grip", label: "With Grip" },
      { value: "pro-kit", label: "Pro Kit" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.7,
    reviewsCount: 550,
    boughtInPastMonth: 90,
    newArrival: true,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Fujifilm India",
    openBoxEligible: true,
    emiStartsAt: 5000,
    protectPromiseFee: 1499,
    offers: [
      { type: "Bank Offer", description: "₹3000 off on Axis Bank Cards" },
      { type: "Exchange Offer", description: "₹8000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI for 12 months" }
    ]
  },

  {
    id: 16,
    name: "GoPro Hero 11 Black Action Camera",
    brand: "GoPro",
    category: "Camera",
    mainImage: " https://m.media-amazon.com/images/I/61rqipwHOAL._AC_SL1500_.jpg",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/61rqipwHOAL._AC_SL1500_.jpg ",
      "https://m.media-amazon.com/images/I/61rqipwHOAL._AC_SL1500_.jpg ",
      "https://m.media-amazon.com/images/I/61rqipwHOAL._AC_SL1500_.jpg "
    ],
    originalPrice: 52000,
    discountedPrice: 47900,
    discountPercentage: 8,
    size: ["Standard", "With Battery", "Adventure Kit", "With Accessories", "Travel Kit"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "battery", label: "With Battery" },
      { value: "adventure", label: "Adventure Kit" },
      { value: "accessories", label: "With Accessories" },
      { value: "travel", label: "Travel Kit" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Standard",
    rating: 4.7,
    reviewsCount: 1800,
    boughtInPastMonth: 300,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "GoPro India",
    openBoxEligible: true,
    emiStartsAt: 2000,
    protectPromiseFee: 799,
    offers: [
      { type: "Bank Offer", description: "₹1000 off on HDFC Cards" },
      { type: "Exchange Offer", description: "₹3000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI up to 6 months" }
    ]
  },

  {
    id: 17,
    name: "Panasonic Lumix S5II Mirrorless Camera",
    brand: "Panasonic",
    category: "Camera",
    mainImage: " https://m.media-amazon.com/images/I/81weIqhyPbL._AC_SL1500_.jpg",
    thumbnailImages: [
      " https://m.media-amazon.com/images/I/81weIqhyPbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81weIqhyPbL._AC_SL1500_.jpg ",
      "https://m.media-amazon.com/images/I/81weIqhyPbL._AC_SL1500_.jpg "
    ],
    originalPrice: 195000,
    discountedPrice: 189000,
    discountPercentage: 3,
    size: ["Body Only", "With Lens Kit", "With Accessories", "With Tripod", "Full Kit"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens-kit", label: "With Lens Kit" },
      { value: "accessories", label: "With Accessories" },
      { value: "tripod", label: "With Tripod" },
      { value: "full-kit", label: "Full Kit" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.8,
    reviewsCount: 400,
    boughtInPastMonth: 50,
    newArrival: true,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Panasonic India",
    openBoxEligible: true,
    emiStartsAt: 7000,
    protectPromiseFee: 1999,
    offers: [
      { type: "Bank Offer", description: "₹5000 off on Axis Bank Cards" },
      { type: "Exchange Offer", description: "₹10000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI for 12 months" }
    ]
  },

  {
    id: 18,
    name: "Canon Powershot G7X Mark III",
    brand: "Canon",
    category: "Camera",
    mainImage: " https://th.bing.com/th/id/OIP.lghbBRr16aLATTjp5GL3oQHaFN?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    thumbnailImages: [
      "https://th.bing.com/th/id/OIP.lghbBRr16aLATTjp5GL3oQHaFN?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://th.bing.com/th/id/OIP.lghbBRr16aLATTjp5GL3oQHaFN?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://th.bing.com/th/id/OIP.lghbBRr16aLATTjp5GL3oQHaFN?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 64000,
    discountedPrice: 59900,
    discountPercentage: 6,
    size: ["Standard", "With Grip", "Vlogging Kit", "With Mic", "Creator Bundle"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "grip", label: "With Grip" },
      { value: "vlogging", label: "Vlogging Kit" },
      { value: "mic", label: "With Mic" },
      { value: "creator", label: "Creator Bundle" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Standard",
    rating: 4.6,
    reviewsCount: 780,
    boughtInPastMonth: 120,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Canon India",
    openBoxEligible: true,
    emiStartsAt: 2500,
    protectPromiseFee: 899,
    offers: [
      { type: "Bank Offer", description: "₹1500 off on HDFC Cards" },
      { type: "Exchange Offer", description: "₹3000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI up to 6 months" }
    ]
  },

  {
    id: 19,
    name: "Sony A6400 Mirrorless Camera",
    brand: "Sony",
    category: "Camera",
    mainImage: "https://th.bing.com/th/id/OIP.jYoIon5EyXTt2m7kNSqjZwHaD5?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      "https://th.bing.com/th/id/OIP.jYoIon5EyXTt2m7kNSqjZwHaD5?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.jYoIon5EyXTt2m7kNSqjZwHaD5?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.jYoIon5EyXTt2m7kNSqjZwHaD5?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    originalPrice: 95000,
    discountedPrice: 89900,
    discountPercentage: 5,
    size: ["Body Only", "With Lens Kit", "With Tripod", "With Mic", "Pro Kit"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens-kit", label: "With Lens Kit" },
      { value: "tripod", label: "With Tripod" },
      { value: "mic", label: "With Mic" },
      { value: "pro-kit", label: "Pro Kit" }
    ],
    color: "Black",
    materialComposition: "Magnesium Alloy",
    variant: "Body Only",
    rating: 4.7,
    reviewsCount: 970,
    boughtInPastMonth: 140,
    newArrival: false,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Sony India",
    openBoxEligible: true,
    emiStartsAt: 3500,
    protectPromiseFee: 1099,
    offers: [
      { type: "Bank Offer", description: "₹2000 off on ICICI Cards" },
      { type: "Exchange Offer", description: "₹5000 off on exchange" },
      { type: "No Cost EMI", description: "EMI up to 9 months" }
    ]
  },

  {
    id: 20,
    name: "Nikon Z30 Mirrorless Camera",
    brand: "Nikon",
    category: "Camera",
    mainImage: "https://m.media-amazon.com/images/I/617hHDlQI8L._AC_SL1000_.jpg ",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/617hHDlQI8L._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/617hHDlQI8L._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/617hHDlQI8L._AC_SL1000_.jpg"
    ],
    originalPrice: 85000,
    discountedPrice: 79900,
    discountPercentage: 6,
    size: ["Body Only", "With Lens Kit", "Vlogging Kit", "With Mic", "Travel Bundle"],
    sizes: [
      { value: "body-only", label: "Body Only" },
      { value: "lens-kit", label: "With Lens Kit" },
      { value: "vlogging", label: "Vlogging Kit" },
      { value: "mic", label: "With Mic" },
      { value: "travel", label: "Travel Bundle" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Body Only",
    rating: 4.6,
    reviewsCount: 650,
    boughtInPastMonth: 100,
    newArrival: true,
    deliveryDate: "Tomorrow",
    deliveryCharge: "Free",
    seller: "Nikon India",
    openBoxEligible: true,
    emiStartsAt: 3000,
    protectPromiseFee: 999,
    offers: [
      { type: "Bank Offer", description: "₹1500 off on SBI Cards" },
      { type: "Exchange Offer", description: "₹4000 off on exchange" },
      { type: "No Cost EMI", description: "0% EMI for 6 months" }
    ]
  }
];

export default CamerasData;

