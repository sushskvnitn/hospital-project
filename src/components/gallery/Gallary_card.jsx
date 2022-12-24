import React from "react";
import "./gallary.scss";
const Gallary_card = (props) => {
  return (
    <>
 
      <figure class="image-block figure-css m-3">
	<h3 className="px-2 text-uppercase">{props.title}</h3>
	<img src={props.imagesrc} alt="" />
	<figcaption>
		<h5>
			More Info
		</h5>
		<p>{props.desc} </p>
	</figcaption>
</figure> 
    </>
  );
};

export default Gallary_card;
