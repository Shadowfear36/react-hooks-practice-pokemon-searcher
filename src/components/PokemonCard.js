import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, imgs}) {

  const [displayImage, setDisplayImage] = useState(imgs.front);

  const handleImage = () => {
    if (displayImage === imgs.front){
      setDisplayImage(imgs.back);
    }else {
      setDisplayImage(imgs.front);
    }
  }

  return (
    <Card onClick={handleImage}>
      <div>
        <div className="image">
          <img alt="oh no!" src={displayImage} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
