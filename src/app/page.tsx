import Image from "next/image";
import { CustomButton } from "./components/button";
import { CustomCard } from "./components/card";
import { EditOutlined } from "@ant-design/icons";
import { CustomModal } from "./components/modal";

export default function Home() {
  const texts = "Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?"
  const text1 = "This is a squirrel."
  return (
    <div>
      <div className="p-5">
        <CustomButton label="Button" icon={<EditOutlined />} />
      </div>
      <div className="p-5 flex flex-wrap gap-2">
        <CustomCard title="Title" subtitle="Subtitle" paragraph={texts} img="/images/test.png"/>
        <CustomCard title="This is a really long title test for testing the line." subtitle="Subtitle" paragraph={texts} img="/images/test1.jpg"/>
      </div>
      <div>
        <CustomModal title="Title" paragraph="bhjewlvbHfelv dbehjwbhdjewf dbhewjlvfhebvjf"/>
      </div>
    </div>
  );
}
