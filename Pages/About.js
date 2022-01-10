export default function About(){
    return`
        <section class='profile' id='aboutMe'>
          <figure>
            <img src="assets/images/Lee Powell.jpg" alt="Lee Powell" class="profile__image">
          </figure>
          <article class="profile__article">
            <h2>Hello, I'm Lee Powell</h2>
            <p>I enjoy developing programs to help automate repitition and 
              simplify life. Programs that I enjoy working on are things to help 
              save time and money in life and business. I am a heavy continuous 
              improvement advocate and I'm always looking for a way to 
              streamline my work and maintain higher quality.
            </p>
          </article>
        </section>
        // make buttons to load individual skill lists.
        <section class='skills'>
          <h3 class='skills__title'>My skills include:</h3>
          <ul class='skills-list'>
            <li class='skills-coding__title'>Coding</li>
            <ul class='skills-coding__list'>
              <li>Batch Script</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Java</li>
              <li>JavaScript</li>
            </ul>
            <li class='skills-professional__title'>Professional</li>
            <ul class='skills-professional__list'>
              <li>Analytical</li>
              <li>Collaboration</li>
              <li>Communication</li>
              <li>Problem Solving</li>
            </ul>
            <li class='skills-personal__title'>Personal</li>
            <ul class='skills-personal__list'>
              <li>Attention To Detail</li>
              <li>Creative</li>
              <li>Negotiation</li>
              <li>Possitive Attitude</li>
            </ul>
          </ul>
        </section>
    `;
}