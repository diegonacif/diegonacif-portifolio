import '../../styles/App.css';

export const AboutMe = () => {
  // Cálculo de idade
  const timeNow = new Date();
  const birth = new Date(1988, 7, 27);
  const age = convertMill(timeNow - birth);

  function convertMill (mSeconds) {
    var checkYear = Math.floor(mSeconds / 31536000000);
    return checkYear;
  }

  return (
    <div className="about-me-container">
      <section>
        <div className="about-me">
          <span>&lt;</span>
          <h2>Sobre mim</h2>
          <span>&gt;</span>
        </div>
        <div className="about-me-text">
          <p>Sou desenvolvedor Front-End buscando minha primeira oportunidade na área.</p>
          <p>Nascido em Belém, tenho {age} anos. Sou apaixonado por tecnologia e tudo que envolve o mundo digital.</p>
        </div>
      </section>
      <div className="my-photo" />
    </div>
  )
}