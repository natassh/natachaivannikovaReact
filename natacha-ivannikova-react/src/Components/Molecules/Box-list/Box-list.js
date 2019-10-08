import React from 'react';
import './Box-list.css';
import Box from '../../Organisms/Box/Box';
import AnimatedLogo from '../../Organisms/Animated-logo/Animated-logo';

const BoxList = () => {
  return (
    <div className="list-articles">
      <Box
        classAnimation="box-article  animColor animShow animShow3"
        title="Soy"
        children={
          <>
            <p className="box-article__paragraph">
              Desarrolladora Web <strong>Freelance</strong>.
            </p>
            <p className="box-article__paragraph">
              <strong>Mamá</strong> de 2 mentes inquietas.
            </p>
            <p className="box-article__paragraph">
              Mujer y Compañera de mi <strong>alma gemela</strong>.
            </p>{' '}
            <strong className="box-article__strong"></strong>
          </>
        }
      />
      <Box
        classAnimation="box-article animColor animShow"
        title="¿Qué hago?"
        children={
          <>
            <p class="box-article__paragraph">
              Desde un diseño realizo toda la maquetación en{' '}
              <strong>HTML5</strong> siendo muy detallista y a un nivel
              semántico muy optimo para SEO.
            </p>
            <p class="box-article__paragraph">
              Si el proyecto requiere desarrollo, lo realizo con{' '}
              <strong>WordPress</strong> creando un tema específico desde cero.
            </p>
            <strong class="box-article__strong"></strong>
          </>
        }
      />
      <Box
        classAnimation="box-article animShow animShow2"
        title="Trabajo con"
        children={
          <>
            <p class="box-article__paragraph">
              {' '}
              HTML5 / CSS3 / WordPress / WooCommerce / PHP /Javascript / Pug /
              Sass / Flex-box / Grid / GIT / BEM / Atomic Design
            </p>
            <strong class="box-article__strong">
              Vivo aprendiendo día a día.
            </strong>
          </>
        }
      />
      <Box
        classAnimation="box-article animShow animShow4"
        title="¿Qué quiero?"
        children={
          <>
            <p class="box-article__paragraph">
              Busco Agencias o Diseñadores para <strong>colaborar</strong> en el
              desarrollo de proyectos web.
            </p>
            <p class="box-article__paragraph">
              Trabajar <strong>en remoto</strong> para una empresa.
            </p>
            <p class="box-article__paragraph">
              Maqueto al pixel y desarrollo WordPress <strong>a medida</strong>.
            </p>
            <strong class="box-article__strong"></strong>
          </>
        }
      />
      <Box
        classAnimation="box-article animShow animShow4"
        title="Algunos trabajos con agencias"
        children={
          <>
            <p class="box-article__paragraph">
              {' '}
              <a
                href="https://www.solarpack.es/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Solarpack
              </a>{' '}
            </p>
            <p class="box-article__paragraph">
              {' '}
              <a
                href="http://www.suminis.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Suminis
              </a>{' '}
            </p>
            <p class="box-article__paragraph">
              {' '}
              <a
                href="https://fundacioneki.org/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Fundación EKI
              </a>{' '}
            </p>
            <p class="box-article__paragraph">
              {' '}
              <a
                href="https://www.ininser.es/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Ininser S.A
              </a>{' '}
            </p>
            <p class="box-article__paragraph">
              {' '}
              <a
                href="https://forest-trafic.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Forest Trafic S.L
              </a>{' '}
            </p>
            <p class="box-article__paragraph">
              {' '}
              <a
                href="http://www.cafte.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {' '}
                CAF Turnkey & Engineering
              </a>{' '}
            </p>
            <strong class="box-article__strong"></strong>
          </>
        }
      />
      <Box
        classAnimation="box-article animShow animShow3"
        title="¿Dónde encontrarme?"
        children={
          <>
            <p class="box-article__paragraph"> Teléfono: 644 709 929 </p>
            <p class="box-article__paragraph"> Email: natacha.im@gmail.com </p>
            <strong class="box-article__strong"></strong>
          </>
        }
      />
      <Box
        classAnimation="box-article animShow animShow4"
        title="También estoy por aquí ..."
        children={
          <>
            <p class="box-article__paragraph">
              Twitter:{' '}
              <a href="https://twitter.com/natassh" target="_blank">
                @natassh
              </a>{' '}
            </p>
            <p class="box-article__paragraph">
              <a
                href="https://www.linkedin.com/in/natacha-ivannikova-261478113/"
                target="_blank"
              >
                Mi linkedin
              </a>{' '}
            </p>
            <p class="box-article__paragraph">
              GitHub:{' '}
              <a href="https://github.com/natassh" target="_blank">
                natassh
              </a>{' '}
            </p>
            <strong class="box-article__strong"></strong>
          </>
        }
      />
      <Box
        classAnimation="box-article animShow animShow4"
        title="Me gusta"
        children={
          <>
            <p class="box-article__paragraph">
              El trabajo bien hecho, cumplir los tiempos, ayudar a mi cliente,
              ser puntual, facilitar la vida en lo que pueda, tener confianza
              mutua, compartir valores, trabajar en equipo, positivismo. Y sobre
              todo ...{' '}
            </p>
            <strong class="box-article__strong">Disfrutar trabajando.</strong>
          </>
        }
      />
      <AnimatedLogo />
    </div>
  );
};

export default BoxList;
