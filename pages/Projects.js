export default function Projects(){
    return `
    <div class='projects'>
        <h2>Projects</h2>
        <div class='projects__summary'>
            Over my time in coding I have learned various coding languages and
            programs. Here are some examples to show what I have learned over my
            time as a full stack software developer.
        </div>
        <div class='projects__column'>
            <div class='projects__column_title'>
                <h3>Virtual Pets Amok</h3>
            </div>
            <figure class='projects__column_figure'>
                <img
                class="virtualPetsAmok"
                src="Lee Powell's Portfolio_files\PetsAmok.JPG"
                alt="image of virtual pets amok project"
                />
                <input
                type="button"
                class="projects__column_button"
                value="Virtual Pets Amok Project"
                />
            </figure>
            <br />
            <a
              href="https://github.com/2021-Spring-Part-Time/virtual-pet-leepowe/blob/master/src/main/java/virtual_pet/VirtualPet.java"
              >Virtual Pets Amok project file</a
            >
            <ol class="project__proficiency_list">
              <li class="poject__technology_list">Technology Used</li>
              <ul>
                <li>IntelliJ</li>
                <li>Eclipse</li>
              </ul>
              <li class="project__skills_list">Skills Used</li>
              <ul>
                <li>Conditionals</li>
                <li>Tick Counter</li>
                <li>If/Else Statements</li>
                <li>Do While Loops</li>
                <li>Nested For Loops</li>
                <li>HashMap</li>
                <li>Interfaces</li>
                <li>Abstract Class</li>
                <li>Inheritance</li>
                <li>Encapsolation</li>
                <li>TDD</li>
              </ul>
            </ol>
        </div>
        <div class="projects__column">
            <div class="projects__column_title">
                <h3>MacGyver Foods</h3>
            </div>
            <figure class="projects__column_figure">
                <img
                    class="MacGyverFoods"
                    src="Lee Powell's Portfolio_files\MacGyver Foods.png"
                    alt="Image of MacGyver Foods project"
                />
                <input
                    type="button"
                    class="projects__column_button"
                    value="MacGyver Foods Project"
                />
            </figure>
            <br />
            <a
                href="https://github.com/leepowe/macgyver-foods-repo"
                >MacGyver Foods project file
            </a>
            <ol class="project__proficiency_list">
                <li class="project__technology_list">Technology Used</li>
                    <ul>
                        <li>IntelliJ</li>
                        <li>Visual Studio Code</li>
                        <li>API</li>
                    </ul>
                <li class="project__skills_list">Skills Used</li>
                    <ul>
                        <li>Use existing API</li>
                        <li>Creating an API</li>
                        <li>Add/Remove itmes from an API</li>
                        <li>Creating a login module</li>
                    </ul>
            </ol>
        </div>
        <div class='projects__column'>
            <div class='projects__column_title'>
                <h3>Guessing Game</h3>
            </div>
            <figure class="projects__column_figure">
                <img
                class="guessingGame"
                src="Lee Powell's Portfolio_files\Guessing Game.JPG"
                alt="Image of Guessing Game project"
                />
                <input
                    type="button"
                    class="projects__column_button"
                    value="Guessing Game Project"
                />
            </figure>
            <br />
            <a href="https://github.com/leepowe/guessingGame">
                Guessing Game project file
            </a>
            <ol class="project__proficiency_list">
                <li class="project__technology_list">Technology Used</li>
                    <ul>
                        <li>IntelliJ</li>
                    </ul>
                <li class="project_skills_list">Skills Used</li>
                    <ul>
                        <li>Teamwork</li>
                        <li>Communication</li>
                        <li>Researching</li>
                        <li>Problem Solving</li>
                    </ul>
            </ol>
        </div>
    </div>
    `;
}