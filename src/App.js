import React from 'react';

import Presentation from './Presentation';
import Publication from './Publication';

class App extends React.Component {
render() {
return (
  <div className="flex-container">
    <section id="research_interest">
      <h2>
        <a href="#research_interest">
          <i className="fa fa-search"></i>Research Interest
        </a>
      </h2>
      <ul className="fa-ul">
        <li><i className="fa-li fa fa-star"></i>Quantum information</li>
        <li><i className="fa-li fa fa-star"></i>Quantum measurement theory</li>
      </ul>
    </section>
    <Publication />
    <Presentation />
    <section id="cv">
      <h2>
        <a href="#cv">
          <i className="fa fa-graduation-cap"></i>CV
        </a>
      </h2>
      <h3>Curriculum Vitae</h3>
      <h4>Education</h4>
      <table>
        <tbody>
          <tr><th>2015/04-<wbr />Present</th><td>Quantum Physics Group, Department of
              Engeneering, Kyoto University, Japan</td></tr>
          <tr><th>2011/04-<wbr />2015/03</th><td>Faculty of Engineering, Kyoto
              University, Japan (Bachelor of Engineering)</td></tr>
          <tr><th>2008/04-<wbr />2011/03</th><td>Rakunan High School</td></tr>
        </tbody>
      </table>
      <h3>Staff</h3>
      <ol reversed="reversed">
        <li>Condensed Matter Physics Summer School, Organizer</li>
        <li>
          <a href="http://yagura.scphys.kyoto-u.ac.jp/wakate/" target="_blank" rel="noreferrer noopener">
            Quantum Information Kansai Student Chapter
          </a>
          Assistant Representative</li>
        <li>
          <a href="http://yagura.scphys.kyoto-u.ac.jp/wakate/index.php?%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B#pc58040a" target="_blank" rel="noreferrer noopener">
            Quantum Information Kansai Student Chapter 18th</a> Organizer</li>
      </ol>
      <h3>Qualifications</h3>
      <ul className="fa-ul">
        <li>Applied Information Technology Engineer Examination</li>
      </ul>
    </section>
    <section id="contact">
      <h2>
        <a href="#contact">
          <i className="fa fa-envelope-o"></i>Contact
        </a>
      </h2>
      <table>
        <tbody>
          <tr><th>Name</th><td>Ikko Hamamura</td></tr>
          <tr><th>E-mail</th><td> hamamura[*atmark*]<wbr />nucleng<wbr />.kyoto-u.ac.jp</td></tr>
          <tr><th>Office</th><td> d1N01, Graduate School of Engineering,<wbr /> Kyoto Univ., C3 Bld., C Cluster Kyoto daigaku-katsura,<wbr /> Nishikyo-ku, Kyoto 615-8540 Japan</td></tr>
        <tr><th>Phone</th><td> +81-75-383-3910(d1N01)</td></tr>
      </tbody>
    </table>
  </section>
  <section>
    <h2>
      <a href="index_ja.html"><i className="fa fa-language"></i>Japanese</a>
    </h2>
  </section>
  <section>
    <img src={process.env.PUBLIC_URL + '/img/ikkoham.jpg'} alt="ホームページの中の人の画像" />
  </section>
</div>
    );
}
}

export default App;