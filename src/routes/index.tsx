import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import heroImage from "@/assets/maison-hero.jpg";
import storyImage from "@/assets/maison-story.jpg";
import teaImage from "@/assets/maison-tea.jpg";
import galleryImage from "@/assets/maison-gallery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Aurelia | Royal Afternoon Tea Salon" },
      { name: "description", content: "A candlelit salon for crafted coffee, rare tea, pâtisserie, private gatherings, and royal afternoon tea." },
      { property: "og:title", content: "Maison Aurelia | Royal Afternoon Tea Salon" },
      { property: "og:description", content: "Where every cup is an occasion. Discover an old-world salon for afternoon tea, gifting, and private gatherings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaisonAurelia,
});

const menu = [
  { title: "Signature Coffees", items: [["Aurelia Gold", "Espresso, orange blossom, gilt chocolate", "12"], ["The Marquise", "Velvet flat white, Madagascan vanilla", "11"], ["Nocturne", "Single-origin pour over, cacao nib", "14"]] },
  { title: "Rare Teas", items: [["First Flush Darjeeling", "Muscatel, rose, a lingering finish", "16"], ["Jasmine Silver Needle", "Hand-rolled pearls, soft florals", "18"], ["Aurelia Breakfast", "Assam, Ceylon and bergamot", "12"]] },
  { title: "Pastries & Pâtisserie", items: [["Pistachio Religieuse", "Praline cream, candied pistachio", "16"], ["Tarte Aurelia", "Dark chocolate, fig, sea salt", "17"], ["Vanilla Mille-Feuille", "Caramelised pastry, Tahitian vanilla", "15"]] },
  { title: "Afternoon Tea Service", items: [["The Royal Service", "Four tiers with a rare tea pairing", "78"], ["The Salon Service", "Three tiers with house tea", "62"], ["The Little Marquis", "A considered service for younger guests", "34"]] },
  { title: "Savory Plates", items: [["Truffled Croque", "Comté, brioche, black truffle", "24"], ["Smoked Trout Tartine", "Horseradish cream, dill, rye", "22"], ["Wild Mushroom Vol-au-Vent", "Madeira, thyme, cultured cream", "26"]] },
];

