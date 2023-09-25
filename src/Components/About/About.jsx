import Image from 'next/image';

function About() {
  return (
    <>
      <h1 className="flex justify-content items-center mb-4 text-5xl">About</h1>
      <div
        id="About"
        className="flex flex-col lg:flex-row justify-center items-center"
      >
        <div className="lg:w-1/2 p-4">
          <Image src="/foto.jpeg" alt="Imagen About" width={600} height={400} />
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="top-0">About me</h2>
          <p>Texto sobre About</p>
        </div>
      </div>
    </>
  );
}
export default About;
