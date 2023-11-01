import { Link, useNavigate } from "react-router-dom";
import adtile3 from "../assets/adtiles/ad-tile3.jpg";
import adtile4 from "../assets/adtiles/ad-tile4.jpg";
import { adTiles } from "../data/heroData";

export const Adtile1 = () => {
  return (
    <div className="mb-16 flex justify-center w-full scale-y-110 lgl:scale-100">
      <Link to="/products/pc-laptop" className="w-full">
        <img src={adtile3} alt="" className="object-contain w-full" />
      </Link>
    </div>
  );
};

export const Adtile2 = () => {
  return (
    <div className="mb-16 flex justify-center w-full scale-y-110 lgl:scale-100">
      <img
        src={adtile4}
        alt=""
        className="object-contain w-full cursor-pointer"
        onClick={() =>
          window.alert(
            "We're experiencing technical difficulties. Please try your request again in a few moments. If the issue persists, contact our support team."
          )
        }
      />
    </div>
  );
};

export const Adtiles = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap mdl:flex-nowrap justify-between mb-16 w-full gap-2">
      {adTiles.map(({ id, adTileURL, adURL }) => (
        <img
          key={id}
          src={adTileURL}
          alt=""
          className="w-full mdl:w-[49%] object-contain cursor-pointer"
          onClick={() => navigate(`${adURL}`)}
        />
      ))}
    </div>
  );
};
