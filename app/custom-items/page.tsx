import Image from "next/image";

export default function CustomItems() {
  return (
    <main className="custom-items">
     <section className="custom-items-intro">

  <div className="custom-items-title-row">

    <Image
      src="/textures/embellishments/foil-star-left.png"
      alt=""
      width={300}
      height={300}
      className="custom-title-star"
    />

    <div>
      <p className="custom-items-kicker">Made Just For You</p>

      <h1>Custom Items</h1>
    </div>

    <Image
      src="/textures/embellishments/foil-star-right.png"
      alt=""
      width={300}
      height={300}
      className="custom-title-star"
    />

  </div>

  <p>
    Have something hiding in the back of your closet? Or an idea that
    doesn't exist yet? We'd love to make something perfect for you.
  </p>

  <div className="custom-items-divider">

  <p className="custom-items-tagline">
    Let us make something unnecessary for you.
  </p>

  <Image
    src="/textures/embellishments/angel-decor.png"
    alt=""
    width={900}
    height={250}
    className="angel-decor"
  />

</div>

</section>

      <section className="custom-items-content">
        <div className="custom-items-card">

          <p className="custom-items-card-kicker">
            ✦ Meet your creative accomplice ✦
          </p>

          <h2 className="custom-items-conner-title">
  Conner, our founder & creative extraordinaire
</h2>

          <p>
            Conner is a thrifting and thrift-flipping queen. She loves finding
            the potential in things that other people might pass by, and
            turning them into something completely new and beautiful.
          </p>

          <p>
            Have something you've thrifted but don't quite love? Bring it to
            us. Maybe it's the perfect fabric with the wrong shape, a vintage
            piece that needs a little something, or an object that's just
            waiting for a second life.
          </p>

          <p>
            Or, if you have something entirely new in mind, we can create it
            from scratch. Tell us what you're dreaming up and we'll figure out
            the rest together.
          </p>

          <div className="custom-items-inspiration">

            <p className="custom-items-card-kicker">
              ✦ Need a little inspiration? ✦
            </p>

            <h2>Take a peek at our archive.</h2>

            <p>
              Visit our <a href="/past-products">Past Products</a> page to see
              some of the things we've made before. See something you love?
              We can make it again, create a customized version, or use it as
              the starting point for something entirely you.
            </p>

          </div>

                   <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeMQew4HQqp9vwRQYRrrH78XX1P2s1Ak1G1wnPMA-UmT9ZP2w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-items-button"
          >
            Tell Us What You're Thinking →
          </a>

          <Image
            src="/textures/embellishments/envelope.png"
            alt=""
            width={300}
            height={300}
            className="custom-items-envelope"
          />

        </div>
      </section>
    </main>
  );
}