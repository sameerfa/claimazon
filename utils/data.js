const data = {
  products: [
    {
      sku: 1,
      author: "Kevin Lücke",
      title: "A CTO's Tale",
      description:
        "claimsforce CTO Kevin explains how they build a tech stack which is totally unable to scale.",
      thumbnail: "https://picsum.photos/200",
      image: "https://picsum.photos/640",
      price: 4900,
      currency: "EUR",
      itemsInStock: 50,
      rating: 3,
      tags: [
        {
          id: 4,
          name: "tech",
        },
        {
          id: 3,
          name: "business",
        },
      ],
      reviews: [
        {
          id: 1,
          message: "Total bullshit this guy has no idea.",
          rating: 1,
        },
        {
          id: 2,
          message: null,
          rating: 5,
        },
        {
          id: 3,
          message: "I expected more but it is okay",
          rating: 3,
        },
      ],
      recommendations: [3, 4],
    },
    {
      sku: 2,
      author: "Dr. Schmidtchen",
      title: "How to build your own house in less than 3 month",
      description:
        "Follow this guy into a world of do it yourself house building.",
      thumbnail: "https://picsum.photos/200",
      image: "https://picsum.photos/640",
      price: 3900,
      currency: "EUR",
      itemsInStock: 4,
      rating: 4,
      tags: [
        {
          id: 5,
          name: "home",
        },
      ],
      reviews: [
        {
          id: 5,
          message: "I'm totally disappointed",
          rating: 2,
        },
        {
          id: 8,
          message: null,
          rating: 5,
        },
        {
          id: 9,
          message: null,
          rating: 5,
        },
      ],
    },
    {
      sku: 3,
      author: "D. Klengel",
      title: "I don't share",
      description:
        "Follow little Daniel on his second identity as a brooker he always tries to hide.",
      thumbnail: "https://picsum.photos/200",
      image: "https://picsum.photos/640",
      price: 999,
      currency: "EUR",
      itemsInStock: 6,
      rating: 5,
      tags: [
        {
          id: 3,
          name: "business",
        },
      ],
      reviews: [
        {
          id: 12,
          message: null,
          rating: 5,
        },
      ],
      recommendations: [2],
    },
    {
      sku: 4,
      author: "Kevin Lücke",
      title: "A CTO's Fail",
      description:
        "claimsforce CTO Kevin explains how he failed writing a book about his tale.",
      thumbnail: "https://picsum.photos/200",
      image: "https://picsum.photos/640",
      price: 3275,
      currency: "EUR",
      itemsInStock: 400,
      rating: null,
      tags: [
        {
          id: 4,
          name: "tech",
        },
        {
          id: 3,
          name: "business",
        },
      ],
      recommendations: [1],
    },
  ],
};

export default data;
