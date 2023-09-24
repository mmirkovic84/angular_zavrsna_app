import { Injectable } from '@angular/core';
import { product } from 'src/app/shared/models/product';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllTags(): Tag[] {
    return [
      
      { name: 'Sympathy', 
      imageUrl: '/assets/img/tag1.png'},
      { name: 'Anniversary',
      imageUrl: '/assets/img/tag2.png' },
      { name: 'Congratulations',
      imageUrl: '/assets/img/tag3.png' },
      { name: 'Get Well',
      imageUrl: '/assets/img/tag4.png' }
    ]
  }

  getAllProductsByTag(tag: string): product[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(product => product.tag?.includes(tag));
  }

  getProductById(id: number): product {
    return this.getAll().find(product => product.id == id)!;
  }

  getAll(): product[] {
    return [
      {
        id: 1,
        name: 'Truly Stunning Bouquet',
        price: 108,
        decription: 'This dreamy jewel toned bouquet combines bold color and eye catching texture to make a statement. Featuring a thoughtful array of both roses and lilies, this dazzling assortment is bound to impress your recipient.',
        imageUrl: '/assets/img/products/anniversary/product18.PNG',
        tag: "Anniversary",
      },
      {
        id: 2,
        name: 'Youre Precious Bouquet',
        price: 90,
        decription: 'Blushing shades of pink blooms are nestled in lush greens to charm anyones day. This bouquet is abundant with a classic assortment of pretty florals roses, alstroemeria and carnations to name a few.',
        imageUrl: '/assets/img/products/anniversary/product19.PNG',
        tag: "Anniversary",
      },
      {
        id: 3,
        name: 'Long Stem Red Rose Bouquet',
        price: 200,
        decription: 'You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist. Let our network of expert florists design this timeless red bouquet to make a statement for your special someone. Red flowers are an elegant, iconic and romantic gift for anyone close to your heart. Each rose is handcrafted and hand delivered to say I love you directly from a local florist to their home or office.',
        imageUrl: '/assets/img/products/anniversary/product20.PNG',
        tag: "Anniversary",
      },
      {
        id: 4,
        name: 'Pretty in Pink Belgian Chocolate Truffles',
        price: 45,
        decription: 'Send a little piece of your heart with the Pretty in Pink Truffles. Adorably designed in heart shapes with a pink and red coating for the holiday of love, this treat comes neatly packaged with 15 truffles aligned with their shade of pink.',
        imageUrl: '/assets/img/products/anniversary/product21.PNG',
        tag: "Anniversary",
      },
      {
        id: 5,
        name: 'Belle of the Ball Bouqet',
        price: 24,
        decription: 'Dont make that special someone chose this February, and send the Valentines Day Belgian Chocolate Covered Treat Sampler instead. Try an assortment of holiday treats such as chocolate-dipped Rice Krispie® treats, chocolate cookies, mini chocolate pretzel twists, and more.',
        imageUrl: '/assets/img/products/anniversary/product22.PNG',
        tag: "Anniversary",
      },
      {
        id: 6,
        name: 'Bliss White Orchid',
        price: 68,
        decription: 'The most popular variety of this plant, the Phalaenopsis orchid makes a great gift for plant lovers and plant beginners alike! White orchids are easy to care for and add a touch of delicate beauty to any home, office or table.',
        imageUrl: '/assets/img/products/congratulations/product23.PNG',
        tag: "Congratulations",
      },
      {
        id: 7,
        name: 'CLASSIC WHITE CALLA LILY',
        price: 58,
        decription: 'This houseplant is great for making every day bright. Whether perched on a windowsill or gifted to a friend in need of a smile, the pure white tones and healthy greenery add a delicate touch to any space. This plant loves rich soil and plenty of sun.',
        imageUrl: '/assets/img/products/congratulations/product24.PNG',
        tag: "Congratulations",
      },
      {
        id: 8,
        name: 'SPRING FLING TULIP BULB GARDEN',
        price: 45,
        decription: 'Grow a pop of color for the changing season with the Assorted Spring Tulip Garden blooming pink, yellow and purple flowers. Nothing revitalizes a space like fresh flowers. Packed with bold bell-shaped blooms, this bulb garden is the perfect gift for any occasion.',
        imageUrl: '/assets/img/products/congratulations/product25.PNG',
        tag: "Congratulations",
      },
      {
        id: 9,
        name: 'CONGRATS BELGIAN CHOCOLATE COVERED BERRY-GRAM',
        price: 55,
        decription: 'Artisan Crafted Belgian Chocolate Covered Treats Crafted in a Small Batch Kitchen 12 Strawberries Hand Dipped in Belgian Dark Chocolate Hand Decorated with drizzles and White Chocolate Letters spelling out \"\"CONGRATS\"\" Arrives in an Elegant Gift Box',
        imageUrl: '/assets/img/products/congratulations/product26.PNG',
        tag: "Congratulations",
      },
      {
        id: 10,
        name: 'Fiesta Bouquet',
        price: 95,
        decription: 'The Fiesta Bouquet is composed of a lively mix, fit to celebrate any and every moment. With a combination of vibrant flowers, this florist–designed arrangement brings a pop of color and a burst of excitement as soon as it arrives.',
        imageUrl: '/assets/img/products/get-well/product13.PNG',
        tag: "Get Well",
      },
      {
        id: 11,
        name: 'Alluring Elegance Bouquet',
        price: 115,
        decription: 'An illuminating array of florals brings an air of elegance to any room its placed. This arrangement features refined florals like lilies, Queen Annes Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.',
        imageUrl: '/assets/img/products/get-well/product14.PNG',
        tag: "Get Well",
      },
      {
        id: 12,
        name: 'Beyond Blue Bouquet',
        price: 92,
        decription: 'There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.',
        imageUrl: '/assets/img/products/get-well/product15.PNG',
        tag: "Get Well",
      },
      {
        id: 13,
        name: 'Clear Skies Bouquet',
        price: 135,
        decription: 'Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.',
        imageUrl: '/assets/img/products/get-well/product16.PNG',
        tag: "Get Well",
      },
      {
        id: 14,
        name: 'Light of My Life Bouquet',
        price: 80,
        decription: 'The Light of My Life Bouquet blossoms with brilliant color and a sweet sophistication to create the perfect impression! Pink Lilies make the eyes dance across the unique design of this flower bouquet, surrounded by the blushing colors of orange roses, lavender cushion poms, hot pink carnations, and lush greens. Presented in a clear glass vase, this fresh flower arrangement has been created just for you to help you send your sweetest thank you, happy anniversary, or thinking of you wishes.',
        imageUrl: '/assets/img/products/get-well/product17.PNG',
        tag: "Get Well",
      },
      {
        id: 15,
        name: 'Beautiful Spirit Basket',
        price: 105,
        decription: 'Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket.',
        imageUrl: '/assets/img/products/simpathy/product1.PNG',
        tag: "Sympathy",
      },
      {
        id: 16,
        name: 'The Spathiphyllum Plant',
        price: 80,
        decription: 'Everyone could use a little peace in their life! Commonly known as the peace lily, our spathiphyllum plant is a favorite among just about everyone and perfect for every occasion. This beautiful plant is long–lasting and has an amazing effect on any room with its lush leaves and white flowers.',
        imageUrl: '/assets/img/products/simpathy/product2.PNG',
        tag: "Sympathy",
      },
      {
        id: 17,
        name: 'Comfort Planter',
        price: 66,
        decription: 'The Comfort Planter offers unspoken words of hope and peace during this time of loss and sadness. Our stylish and sophisticated white ceramic planter holds an elegant 6\" peace lily plant, which exhibits brilliant white tear-shaped blooms amongst dark green foliage for a simply beautiful effect.',
        imageUrl: '/assets/img/products/simpathy/product3.PNG',
        tag: "Sympathy",
      },
      {
        id: 18,
        name: 'Eternal Friendship Bouquet',
        price: 100,
        decription: 'An exuberance of bright and beautiful white blossoms provides an exquisite way to deliver your expressions of sympathy and comfort. This life affirming tribute combines white roses, snapdragons and Asiatic lilies accented by lush greens arranged in a clear glass 8\" vase. An excellent choice for a wake, funeral service or for sending your condolences to the home of grieving family or friends.',
        imageUrl: '/assets/img/products/simpathy/product4.PNG',
        tag: "Sympathy",
      },
      {
        id: 19,
        name: 'Long Stem Pink Rose Bouquet',
        price: 200,
        decription: 'Enjoy the classic beauty of the rose with a playful twist in our Long Stem Pink Rose Bouquet. This arrangement features all pink roses that will look especially pretty in the hands of those you cherish most.',
        imageUrl: '/assets/img/products/simpathy/product5.PNG',
        tag: "Sympathy",
      },
      {
        id: 20,
        name: 'Clear Skies Bouquet',
        price: 135,
        decription: 'Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.',
        imageUrl: '/assets/img/products/simpathy/product6.PNG',
        tag: "Sympathy",
      },
      {
        id: 21,
        name: 'Beyond Blue Bouquet',
        price: 92,
        decription: 'There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.',
        imageUrl: '/assets/img/products/simpathy/product7.PNG',
        tag: "Sympathy",
      },
      {
        id: 22,
        name: 'Alluring Elegance Bouquet',
        price: 115,
        decription: 'An illuminating array of florals brings an air of elegance to any room it is placed. This arrangement features refined florals like lilies, Queen Annes Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.',
        imageUrl: '/assets/img/products/simpathy/product8.PNG',
        tag: "Sympathy",
      },
      {
        id: 23,
        name: 'Beach House Bouquet',
        price: 125,
        decription: 'Take yourself on a seaside getaway with our Beach House Bouquet. The calming blue hydrangea is the perfect pair for the peach carnations and roses. Enjoy the fun lavender button pompons as a colorful contrast to the classic blooms.',
        imageUrl: '/assets/img/products/simpathy/product9.PNG',
        tag: "Sympathy",
      },
      {
        id: 24,
        name: 'Pastel Peace Basket',
        price: 105,
        decription: 'The Pastel Peace Basket is a sweet and simple way to offer your condolences. Lavender roses, fuchsia gerbera daisies, lavender daisies, purple larkspur, purple matsumoto asters, pink mini carnations and lush greens are arranged to perfection in a round whitewash handled basket to create a gift that expresses your wishes for sympathy and peace.',
        imageUrl: '/assets/img/products/simpathy/product10.PNG',
        tag: "Sympathy",
      },
      {
        id: 25,
        name: 'Picnic Tulips',
        price: 70,
        decription: 'Celebrate mom with the classic beauty of our Picnic Tulips. These captivating colors shine brightest in spring around fun birthdays, anniversaries and as a Mothers Day surprise.',
        imageUrl: '/assets/img/products/simpathy/product11.PNG',
        tag: "Sympathy",
      },
      {
        id: 26,
        name: 'Sunshine & Joy Garden',
        price: 65,
        decription: 'The color yellow expresses happiness, imagination and fun, as does this garden! The perfect present for anyone on any occasion, this plant is filled to the brim with smiles. This garden is overflowing with a collection of two yellow Kalanchoes, a golden Pothos and a Croton plant. The flowers may arrive in buds, only to bloom in a short time.',
        imageUrl: '/assets/img/products/simpathy/product12.PNG',
        tag: "Sympathy",
      }
    ]
  }
}
