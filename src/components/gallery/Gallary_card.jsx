import React from "react";
import "./gallary.scss";
const Gallary_card = (props) => {
  return (
    <>
 
      <figure class="image-block figure-css m-3">
	<h1 className="px-2 text-uppercase">{props.title}</h1>
	<img src={props.imagesrc} alt="" />
	<figcaption>
		<h3>
			More Info
		</h3>
		<p>{props.desc} </p>
		{	props.date}
	</figcaption>
</figure>
    </>
  );
};

export default Gallary_card;
