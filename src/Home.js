import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					src="https://www.swardestoncc.co.uk/wp-content/uploads/2020/05/amazon-smile.jpeg"
					className="home__image"
				/>
				<div className="home__row">
					<Product
						id="1554451"
						title="The lean Startup"
						price={29.99}
						image="https://m.media-amazon.com/images/I/51T-sMqSMiL._AC_SY780_.jpg"
						rating={4}
					/>
					<Product
						id="454545454"
						title="Kenwood kMix Stand Mixer for Baking stylish Kitchen Mixer with K-bealter, Dough Hook and Whisk  "
						price={99.99}
						rating={3}
						image="https://www.seriouseats.com/thmb/hMevGtiDkCJ_k7FUZ9TNq3Ud4Wc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__12__20151201-gift-guide-stand-mixer-1500x1125-712fb32a38d84c8097d3f5ce60ca626b.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="15151650"
						title="Amazon Echo (3rd generation)| Smart Speaker with Alexa, Charcoal Farbric"
						price={98.99}
						rating={3}
						image="https://media.wired.com/photos/5e20f2a09fdee10008c4ce6d/3:4/w_1350,h_1800,c_limit/Gear-Amazon-Echo-Studio-SOURCE-Amazon.jpg"
					/>
					<Product
						id="5555118"
						title="New Apple iPad Pro (12.9-inch, Wifi, 128Gb) - Silver (4th Generation)"
						price={589.99}
						rating={4}
						image="https://static-01.daraz.com.np/p/469772166b1973a1d1647595065d3913.png"
					/>{" "}
					<Product
						id="4522222"
						title="Samsung LC23232323 49' Curved LEd Gaming Monitor - super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={3}
						image="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg"
					/>
				</div>
				<div className="home__row"></div>
				<Product
					id="32322661"
					title="Samsung LC49GR3298 49' Curved Led Gaming Monitor"
					price={199.99}
					rating={5}
					image="https://i.ytimg.com/vi/v9HgRH0AIJA/maxresdefault.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
