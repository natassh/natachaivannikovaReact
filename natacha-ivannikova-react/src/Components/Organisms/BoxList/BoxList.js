import React from 'react';
import './BoxList.css';
import Box from '../../Molecules/Box/Box';
import AnimatedLogo from '../../Atoms/AnimatedLogo/AnimatedLogo';
import TextOutstanding from '../../Atoms/TextOutstanding/TextOutstanding';

const BoxList = () => {
  return (
    <div className="list-articles">
      <Box
        classAnimation="box-article  animColor animShow animShow3"
        title="Soy"
      >
        Desarrolladora Web <strong>Freelance</strong>.<strong>Mamá</strong> de 2
        mentes inquietas. Mujer y Compañera de mi <strong>alma gemela</strong>.
      </Box>
      <Box classAnimation="box-article animColor animShow" title="¿Qué hago?">
        Desde un diseño realizo toda la maquetación en <strong>HTML5</strong>{' '}
        siendo muy detallista y a un nivel semántico muy optimo para SEO. Si el
        proyecto requiere desarrollo, lo realizo con <strong>WordPress</strong>{' '}
        creando un tema específico desde cero.
      </Box>
      <Box classAnimation="box-article animShow animShow2" title="Trabajo con">
        HTML5 / CSS3 / WordPress / WooCommerce / PHP /Javascript / Pug / Sass /
        Flex-box / Grid / GIT / BEM / Atomic Design
        <TextOutstanding text="Vivo aprendiendo día a día." />
      </Box>
      <Box classAnimation="box-article animShow animShow4" title="¿Qué quiero?">
        Busco Agencias o Diseñadores para <strong>colaborar</strong> en el
        desarrollo de proyectos web. Trabajar <strong>en remoto</strong> para
        una empresa. Maqueto al pixel y desarrollo WordPress{' '}
        <strong>a medida</strong>.
      </Box>
      <Box
        classAnimation="box-article animShow animShow4"
        title="Algunos trabajos con agencias"
      >
        <a
          href="https://www.solarpack.es/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Solarpack
        </a>
        <a
          href="http://www.suminis.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Suminis
        </a>
        <a
          href="https://fundacioneki.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Fundación EKI
        </a>
        <a
          href="https://www.ininser.es/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Ininser S.A
        </a>
        <a
          href="https://forest-trafic.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Forest Trafic S.L
        </a>
        <a
          href="http://www.cafte.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {' '}
          CAF Turnkey & Engineering
        </a>
      </Box>
      <Box
        classAnimation="box-article animShow animShow3"
        title="¿Dónde encontrarme?"
      >
        Teléfono: 644 709 929 Email: natacha.im@gmail.com
      </Box>
      <Box
        classAnimation="box-article animShow animShow4"
        title="También estoy por aquí ..."
      >
        Twitter:{' '}
        <a href="https://twitter.com/natassh" target="_blank">
          @natassh
        </a>
        <a
          href="https://www.linkedin.com/in/natacha-ivannikova-261478113/"
          target="_blank"
        >
          Mi linkedin
        </a>
        GitHub:{' '}
        <a href="https://github.com/natassh" target="_blank">
          natassh
        </a>
      </Box>
      <Box classAnimation="box-article animShow animShow4" title="Me gusta">
        El trabajo bien hecho, cumplir los tiempos, ayudar a mi cliente, ser
        puntual, facilitar la vida en lo que pueda, tener confianza mutua,
        compartir valores, trabajar en equipo, positivismo. Y sobre todo ...
        <TextOutstanding text="Disfrutar trabajando." />
      </Box>

      <AnimatedLogo />
    </div>
  );
};

export default BoxList;
