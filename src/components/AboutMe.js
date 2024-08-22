import React from "react"
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className="about">
      <header>
        <h3>O mnie...</h3>
      </header>
      <p>
        Cześć! Mam na imię <span className="important">Antoni</span> i jestem
        studentem{" "}
        <span className="important">
          informatyki praktycznej na Uniwersytecie Gdańskim
        </span>
        . Od zawsze pasjonuję się matematyką i z przyjemnością pomagam innym ją
        zrozumieć. Moje doświadczenie pozwala mi efektywnie przekazywać wiedzę,
        niezależnie od stopnia trudności materiału. <br />
        Maturę z matematyki{" "}
        <span className="important">rozszerzonej zdałem na 100%</span> , co jest
        dowodem na moje umiejętności i dogłębną znajomość tematu. Wierzę, że
        każdy może zrozumieć matematykę i osiągnąć w niej sukces – wystarczy
        praca i odpowiednie wsparcie, które z radością Ci zapewnię!
      </p>
    </div>
  )
}

export default AboutMe
