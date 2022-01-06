import React from "react";

interface Props {
  src: string;
  alt: string;
  width?: number | string;
}

const CenteredImage = ({ src, alt, width }: Props) => {
  return (
    <p style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
      <img alt={alt} src={src} style={{ width }} />
    </p>
  );
};

export default CenteredImage;
