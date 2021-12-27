import React from "react";

interface Props {
  src: string;
  alt: string;
}

const CenteredImage = ({ src, alt }: Props) => {
  return (
    <p style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
      <img alt={alt} src={src} />
    </p>
  );
};

export default CenteredImage;
