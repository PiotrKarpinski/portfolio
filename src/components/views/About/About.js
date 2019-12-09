import React from 'react';
import styles from './About.module.scss';
import './theme.scss';
import ReactHtmlParser from 'react-html-parser';


const button = React.createRef();
var style;	
const cardLinks = 'Here, you can find more informations about me and my job qualifications: <br/> <li class=cardLink><a rel="noopener noreferrer" href=https://github.com/PiotrKarpinski target="_blank">GitHub</a></li><li class=cardLink><a rel="noopener noreferrer" href=https://www.linkedin.com/in/pgmkarpinski/ target="_blank">LinkedIn</a></li>'

function handleClick() {

	button.current.classList.contains('clicked') ?
    style =  {}
    : style = {transform: 'rotate3d(1,1,1,360deg)', WebkitTransform: 'rotate3d(1,1,1,360deg)'};

	button.current.classList.toggle('clicked');



    return style;
	}


const About = ({color, reverseCard, card}) => (



  <div className={`component ${color}`}>
   <div className={styles.container}>
   <div className={styles.image}>
   </div>
  <div className={styles.wrapper} style={style}>
  <div className={styles.info}>
  <h2 className={styles.title}>Hello, my name is<br /> Piotr Karpiński</h2>
  <p className={styles.text}>{ReactHtmlParser(card)}</p>
  </div>
  <div className={styles.click}>
  <button ref={button} onClick={e => 
       { 	button.current.classList.contains('clicked') ?
 reverseCard('I am young and promising Front-end Developer who has solid foundation and constant will to gain knowledge. Currently, I am looking for work in Wrocław. You can contact with me via email. I also invite you to take a look at my GitHub and LinkedIn profiles.')
  : reverseCard(cardLinks); handleClick();}} className={styles.link}>C<br />L<br />I<br />C<br />K</button>
  </div>  

  </div>  

  </div>
  </div>

)

export default About;