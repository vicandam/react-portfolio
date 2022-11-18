import React from "react";
import Title from "../components/Title";
import { stack } from "../components/data";
import { Footer } from "../components";
const About = () => {
  return (
    <>
      <main>
        <section className="about-page">
          <div className="section-center about-center">
            <img
              src="https://gatsby-strapi-portfolio-project.netlify.app/static/7f6c6bd3fbb2b7fb0973fdf4a19cb784/9ee99c0535b015b9ef3ddea80ecb761d.svg"
              alt="portfolio"
              className="about-img-svg"
            />

            <article className="about-text">
              <Title title={"about me"} />
              <p>
                Salvia tousled chambray, shoreditch retro cliche dreamcatcher
                coloring book roof party keffiyeh small batch pork belly
                actually mlkshk shaman. Stumptown typewriter you probably
                haven't heard of them pork belly dreamcatcher umami woke,
                chambray snackwave craft beer. You probably haven't heard of
                them slow-carb trust fund thundercats bespoke live-edge forage
                echo park artisan coloring book. Semiotics af tumblr, health
                goth viral iPhone cold-pressed ugh kogi fanny pack. Photo booth
                3 wolf moon narwhal, marfa lumbersexual taiyaki biodiesel cloud
                bread slow-carb enamel pin stumptown taxidermy food truck 8-bit
                mustache. Pickled next level vaporware, brooklyn af sriracha
                hoodie try-hard flannel slow-carb raw denim.
              </p>
              <div className="about-stack">
                {stack.map((item) => {
                  return <span key={item.id}>{item.title}</span>;
                })}
              </div>
            </article>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
