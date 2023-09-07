import "./Subscribe.css";
function Subscribe() {
  return (
    <>
      <div className="subscribe">
        <div className="left" data-aos="fade-left" data-aos-delay="500">
          <p className="heading">
            Stay in <span>the loop</span>
          </p>
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating Artmint.
          </p>
        </div>
        <div className="right" data-aos="fade-right" data-aos-delay="600">
          <form>
            <input type="text" placeholder="Enter email address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
