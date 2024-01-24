import "./program.css";
import image from "../assets/removebg-preview.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Program() {
  return (
    <div className="program-section">
      <div className="wrapper">
        <div className="card1" style={{ backgroundImage: `url(${image})` }}>
          <div className="title">Membership Program</div>
          <p className="sub-title">
            Be a Vape Pi member and get our special exclusive offers.
          </p>
          <a href="#">View</a>
        </div>
        <div
          className="card2"
          style={{
            backgroundImage: `url("https://theecig.co.uk/cdn/shop/products/voopoo-vape-kit-voopoo-drag-e60-pod-mod-vape-kit-32312192630853_500x500.png?v=1671545640")`,
          }}
        >
          <div className="title-half-2">Devices</div>
          <p className="para">Find the best for you here</p>
          <a href="#" className="arr2">
            <MdKeyboardDoubleArrowRight />
          </a>
        </div>
        <div className="flex">
          <div
            className="card3"
            style={{
              backgroundImage: `url("https://www.vapo.co.nz/cdn/shop/files/V_FLOW_2_KIT_BLK.png?v=1688594412")`,
            }}
          >
            <div className="title-half">Pods</div>
            <p className="para-half">Variety of choices available</p>
            <a href="#" className="arr">
              <MdKeyboardDoubleArrowRight />
            </a>
          </div>
          <div
            className="card4"
            style={{
              backgroundImage: `url("https://www.vapo.co.nz/cdn/shop/files/V_FLOW_2_KIT_BLK.png?v=1688594412")`,
            }}
          >
            <div className="title-half">Disposable</div>
            <p className="para-half">Easy,Clean & superb flavor</p>
            <a href="#" className="arr">
              <MdKeyboardDoubleArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 
 * <div className="item1">
          <img src={image} />
          {/* <h2>Membership Program</h2>
          <p>Be a Vape Pi member and get our special exclusive offers</p>
          <a href="#">View</a> 
        </div>
        <div className="item2">
          <img
            width={300}
            src="https://theecig.co.uk/cdn/shop/products/voopoo-vape-kit-voopoo-drag-e60-pod-mod-vape-kit-32312192630853_500x500.png?v=1671545640"
          />
          {/* <h3>Devices</h3>
          <p className="des">Find the best for you here!</p>
          <a href="#">&gt;</a>
        </div>

        <div className="item3">
          <img
            width={100}
            src="https://theecig.co.uk/cdn/shop/products/voopoo-vape-kit-voopoo-drag-e60-pod-mod-vape-kit-32312192630853_500x500.png?v=1671545640"
          />
          {/* <h3>Devices</h3>
          <p className="des">Find the best for you here!</p>
          <a href="#">&gt;</a>
        </div>

        <div className="item4">
          <img
            width={100}
            src="https://theecig.co.uk/cdn/shop/products/voopoo-vape-kit-voopoo-drag-e60-pod-mod-vape-kit-32312192630853_500x500.png?v=1671545640"
          />
          {/* <h3>Devices</h3>
          <p className="des">Find the best for you here!</p>
          <a href="#">&gt;</a> 
        </div>
 */
