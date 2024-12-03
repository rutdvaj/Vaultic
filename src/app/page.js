import Image from "next/image";
import { MarqueeDemo } from "./testcomps/marq";
import { FloatingDockDemo } from "./testcomps/float";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { HoverBorderGradientDemo } from "./testcomps/hover";

export default function Home() {
  return (
    <div className="">
      
      <MarqueeDemo />
      <HoverBorderGradientDemo />
    </div>
  );
}
