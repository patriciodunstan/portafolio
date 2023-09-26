import Image from 'next/image';

function About() {
  return (
    <>
      <div className="text-center">
        <h1 className="flex justify-content items-center mb-4 text-5xl text-center font-sans font-bold">
          Acerca de mi
        </h1>
      </div>
      <div id="About" className="flex flex-col lg:flex-row">
        <div className="relative flex flex-start justify-center items-center lg:w-1/2 h-[600px]">
          <Image
            src="/foto.jpeg"
            alt="Imagen About"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col top-0 lg:w-1/2 p-4">
          <h2 className="top-0 flex flex-row text-3xl text-black font-sans font-bold">
            <strong>Desarrollador Front end react-Nextjs y TailwinCSS</strong>
          </h2>
          <p className="flex flex-wrap justify-center font-sans text-xl">
            Mi nombre es Patricio Dunstan, soy ingeniero mecánico en maquinaria
            y también estoy estudiando técnico informática. Tengo experiencia
            como desarrollador front-end utilizando React-Nextjs y TailwinCSS,
            ademas de utilizar metodologia scrum y utilizando herramientas como
            jira, git y github
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
