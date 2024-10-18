import { Fade, Zoom  } from "react-awesome-reveal";

export const About = () => {
    return (
        <>
            <div className="mx-6 max-w-[1000px] text-center">
            <h3 className="font-bold text-2xl mb-4">Acerca de mi ...</h3>
            <Fade duration={1600}>
            <Zoom duration={600}>
                <p>Soy un apasionado del desarrollo web, enfocado en fusionar creatividad y funcionalidad. A lo largo de mi carrera, he liderado equipos, destacando por mi comunicación efectiva y mi capacidad para gestionar proyectos en entornos ágiles. Disfruto convertir ideas abstractas en experiencias que conectan con las personas. Valoro la colaboración y el aprendizaje continuo, y siempre estoy explorando nuevas tecnologías para mantenerme al día en este campo en constante evolución.</p>
                </Zoom>
                </Fade>
            </div>

        </>
    );
};
