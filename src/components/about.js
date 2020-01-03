import React from "react"

const About = () => {
  const linksHtml = [
    { href: "https://www.github.com/coreymcmahon", innerHtml: "GitHub" },
    { href: "https://www.instagram.com/coreyjmcmahon", innerHtml: "Instagram" },
    { href: "https://www.linkedin.com/in/coreyjmcmahon", innerHtml: "LinkedIn" },
    { href: "https://www.twitter.com/corey_mcmahon", innerHtml: "Twitter" },
  ].map((l) => (
    <li style={{ display: `inline`, padding: `0`, margin: `0`, marginLeft: (l.innerHtml !== `GitHub` ? `2.5rem` : `0`) }}>
      <a href={ l.href } style={{ textDecoration: `none`, color: `#222`, fontWeight: `700`}} target="_blank">
        { l.innerHtml }
      </a>
    </li>
  ));

  return (
    <section>
      <h2>CTO, Founder.</h2>
      <p>
        Hi, I'm Corey.
      </p>
      <p>
        I'm an Australian CTO, engineering manager and senior software engineer 
        currently building industry leading ecommerce systems for enterprise brands.
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