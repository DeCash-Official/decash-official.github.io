import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Transparency",
    image: "/img/blockchain.webp",
    description: (
      <>
        DeCash tokens are built on top of blockchains, which are publicly
        accessible and auditable. Additionally, DeCash performs{" "}
        <Link to="https://www.decash.com/transparency/">
          quarterly attestations
        </Link>{" "}
        of its reserves.
      </>
    ),
  },
  {
    title: "Stability",
    image: "/img/tokens.webp",
    description: (
      <>
        DeCash tokens display like for like value of the respective fiat
        currency on the blockchain, with the stability of every token being
        backed 1:1 by assets held in secure reserve accounts.
      </>
    ),
  },
  {
    title: "Trust",
    image: "/img/exchanges.webp",
    description: (
      <>
        DeCash is an BVI Crypto-Financial Services Company which has helped
        shape the vibrant and innovative Blockchain Ecosystem in Europe.{" "}
        <Link to="https://www.decash.com/who-we-are/">Read more</Link> about the
        team behind DeCash.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div
        className="text--center"
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
