export default function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <div>
        <span className="eyebrow">Newsletter</span>
        <h2>Never miss a story worth telling.</h2>
        <p>Stay connected with World Crime Net. Receive new investigations, documentaries and stories when they are published.</p>
        <form className="newsletter-form"><input aria-label="Email" type="email" placeholder="Your email address"/><button type="submit">Subscribe</button></form>
        <small>No spam. Unsubscribe anytime. See our Privacy Policy.</small>
      </div>
      <div className="megaphone" aria-hidden="true">◢</div>
    </section>
  );
}
