// import ProductList from "../components/Products";

import ClientOnly from "../components/ClientOnly";
import ScrollToggleButton from "../components/ScrollToggleButton/ScrollToggleButton";
import SectionFour from "../components/SectionFour/SectionFour";
import SectionOne from "../components/SectionOne/SectionOne";
import SectionThree from "../components/SectionThree/SectionThree";
import SectionTwo from "../components/SectionTwo/SectionTwo";

export default function HomePage() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ClientOnly>
        <ScrollToggleButton />
      </ClientOnly>
    </div>
  );
}
