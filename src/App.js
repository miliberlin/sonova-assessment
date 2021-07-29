import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import InfoPanel from "./components/InfoPanel";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Hero />
      <Benefits />
      <InfoPanel
        topic="scooter"
        text={[
          "convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac",
          <br></br>,
          <br></br>,
          "iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper",
          <br></br>,
          <br></br>,
          "ac ut consequat semper viverra nam libero justo laoreet sit amet cursus",
        ]}
      />
      <div className="btn-wrapper side-padding">
        <Button btnTxt="at consectetur lorem" />
      </div>
      <InfoPanel
        topic="office"
        text={[
          "viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut",
          <br></br>,
          <br></br>,
          "vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur",
          <br></br>,
          <br></br>,
          "quam elementum pulvinar etiam non quam lacus suspendisse faucibus",
        ]}
      />
      <section id="list" className="side-padding">
        <ul>
          <ListItem text="fermentum dui faucibus in ornare quam viverra orci sagittis" />
          <ListItem text="consequat ac felis donec et odio pellentesque diam" />
          <ListItem text="ultrices gravida dictum fusce ut placerat orci" />
        </ul>
        <div className="guarantee">
          <div className="seals">
            <img src="/images/guarantee-service.png" alt="" />
            <img src="/images/guarantee-price.png" alt="" />
            <img src="/images/guarantee-satisfaction.png" alt="" />
          </div>
          <Button btnTxt="massa enim nec dui" />
        </div>
      </section>
    </div>
  );
}

export default App;
