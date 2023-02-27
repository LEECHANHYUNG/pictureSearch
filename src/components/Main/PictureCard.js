import React from "react";
import { Button, Card } from "react-bootstrap";

const PictureCard = () => {
  return (
    <Card className="picture-card" style={{ width: "212px" }}>
      <Card.Img
        variant="top"
        src="http://images-assets.nasa.gov/image/iss061e120106/iss061e120106~orig.jpg"
      />
      <Card.Body style={{ width: "212px", padding: "8px 12px" }}>
        <Card.Title
          as="h5"
          className="picture-card-title"
          style={{ marginBottom: "8px" }}
        >
          Soyuz docked on ISS
        </Card.Title>
        <Card.Text className="mb-2 picture-card-date">
          2014-01-30T00:00:00Z
        </Card.Text>
        <Card.Text className="picture-card-description">
          ISS038-E-038300 (30 Jan. 2014) --- Flying over East Asia, an
          Expedition 38 crew member on the International Space Station took this
          night image of the Korean Peninsula. Unlike daylight images, city
          lights at night illustrate dramatically the relative economic
          importance of cities, as gauged by relative size. In this
          north-looking view, it is immediately obvious that greater Seoul is a
          major city and that the port of Gunsan is minor by comparison. There
          are 25.6 million people in the Seoul metropolitan area-more than half
          of South Korea's citizens-while Gunsan's population is 280,000. North
          Korea is almost completely dark compared to neighboring South Korea
          and China. The darkened land appears as if it were a patch of water
          joining the Yellow Sea to the Sea of Japan. The capital city,
          Pyongyang, appears like a small island, despite a population of 3.26
          million (as of 2008). The light emission from Pyongyang is equivalent
          to the smaller towns in South Korea. Coastlines are often very
          apparent in night imagery, as shown by South Korea's eastern
          shoreline. But the coast of North Korea is difficult to detect. These
          differences are illustrated in per capita power consumption in the two
          countries, with South Korea at 10,162 kilowatt hours and North Korea
          at 739 kilowatt hours.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PictureCard;
