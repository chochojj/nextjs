import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Hello, Nextjs!</h2>
      <Image src="/carrot.png" width="50" height="50" alt="당근" />
    </>
  );
}