function MaisonAurelia() {
  const [scrolled, setScrolled] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submit = (message: string) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(message);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`site-header ${scrolled ? "site-header-solid" : ""}`}>
        <a href="#top" className="brand" aria-label="Maison Aurelia home"><span className="crest">MA</span><span>Maison Aurelia</span></a>
        <nav aria-label="Main navigation">
          <a href="#story">Story</a><a href="#menu">Menu</a><a href="#experience">Afternoon Tea</a><a href="#space">The Space</a><a href="#events">Events</a><a href="#visit">Visit</a>
        </nav>
        <a className="gold-button compact" href="#reservation">Reserve</a>
      </header>

      <main>
        <section id="top" className="hero">
          <img src={heroImage} width={1920} height={1088} alt="A candlelit salon set for afternoon tea" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content">
            <span className="hero-monogram" aria-hidden="true">MA</span>
            <p className="eyebrow">Afternoon Tea · Gifting · Private Gatherings</p>
            <h1>Maison Aurelia</h1>
            <p className="tagline">Where every cup is an occasion</p>
            <a className="gold-button" href="#reservation">Reserve a Table</a>
          </div>
        </section>

        <section id="story" className="section editorial-grid">
          <div className="arched-frame"><img src={storyImage} width={1024} height={1280} loading="lazy" alt="Tea poured from an antique brass pot" /></div>
          <div className="story-copy">
            <p className="eyebrow">Our Story</p>
            <h2>A salon kept like a <em>family letter.</em></h2>
            <span className="short-rule" />
            <p>Maison Aurelia was founded around a simple belief: hospitality should feel personal, never hurried. Our rituals honour old-world craft, from the measured pour to the folded linen.</p>
            <p>Every table is set as though it were the only one. Every pastry is finished by hand. Every gathering is received with quiet care.</p>
          </div>
        </section>

        <section id="menu" className="section light-section">
          <div className="section-heading split-heading"><div><p className="eyebrow">The Menu</p><h2>Printed fresh, <em>each morning.</em></h2></div><p className="menu-note">A considered collection for every hour</p></div>
          <div className="menu-grid">
            {menu.map((category) => <article className="menu-category" key={category.title}><h3>{category.title}</h3><ul>{category.items.map(([name, description, price]) => <li key={name}><div className="menu-line"><strong>{name}</strong><span /><b>{price}</b></div><p>{description}</p></li>)}</ul></article>)}
          </div>
        </section>

        <section id="experience" className="section editorial-grid reverse">
          <div className="experience-copy"><p className="eyebrow">Signature Experience</p><h2>The Royal Afternoon <em>Tea.</em></h2><span className="short-rule" /><p>A four-tier service presented on gold-rimmed porcelain, composed around the season and concluded with an unhurried pot of tea.</p><ul className="included"><li>Three savoury compositions</li><li>Four pâtisserie pieces</li><li>Warm scones and preserves</li><li>Two rare tea pours</li></ul><div className="experience-action"><a className="gold-button" href="#reservation">Book the Experience</a><span><strong>78</strong> per guest</span></div></div>
          <div className="arched-frame"><img src={teaImage} width={1024} height={1280} loading="lazy" alt="Royal afternoon tea served on four tiers" /></div>
        </section>

        <section id="space" className="section gallery-section">
          <div className="section-heading"><p className="eyebrow">The Space</p><h2>A room kept <em>in low light.</em></h2></div>
          <div className="gallery"><figure className="gallery-main"><img src={galleryImage} width={1920} height={1280} loading="lazy" alt="The grand salon with velvet seating and chandeliers" /></figure><figure><img src={storyImage} width={1024} height={1280} loading="lazy" alt="A close view of the tea ritual" /></figure><figure><img src={teaImage} width={1024} height={1280} loading="lazy" alt="Gold-rimmed porcelain afternoon tea" /></figure></div>
        </section>

        <section id="events" className="section events-grid">
          <div><p className="eyebrow">Private Events & Gifting</p><h2>Gatherings, <em>kept private.</em></h2><span className="short-rule" /><p>Bridal showers, birthdays, corporate teas and intimate celebrations are composed around you. Our gift boxes are curated and wrapped by hand.</p><div className="event-list"><div><strong>Salon Gatherings</strong><span>Private service for eight to forty guests</span></div><div><strong>Luxury Gifting</strong><span>Tea, porcelain and pâtisserie, beautifully presented</span></div></div></div>
          <form className="dark-form" onSubmit={submit("Your private enquiry has been received.")}><p className="eyebrow">Make an Enquiry</p><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Occasion<select name="occasion"><option>Bridal shower</option><option>Birthday gathering</option><option>Corporate tea</option><option>Luxury gifting</option></select></label><label>Your wishes<textarea name="message" rows={3} placeholder="Tell us about the occasion" /></label><button className="gold-button" type="submit">Send Enquiry</button></form>
        </section>

        <section className="section testimonials"><p className="eyebrow">Guest Words</p><div>{["The most considered afternoon I have had in years. Every detail felt intentional.", "Our gathering felt entirely our own — gracious, warm and beautifully paced.", "A gift from Maison Aurelia is the only one for which I have kept the box."].map((quote, index) => <blockquote key={quote}><p>“{quote}”</p><cite>{["Eleanor V.", "The Hartley Family", "C. Beaumont"][index]}</cite></blockquote>)}</div></section>

        <section id="visit" className="section light-section visit-grid">
          <div><p className="eyebrow">Visit Us</p><h2>Find us in the <em>old quarter.</em></h2><span className="short-rule" /><dl><dt>Address</dt><dd>14 Rue des Lanternes, Old Quarter</dd><dt>Opening Hours</dt><dd>Tuesday–Sunday · 12:00–22:00</dd><dt>Telephone</dt><dd><a href="tel:+00000000000">+00 000 000 000</a></dd></dl><div className="map-placeholder" role="img" aria-label="Map placeholder for Maison Aurelia"><span>MA</span><p>14 Rue des Lanternes</p></div></div>
          <form id="reservation" className="reservation-form" onSubmit={submit("Your reservation request has been received.")}><p className="eyebrow">Reserve a Table</p><label>Name<input required name="name" placeholder="Your name" /></label><div className="form-row"><label>Date<input required name="date" type="date" /></label><label>Time<input required name="time" type="time" /></label></div><label>Guests<select name="guests"><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6 guests</option></select></label><label>Special requests<textarea name="requests" rows={3} placeholder="Dietary needs or occasion" /></label><button className="gold-button navy-button" type="submit">Request Reservation</button></form>
        </section>
      </main>

      <footer><div className="footer-brand"><span className="crest">MA</span><h2>Maison Aurelia</h2><p>A candlelit salon for considered gatherings.</p></div><form className="newsletter" onSubmit={submit("You are now on the Maison Aurelia list.")}><label htmlFor="newsletter">Receive invitations to our seasonal tastings</label><div><input id="newsletter" required type="email" placeholder="Your email address" /><button type="submit">Join</button></div></form><div className="footer-bottom"><span>© 2026 Maison Aurelia</span><span><a href="#top">Instagram</a> · <a href="#top">Pinterest</a></span></div></footer>
      <a className="mobile-reserve" href="#reservation">Reserve a Table</a>
      {notice && <div className="toast" role="status"><span>{notice}</span><button type="button" onClick={() => setNotice("")} aria-label="Dismiss notification">×</button></div>}
    </div>
  );
}