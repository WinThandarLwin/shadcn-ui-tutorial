import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h2>ようこそ！プログラミングチュートリアル！！</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tempore fuga veritatis exercitationem eius deleniti cum amet!
          Architecto eos, cupiditate quidem sed nemo quasi ex nostrum laudantium
          natus et ab.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Button>Click Here</Button>
        <Button>Click Here</Button>
      </div>
    </main>
  );
}
