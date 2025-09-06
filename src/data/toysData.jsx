const ToysData = [
  {
    id: 1,
    name: "Remote Control Monster Truck",
    brand: "Toyshine",
    category: "Remote Control Toys",
     mainImage: "https://m.media-amazon.com/images/I/91aBSGWmKCL.jpg ",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/91aBSGWmKCL.jpg ",
      "https://m.media-amazon.com/images/I/91aBSGWmKCL.jpg ",
      "https://m.media-amazon.com/images/I/91aBSGWmKCL.jpg "
    ],
    originalPrice: 2999,
    discountedPrice: 1899,
    discountPercentage: 37,
    size: ["Small", "Medium", "Large", "XL", "XXL"],
    sizes: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ],
    color: "Red",
    materialComposition: "Plastic and Rubber",
    variant: "Rechargeable",
    rating: 4.3,
    reviewsCount: 1987,
    boughtInPastMonth: 402,
    newArrival: false,
    deliveryDate: "2025-07-26",
    deliveryCharge: "Free",
    seller: "SpeedyToys",
    openBoxEligible: true,
    emiStartsAt: 180,
    protectPromiseFee: 99,
    offers: [
      {
        type: "Bank Offer",
        description: "10% off on ICICI Bank Cards, up to ₹500."
      },
      {
        type: "Combo Offer",
        description: "Buy 2 get 10% off"
      },
      {
        type: "Cashback",
        description: "5% cashback on Flipkart Axis Bank Card"
      }
    ]
  },
  {
    id: 2,
    name: "Barbie Dreamhouse",
    brand: "Mattel",
    category: "Dolls & Accessories",
  mainImage: "https://tse1.explicit.bing.net/th/id/OIP.H85amTesqMzf7ctPS5ed-wHaK4?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      " https://tse1.explicit.bing.net/th/id/OIP.H85amTesqMzf7ctPS5ed-wHaK4?rs=1&pid=ImgDetMain&o=7&rm=3",
      " https://tse1.explicit.bing.net/th/id/OIP.H85amTesqMzf7ctPS5ed-wHaK4?rs=1&pid=ImgDetMain&o=7&rm=3",
      " https://tse1.explicit.bing.net/th/id/OIP.H85amTesqMzf7ctPS5ed-wHaK4?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    originalPrice: 12999,
    discountedPrice: 10999,
    discountPercentage: 15,
    size: ["Small", "Medium", "Large", "XL", "XXL"],
    sizes: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ],
    color: "Pink",
    materialComposition: "Plastic",
    variant: "3-Storey",
    rating: 4.7,
    reviewsCount: 5471,
    boughtInPastMonth: 670,
    newArrival: true,
    deliveryDate: "2025-07-25",
    deliveryCharge: "₹100",
    seller: "Mattel India",
    openBoxEligible: false,
    emiStartsAt: 980,
    protectPromiseFee: 299,
    offers: [
      {
        type: "Bank Offer",
        description: "₹500 off on HDFC Credit Cards"
      },
      {
        type: "No Cost EMI",
        description: "EMI starting from ₹980/month"
      },
      {
        type: "Free Gift",
        description: "Get a Barbie accessory free"
      }
    ]
  },
  {
    id: 3,
    name: "LEGO Classic Bricks Set",
    brand: "LEGO",
    category: "Building Blocks",
    mainImage: "https://tse1.mm.bing.net/th/id/OIP.vgUfZd3nK5lJJB6eTa5pYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      "https://tse1.mm.bing.net/th/id/OIP.vgUfZd3nK5lJJB6eTa5pYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse1.mm.bing.net/th/id/OIP.vgUfZd3nK5lJJB6eTa5pYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse1.mm.bing.net/th/id/OIP.vgUfZd3nK5lJJB6eTa5pYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 3499,
    discountedPrice: 2799,
    discountPercentage: 20,
    size: ["Small", "Medium", "Large", "XL", "XXL"],
    sizes: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ],
    color: "Multicolor",
    materialComposition: "Plastic",
    variant: "Creative Bricks Box",
    rating: 4.6,
    reviewsCount: 3984,
    boughtInPastMonth: 311,
    newArrival: false,
    deliveryDate: "2025-07-26",
    deliveryCharge: "Free",
    seller: "LEGO India",
    openBoxEligible: true,
    emiStartsAt: 260,
    protectPromiseFee: 149,
    offers: [
      {
        type: "Bank Offer",
        description: "5% off on Axis Bank Credit Card"
      },
      {
        type: "Combo Offer",
        description: "Buy 1 Get 1 at 30% off"
      },
      {
        type: "Special Price",
        description: "Extra ₹700 off (price inclusive of discount)"
      }
    ]
  },
  {
    id: 4,
    name: "Hot Wheels Track Builder Set",
    brand: "Hot Wheels",
    category: "Vehicle Playsets",
  mainImage: " https://m.media-amazon.com/images/I/81+jFCX26eL._AC_SL1500_.jpg",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/81+jFCX26eL._AC_SL1500_.jpg ",
      " https://m.media-amazon.com/images/I/81+jFCX26eL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81+jFCX26eL._AC_SL1500_.jpg "
    ],
    originalPrice: 2299,
    discountedPrice: 1799,
    discountPercentage: 22,
    size: ["Small", "Medium", "Large", "XL", "XXL"],
    sizes: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ],
    color: "Orange",
    materialComposition: "Plastic",
    variant: "Stunt Kit",
    rating: 4.5,
    reviewsCount: 2453,
    boughtInPastMonth: 189,
    newArrival: false,
    deliveryDate: "2025-07-26",
    deliveryCharge: "₹40",
    seller: "HotWheels India",
    openBoxEligible: true,
    emiStartsAt: 170,
    protectPromiseFee: 89,
    offers: [
      {
        type: "Bank Offer",
        description: "10% off on Axis Bank Cards"
      },
      {
        type: "Special Price",
        description: "Get extra 22% off (price inclusive)"
      },
      {
        type: "Combo Offer",
        description: "Buy with Hot Wheels car at ₹99 only"
      }
    ]
  },
  {
    id: 5,
    name: "NERF Elite 2.0 Shockwave Blaster",
    brand: "NERF",
    category: "Action & Toy Guns",
     mainImage: "https://tse2.mm.bing.net/th/id/OIP.rLlrdOMnRC1dwuZC8He0jwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      "https://tse2.mm.bing.net/th/id/OIP.rLlrdOMnRC1dwuZC8He0jwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse2.mm.bing.net/th/id/OIP.rLlrdOMnRC1dwuZC8He0jwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse2.mm.bing.net/th/id/OIP.rLlrdOMnRC1dwuZC8He0jwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 3499,
    discountedPrice: 2899,
    discountPercentage: 17,
    size: ["Small", "Medium", "Large", "XL", "XXL"],
    sizes: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ],
    color: "Blue",
    materialComposition: "Plastic & Foam",
    variant: "36-Dart Drum",
    rating: 4.4,
    reviewsCount: 1382,
    boughtInPastMonth: 304,
    newArrival: true,
    deliveryDate: "2025-07-27",
    deliveryCharge: "Free",
    seller: "NERF Official",
    openBoxEligible: true,
    emiStartsAt: 275,
    protectPromiseFee: 119,
    offers: [
      {
        type: "Bank Offer",
        description: "Flat ₹200 off on SBI Cards"
      },
      {
        type: "Cashback",
        description: "5% cashback on Flipkart Axis Bank Card"
      },
      {
        type: "No Cost EMI",
        description: "Available on orders above ₹2999"
      }
    ]
  },
  {
    id: 6,
    name: "Fisher-Price Laugh & Learn Puppy",
    brand: "Fisher-Price",
    category: "Educational Toys",
     mainImage: "https://tse4.mm.bing.net/th/id/OIP.yfn5-VYLD_Z2iIWse-q_XgHaI-?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    thumbnailImages: [
      "https://tse4.mm.bing.net/th/id/OIP.yfn5-VYLD_Z2iIWse-q_XgHaI-?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      " https://tse4.mm.bing.net/th/id/OIP.yfn5-VYLD_Z2iIWse-q_XgHaI-?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.yfn5-VYLD_Z2iIWse-q_XgHaI-?rs=1&pid=ImgDetMain&o=7&rm=3 "
    ],
    originalPrice: 2199,
    discountedPrice: 1699,
    discountPercentage: 23,
    size: ["Small", "Medium", "Large", "XL", "XXL"],
    sizes: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ],
    color: "Beige",
    materialComposition: "Plush & Electronics",
    variant: "Bilingual Edition",
    rating: 4.8,
    reviewsCount: 2103,
    boughtInPastMonth: 435,
    newArrival: false,
    deliveryDate: "2025-07-25",
    deliveryCharge: "₹50",
    seller: "Mattel India",
    openBoxEligible: false,
    emiStartsAt: 155,
    protectPromiseFee: 79,
    offers: [
      {
        type: "Festival Offer",
        description: "Extra 10% off for first-time buyers"
      },
      {
        type: "Combo Offer",
        description: "Buy 2 Fisher-Price toys and save 15%"
      },
      {
        type: "No Cost EMI",
        description: "Available from ₹155/month"
      }
    ]
  },
  {
    id: 7,
    name: "UNO Card Game",
    brand: "Mattel",
    category: "Board & Card Games",
    mainImage: "https://i5.walmartimages.com/asr/f0ef9142-d1f6-445f-ad71-f997374a9423_1.90b48528761fd47891c4f54509bb7f01.jpeg",
    thumbnailImages: [
      " https://i5.walmartimages.com/asr/f0ef9142-d1f6-445f-ad71-f997374a9423_1.90b48528761fd47891c4f54509bb7f01.jpeg",
      " https://i5.walmartimages.com/asr/f0ef9142-d1f6-445f-ad71-f997374a9423_1.90b48528761fd47891c4f54509bb7f01.jpeg",
      " https://i5.walmartimages.com/asr/f0ef9142-d1f6-445f-ad71-f997374a9423_1.90b48528761fd47891c4f54509bb7f01.jpeg"
    ],
    originalPrice: 299,
    discountedPrice: 199,
    discountPercentage: 33,
    size: ["Pocket", "Travel", "Standard", "Family", "Party"],
    sizes: [
      { value: "pocket", label: "Pocket" },
      { value: "travel", label: "Travel" },
      { value: "standard", label: "Standard" },
      { value: "family", label: "Family" },
      { value: "party", label: "Party" }
    ],
    color: "Multicolor",
    materialComposition: "Cardboard",
    variant: "Classic",
    rating: 4.9,
    reviewsCount: 9861,
    boughtInPastMonth: 1800,
    newArrival: false,
    deliveryDate: "2025-07-25",
    deliveryCharge: "Free",
    seller: "Mattel Official",
    openBoxEligible: false,
    emiStartsAt: 0,
    protectPromiseFee: 0,
    offers: [
      {
        type: "Special Price",
        description: "Get it at ₹199 (price inclusive of discount)"
      },
      {
        type: "Bank Offer",
        description: "5% off on ICICI Bank Cards"
      },
      {
        type: "Combo Offer",
        description: "Buy 2 card games and get 10% off"
      }
    ]
  },
  {
    id: 8,
    name: "Slime DIY Kit for Kids",
    brand: "Imagimake",
    category: "Craft Kits",
      mainImage: " https://m.media-amazon.com/images/I/A1T+nfR5lTL._AC_SL1500_.jpg",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/A1T+nfR5lTL._AC_SL1500_.jpg ",
      "https://m.media-amazon.com/images/I/A1T+nfR5lTL._AC_SL1500_.jpg ",
      " https://m.media-amazon.com/images/I/A1T+nfR5lTL._AC_SL1500_.jpg"
    ],
    originalPrice: 699,
    discountedPrice: 499,
    discountPercentage: 29,
    size: ["Mini", "Starter", "Deluxe", "Mega", "Super"],
    sizes: [
      { value: "mini", label: "Mini" },
      { value: "starter", label: "Starter" },
      { value: "deluxe", label: "Deluxe" },
      { value: "mega", label: "Mega" },
      { value: "super", label: "Super" }
    ],
    color: "Multicolor",
    materialComposition: "Glue, Borax, Color, Glitter",
    variant: "Glitter & Glow",
    rating: 4.3,
    reviewsCount: 834,
    boughtInPastMonth: 190,
    newArrival: true,
    deliveryDate: "2025-07-28",
    deliveryCharge: "₹30",
    seller: "Imagimake Creative",
    openBoxEligible: false,
    emiStartsAt: 50,
    protectPromiseFee: 19,
    offers: [
      {
        type: "Combo Offer",
        description: "Buy 2 get 15% off"
      },
      {
        type: "Bank Offer",
        description: "₹50 off on prepaid orders"
      },
      {
        type: "Freebie",
        description: "Free mini slime pack with purchase"
      }
    ]
  },
  {
    id: 9,
    name: "Transformers Bumblebee Action Figure",
    brand: "Hasbro",
    category: "Action Figures",
    mainImage: "https://media.entertainmentearth.com/assets/images/260c31d80f324c589ff12ad6b07c6089xl.jpg ",
    thumbnailImages: [
      "https://media.entertainmentearth.com/assets/images/260c31d80f324c589ff12ad6b07c6089xl.jpg ",
      " https://media.entertainmentearth.com/assets/images/260c31d80f324c589ff12ad6b07c6089xl.jpg",
      "https://media.entertainmentearth.com/assets/images/260c31d80f324c589ff12ad6b07c6089xl.jpg "
    ],
    originalPrice: 1699,
    discountedPrice: 1299,
    discountPercentage: 24,
    size: ["Small", "Medium", "Large", "XL", "XXL"],
    sizes: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ],
    color: "Yellow",
    materialComposition: "Plastic",
    variant: "Deluxe Edition",
    rating: 4.6,
    reviewsCount: 1231,
    boughtInPastMonth: 289,
    newArrival: false,
    deliveryDate: "2025-07-26",
    deliveryCharge: "₹49",
    seller: "Hasbro India",
    openBoxEligible: true,
    emiStartsAt: 120,
    protectPromiseFee: 69,
    offers: [
      {
        type: "Bank Offer",
        description: "10% off on Axis Bank Credit Cards"
      },
      {
        type: "No Cost EMI",
        description: "Starts from ₹120/month"
      },
      {
        type: "Special Price",
        description: "Inclusive of ₹400 discount"
      }
    ]
  },
  {
    id: 10,
    name: "Play-Doh Kitchen Creations",
    brand: "Play-Doh",
    category: "Pretend Play",
    mainImage: "https://m.media-amazon.com/images/I/814x2bYIL1L._AC_SL1500_.jpg ",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/814x2bYIL1L._AC_SL1500_.jpg ",
      " https://m.media-amazon.com/images/I/814x2bYIL1L._AC_SL1500_.jpg",
      " https://m.media-amazon.com/images/I/814x2bYIL1L._AC_SL1500_.jpg"
    ],
    originalPrice: 1199,
    discountedPrice: 899,
    discountPercentage: 25,
    size: ["Basic", "Creative", "Deluxe", "Mega", "Pro"],
    sizes: [
      { value: "basic", label: "Basic" },
      { value: "creative", label: "Creative" },
      { value: "deluxe", label: "Deluxe" },
      { value: "mega", label: "Mega" },
      { value: "pro", label: "Pro" }
    ],
    color: "Multicolor",
    materialComposition: "Dough & Plastic Tools",
    variant: "Pizza Party",
    rating: 4.4,
    reviewsCount: 974,
    boughtInPastMonth: 210,
    newArrival: false,
    deliveryDate: "2025-07-27",
    deliveryCharge: "Free",
    seller: "Hasbro India",
    openBoxEligible: false,
    emiStartsAt: 85,
    protectPromiseFee: 49,
    offers: [
      {
        type: "Bank Offer",
        description: "₹100 off with Flipkart Axis Card"
      },
      {
        type: "Combo Offer",
        description: "Buy any 2 Play-Doh kits and save ₹200"
      },
      {
        type: "Special Price",
        description: "Extra ₹300 off (price inclusive)"
      }
    ]
  },
  {
    id: 11,
    name: "Magnetic Building Tiles Set",
    brand: "PicassoTiles",
    category: "STEM Toys",
  mainImage: " https://m.media-amazon.com/images/I/81g0v0sl++L._AC_SL1500_.jpg",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/81g0v0sl++L._AC_SL1500_.jpg ",
      " https://m.media-amazon.com/images/I/81g0v0sl++L._AC_SL1500_.jpg",
      " https://m.media-amazon.com/images/I/81g0v0sl++L._AC_SL1500_.jpg"
    ],
    originalPrice: 2799,
    discountedPrice: 2199,
    discountPercentage: 21,
    size: ["30pcs", "60pcs", "100pcs", "120pcs", "150pcs"],
    sizes: [
      { value: "30pcs", label: "30 Pieces" },
      { value: "60pcs", label: "60 Pieces" },
      { value: "100pcs", label: "100 Pieces" },
      { value: "120pcs", label: "120 Pieces" },
      { value: "150pcs", label: "150 Pieces" }
    ],
    color: "Transparent Colors",
    materialComposition: "Plastic & Magnets",
    variant: "100-Piece Kit",
    rating: 4.7,
    reviewsCount: 1543,
    boughtInPastMonth: 372,
    newArrival: false,
    deliveryDate: "2025-07-28",
    deliveryCharge: "Free",
    seller: "STEM World",
    openBoxEligible: true,
    emiStartsAt: 200,
    protectPromiseFee: 89,
    offers: [
      {
        type: "No Cost EMI",
        description: "Available on orders above ₹1999"
      },
      {
        type: "Bank Offer",
        description: "Flat ₹250 off on HDFC Credit Cards"
      },
      {
        type: "Freebie",
        description: "Free magnetic wheels set"
      }
    ]
  },
   {
    id: 12,
    name: "Talking Tom Cat Toy",
    brand: "Toiing",
    category: "Electronic Toys",
      mainImage: "https://store.sanomanchey.com/wp-content/uploads/2022/02/talking-tom1.jpg ",
    thumbnailImages: [
      "https://store.sanomanchey.com/wp-content/uploads/2022/02/talking-tom1.jpg ",
      "https://store.sanomanchey.com/wp-content/uploads/2022/02/talking-tom1.jpg ",
      " https://store.sanomanchey.com/wp-content/uploads/2022/02/talking-tom1.jpg"
    ],
    originalPrice: 1199,
    discountedPrice: 799,
    discountPercentage: 33,
    size: ["Small", "Medium", "Large", "XL", "XXL"],
    sizes: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ],
    color: "Grey",
    materialComposition: "Plastic & Electronics",
    variant: "Voice Repeating",
    rating: 4.2,
    reviewsCount: 624,
    boughtInPastMonth: 142,
    newArrival: false,
    deliveryDate: "2025-07-26",
    deliveryCharge: "₹49",
    seller: "Toiing",
    openBoxEligible: true,
    emiStartsAt: 75,
    protectPromiseFee: 39,
    offers: [
      {
        type: "Bank Offer",
        description: "₹100 off with ICICI Credit Cards"
      },
      {
        type: "Special Price",
        description: "Inclusive of all discounts"
      },
      {
        type: "Freebie",
        description: "Free sticker sheet"
      }
    ]
  },
  {
    id: 13,
    name: "Kids Doctor Set with Stethoscope",
    brand: "Little's",
    category: "Role Play",
    mainImage: "https://m.media-amazon.com/images/I/71zfEzCr34L._AC_SL1200_.jpg ",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/71zfEzCr34L._AC_SL1200_.jpg ",
      " https://m.media-amazon.com/images/I/71zfEzCr34L._AC_SL1200_.jpg",
      " https://m.media-amazon.com/images/I/71zfEzCr34L._AC_SL1200_.jpg"
    ],
    originalPrice: 899,
    discountedPrice: 629,
    discountPercentage: 30,
    size: ["Basic", "Standard", "Deluxe", "XL", "Mega"],
    sizes: [
      { value: "basic", label: "Basic" },
      { value: "standard", label: "Standard" },
      { value: "deluxe", label: "Deluxe" },
      { value: "xl", label: "XL" },
      { value: "mega", label: "Mega" }
    ],
    color: "Pink & Blue",
    materialComposition: "Plastic",
    variant: "Battery Operated",
    rating: 4.5,
    reviewsCount: 871,
    boughtInPastMonth: 210,
    newArrival: false,
    deliveryDate: "2025-07-27",
    deliveryCharge: "₹30",
    seller: "Little's India",
    openBoxEligible: false,
    emiStartsAt: 60,
    protectPromiseFee: 29,
    offers: [
      {
        type: "Bank Offer",
        description: "₹50 off with Axis Bank Cards"
      },
      {
        type: "Combo Offer",
        description: "Buy with Nurse Kit for ₹150 extra"
      },
      {
        type: "Freebie",
        description: "Free stethoscope sound toy"
      }
    ]
  },
  {
    id: 14,
    name: "Rubik’s Cube 3x3",
    brand: "Rubik's",
    category: "Puzzles",
     mainImage: " https://m.media-amazon.com/images/I/614CgFq7B7S._AC_SL1200_.jpg",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/614CgFq7B7S._AC_SL1200_.jpg ",
      "https://m.media-amazon.com/images/I/614CgFq7B7S._AC_SL1200_.jpg ",
      "https://m.media-amazon.com/images/I/614CgFq7B7S._AC_SL1200_.jpg "
    ],
    originalPrice: 399,
    discountedPrice: 299,
    discountPercentage: 25,
    size: ["Standard", "Mini", "Magnetic", "Glow", "Speed"],
    sizes: [
      { value: "standard", label: "Standard" },
      { value: "mini", label: "Mini" },
      { value: "magnetic", label: "Magnetic" },
      { value: "glow", label: "Glow" },
      { value: "speed", label: "Speed" }
    ],
    color: "Multicolor",
    materialComposition: "Plastic",
    variant: "Original",
    rating: 4.7,
    reviewsCount: 1299,
    boughtInPastMonth: 321,
    newArrival: false,
    deliveryDate: "2025-07-26",
    deliveryCharge: "Free",
    seller: "Rubik's India",
    openBoxEligible: false,
    emiStartsAt: 0,
    protectPromiseFee: 19,
    offers: [
      {
        type: "Combo Offer",
        description: "Buy 2 puzzles and get 10% off"
      },
      {
        type: "Bank Offer",
        description: "5% off with Flipkart Axis Bank Card"
      },
      {
        type: "Special Price",
        description: "Get it at ₹299 only"
      }
    ]
  },
  {
    id: 15,
    name: "Wooden Train Set",
    brand: "Funskool",
    category: "Vehicles & Trains",
   mainImage: "https://i5.walmartimages.com/asr/3a4c2396-f149-461b-af11-fc91486e1837.d75d42d1bfd876fdb81bd906d1018622.jpeg ",
    thumbnailImages: [
      "https://i5.walmartimages.com/asr/3a4c2396-f149-461b-af11-fc91486e1837.d75d42d1bfd876fdb81bd906d1018622.jpeg ",
      "https://i5.walmartimages.com/asr/3a4c2396-f149-461b-af11-fc91486e1837.d75d42d1bfd876fdb81bd906d1018622.jpeg ",
      "https://i5.walmartimages.com/asr/3a4c2396-f149-461b-af11-fc91486e1837.d75d42d1bfd876fdb81bd906d1018622.jpeg "
    ],
    originalPrice: 1599,
    discountedPrice: 1199,
    discountPercentage: 25,
    size: ["10pcs", "20pcs", "40pcs", "60pcs", "80pcs"],
    sizes: [
      { value: "10pcs", label: "10 Pieces" },
      { value: "20pcs", label: "20 Pieces" },
      { value: "40pcs", label: "40 Pieces" },
      { value: "60pcs", label: "60 Pieces" },
      { value: "80pcs", label: "80 Pieces" }
    ],
    color: "Natural Wood",
    materialComposition: "Wood",
    variant: "Magnetic Link",
    rating: 4.6,
    reviewsCount: 934,
    boughtInPastMonth: 210,
    newArrival: true,
    deliveryDate: "2025-07-29",
    deliveryCharge: "₹30",
    seller: "Funskool India",
    openBoxEligible: true,
    emiStartsAt: 110,
    protectPromiseFee: 59,
    offers: [
      {
        type: "Bank Offer",
        description: "₹100 off on SBI Debit Cards"
      },
      {
        type: "Freebie",
        description: "Get free train track piece"
      },
      {
        type: "Combo Offer",
        description: "Buy 2 train sets and save ₹300"
      }
    ]
  },
  {
    id: 16,
    name: "Glow in the Dark Stars",
    brand: "Generic",
    category: "Room Decor",
   mainImage: " https://tse1.explicit.bing.net/th/id/OIP.tAtjYATRw40wawqfQz9UiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    thumbnailImages: [
      "https://tse1.explicit.bing.net/th/id/OIP.tAtjYATRw40wawqfQz9UiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      "https://tse1.explicit.bing.net/th/id/OIP.tAtjYATRw40wawqfQz9UiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 ",
      " https://tse1.explicit.bing.net/th/id/OIP.tAtjYATRw40wawqfQz9UiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    originalPrice: 499,
    discountedPrice: 299,
    discountPercentage: 40,
    size: ["50pcs", "100pcs", "200pcs", "300pcs", "500pcs"],
    sizes: [
      { value: "50pcs", label: "50 Pieces" },
      { value: "100pcs", label: "100 Pieces" },
      { value: "200pcs", label: "200 Pieces" },
      { value: "300pcs", label: "300 Pieces" },
      { value: "500pcs", label: "500 Pieces" }
    ],
    color: "Green",
    materialComposition: "Plastic",
    variant: "Adhesive Stars",
    rating: 4.3,
    reviewsCount: 543,
    boughtInPastMonth: 99,
    newArrival: false,
    deliveryDate: "2025-07-25",
    deliveryCharge: "Free",
    seller: "NightGlow Decor",
    openBoxEligible: false,
    emiStartsAt: 0,
    protectPromiseFee: 19,
    offers: [
      {
        type: "Bank Offer",
        description: "5% cashback on Flipkart Axis Card"
      },
      {
        type: "Combo Offer",
        description: "Buy with Moon Sticker Pack"
      },
      {
        type: "Special Price",
        description: "Flat ₹200 off"
      }
    ]
  },
  {
    id: 17,
    name: "Paw Patrol Rescue Vehicles",
    brand: "Nickelodeon",
    category: "Character Toys",
  mainImage: "https://www.bigw.com.au/medias/sys_master/images/images/h44/h36/13552245571614.jpg ",
    thumbnailImages: [
      " https://www.bigw.com.au/medias/sys_master/images/images/h44/h36/13552245571614.jpg",
      "https://www.bigw.com.au/medias/sys_master/images/images/h44/h36/13552245571614.jpg ",
      "https://www.bigw.com.au/medias/sys_master/images/images/h44/h36/13552245571614.jpg "
    ],
    originalPrice: 1799,
    discountedPrice: 1399,
    discountPercentage: 22,
    size: ["Single", "Double", "Rescue Pack", "Action Pack", "Mega Pack"],
    sizes: [
      { value: "single", label: "Single" },
      { value: "double", label: "Double" },
      { value: "rescue", label: "Rescue Pack" },
      { value: "action", label: "Action Pack" },
      { value: "mega", label: "Mega Pack" }
    ],
    color: "Blue & Red",
    materialComposition: "Plastic",
    variant: "Marshall Fire Truck",
    rating: 4.5,
    reviewsCount: 777,
    boughtInPastMonth: 189,
    newArrival: true,
    deliveryDate: "2025-07-30",
    deliveryCharge: "₹49",
    seller: "Nick Official Store",
    openBoxEligible: true,
    emiStartsAt: 135,
    protectPromiseFee: 49,
    offers: [
      {
        type: "Bank Offer",
        description: "Flat ₹150 off with Kotak Credit Cards"
      },
      {
        type: "No Cost EMI",
        description: "Starts at ₹135/month"
      },
      {
        type: "Combo Offer",
        description: "Buy 1 get 2nd at 20% off"
      }
    ]
  },
  {
    id: 18,
    name: "Kids Mini Keyboard Piano",
    brand: "Munchkin",
    category: "Musical Toys",
  mainImage: " https://m.media-amazon.com/images/I/71xpWynnQcL._AC_.jpg",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/71xpWynnQcL._AC_.jpg ",
      "https://m.media-amazon.com/images/I/71xpWynnQcL._AC_.jpg ",
      " https://m.media-amazon.com/images/I/71xpWynnQcL._AC_.jpg"
    ],
    originalPrice: 2199,
    discountedPrice: 1699,
    discountPercentage: 23,
    size: ["25 Keys", "32 Keys", "49 Keys", "61 Keys", "88 Keys"],
    sizes: [
      { value: "25", label: "25 Keys" },
      { value: "32", label: "32 Keys" },
      { value: "49", label: "49 Keys" },
      { value: "61", label: "61 Keys" },
      { value: "88", label: "88 Keys" }
    ],
    color: "Black",
    materialComposition: "Plastic",
    variant: "Electronic",
    rating: 4.4,
    reviewsCount: 503,
    boughtInPastMonth: 138,
    newArrival: true,
    deliveryDate: "2025-07-30",
    deliveryCharge: "Free",
    seller: "Munchkin Music",
    openBoxEligible: true,
    emiStartsAt: 155,
    protectPromiseFee: 59,
    offers: [
      {
        type: "Bank Offer",
        description: "₹200 off on HDFC Cards"
      },
      {
        type: "Combo Offer",
        description: "Buy with Microphone Kit at ₹299"
      },
      {
        type: "Freebie",
        description: "Free sheet music"
      }
    ]
  },
  {
    id: 19,
    name: "Mini Basketball Hoop Set",
    brand: "Toysbox",
    category: "Indoor Sports",
     mainImage: "https://m.media-amazon.com/images/I/71xpWynnQcL._AC_.jpg ",
    thumbnailImages: [
      "https://m.media-amazon.com/images/I/71xpWynnQcL._AC_.jpg ",
      " https://m.media-amazon.com/images/I/71xpWynnQcL._AC_.jpg",
      "https://m.media-amazon.com/images/I/71xpWynnQcL._AC_.jpg "
    ],
    originalPrice: 999,
    discountedPrice: 699,
    discountPercentage: 30,
    size: ["Mini", "Standard", "Wall Mount", "Door Mount", "Stand Up"],
    sizes: [
      { value: "mini", label: "Mini" },
      { value: "standard", label: "Standard" },
      { value: "wall", label: "Wall Mount" },
      { value: "door", label: "Door Mount" },
      { value: "stand", label: "Stand Up" }
    ],
    color: "Red & White",
    materialComposition: "Plastic & Rubber",
    variant: "Door Mount",
    rating: 4.3,
    reviewsCount: 341,
    boughtInPastMonth: 90,
    newArrival: false,
    deliveryDate: "2025-07-29",
    deliveryCharge: "Free",
    seller: "Toysbox",
    openBoxEligible: false,
    emiStartsAt: 65,
    protectPromiseFee: 25,
    offers: [
      {
        type: "Special Price",
        description: "Flat ₹300 off inclusive"
      },
      {
        type: "Combo Offer",
        description: "Buy 2 and save 15%"
      },
      {
        type: "Bank Offer",
        description: "5% off with ICICI Credit Card"
      }
    ]
  },
  {
    id: 20,
    name: "Remote Control Flying Helicopter",
    brand: "Sonic",
    category: "Remote Control Toys",
   mainImage: " https://www.fnp.com//images/pr/l/v20200817204401/remote-control-helicopter_1.jpg",
    thumbnailImages: [
      "https://www.fnp.com//images/pr/l/v20200817204401/remote-control-helicopter_1.jpg ",
      " https://www.fnp.com//images/pr/l/v20200817204401/remote-control-helicopter_1.jpg",
      "https://www.fnp.com//images/pr/l/v20200817204401/remote-control-helicopter_1.jpg "
    ],
    originalPrice: 1899,
    discountedPrice: 1399,
    discountPercentage: 26,
    size: ["Mini", "Small", "Standard", "Large", "XL"],
    sizes: [
      { value: "mini", label: "Mini" },
      { value: "small", label: "Small" },
      { value: "standard", label: "Standard" },
      { value: "large", label: "Large" },
      { value: "xl", label: "XL" }
    ],
    color: "Blue",
    materialComposition: "Plastic & Metal",
    variant: "Rechargeable",
    rating: 4.2,
    reviewsCount: 711,
    boughtInPastMonth: 176,
    newArrival: false,
    deliveryDate: "2025-07-27",
    deliveryCharge: "₹49",
    seller: "Sonic Toys",
    openBoxEligible: true,
    emiStartsAt: 125,
    protectPromiseFee: 49,
    offers: [
      {
        type: "Bank Offer",
        description: "Flat ₹200 off with Kotak Cards"
      },
      {
        type: "Freebie",
        description: "Free spare blades"
      },
      {
        type: "No Cost EMI",
        description: "Available from ₹125/month"
      }
    ]
  }
];

export default ToysData;
