import Image from "next/image";

export default function PastProducts() {
const products = [
  {
    name: "Cosmetics Pouch",
    description: "A handmade cosmeticspouch from the Millicent archive.",
    image: "/images/cosmetics-pouch.png",
  },
  {
    name: "Engagement Banner",
    description: "A custom piece made to celebrate a special occasion.",
    image: "/images/engagement-banner.png",
  },
  {
    name: "Quilted Clutch Bag",
    description: "A quilted handmade clutch from the Millicent archive.",
    image: "/images/fold-up.png",
  },
  {
    name: "Embroidered Bridal Lounge Set",
    description: "A handmade embroidered lounge set created for a bride, or maybe just for you",
    image: "/images/lounge-set.png",
  },
  {
    name: "Photo Album",
    description: "A handmade album created to hold all your precious memories.",
    image: "/images/photo-album.png",
  },
  {
    name: "Lace Poncho",
    description: "A cutie lace poncho from the Millicent archive.",
    image: "/images/shawl.png",
  },
  {
    name: "Silk Bag",
    description: "A handmade silk bucket bag.",
    image: "/images/silk-bag.png",
  },
  {
    name: "Hand-Beaded Tie",
    description: "A hand-beaded statement piece from the Millicent archive.",
    image: "/images/tie.png",
  },
  {
    name: "Striped Tote",
    description: "A handmade striped tote available again by request.",
    image: "/images/tote-bag.png",
  },
  {
    name: "Wedding Album",
    description: "A handmade album created so you don't forget a thing about that day.",
    image: "/images/wedding-album.png",
  },
];
      return (
    <main className="past-products">
      <section className="past-products-intro">
        <p className="past-products-kicker">The Millicent Archive</p>

        <h1>Past Products</h1>

        <p>
          Things we've made before, and would love to make again
        </p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-image">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
              />
            </div>

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <a
  href="https://forms.gle/x5qGHUaEczuopxAr5"
  target="_blank"
  rel="noopener noreferrer"
  className="product-request-button"
>
  Request This Again →
</a>
          </article>
        ))}
      </section>

      <section className="past-products-footer">
        <p className="past-products-kicker">
          Don't see quite what you're looking for?
        </p>

        <h2>Let's create something perfect.</h2>

        <p>
          We love creating things just for you.
        </p>

        <a
  href="https://forms.gle/x5qGHUaEczuopxAr5"
  target="_blank"
  rel="noopener noreferrer"
  className="product-request-button"
>
  Start an Order →
</a>
      </section>
    </main>
  );
}