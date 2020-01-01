import React from "react"

const About = () => {
  const linksHtml = [
    { href: "https://www.twitter.com/corey_mcmahon", innerHtml: "Twitter" },
    { href: "https://www.github.com/coreymcmahon", innerHtml: "GitHub" },
    { href: "https://www.instagram.com/coreyjmcmahon", innerHtml: "Instagram" },
  ].map((l) => (
    <li style={{ display: `inline`, padding: `0`, margin: `0`, marginLeft: (l.innerHtml !== `Twitter` ? `2.5rem` : `0`) }}>
      <a href={ l.href } style={{ textDecoration: `none`, color: `#222`, fontWeight: `700`}}>
        { l.innerHtml }
      </a>
    </li>
  ));

  return (
    <section>
      <h1>CTO, Founder.</h1>
      <p>
        Hey, I'm Corey.
      </p>
      <p>
        I'm an Australian CTO, engineering manager and senior software developer working to build enterprise Software as a Service products.
      </p>
      <p>
        <ul class="social-links"
          style={{
            listStyleType: `none`,
            display: `flex`,
            flexWrap: `wrap`,
            marginLeft: `0`
          }}>
          { linksHtml }
        </ul>
      </p>
    </section>
  )
}

export default About;