export default function Projects(){
    return`
        <h2 class='projects__title'>Projects</h2>
        <sections class='projects' id='projects'>
            <article class='projects__column'>
                <h3 class='projects__column_title'>MacGyver Foods Web App</h3>
                <figure class='projects__column_figure'>          
                    <img src="assets/images/MacGyver Foods.png" alt="MacGyver Foods Website" class="projects__column_image">
                    <a href="https://github.com/leepowe/macgyver-foods-repo">
                        <input type="button" class="projects__column_button" value="MacGyver Foods">
                    </a>
                </figure>
                <a href="https://github.com/leepowe/macgyver-foods-repo">
                    MacGyver Foods Website Repo
                </a>
                <p>
                    We used an existing API, Spoonacular, to create an app that would help 
                    parents to find meals that they can make for their picky eater using the food that they have on hand. 
                    We would create a database based on what foods the user would input into our app and call those food from the api, noting allergens, to add some extra 
                    safety and for the user.  We created a log-in module so that the user could save their information and food on hand.  
                </p>
            </article>
            <article class="projects__column">
                <h3 class="projects__column_title">Virtual Pets Amok</h3>
                <figure class="projects__column_figure">
                    <img src="assets/images/PetsAmok.JPG" alt="Java application for Virtual Pets Amok" class="projects__column_image">
                    <a href="https://github.com/2021-Spring-Part-Time/virtual-pet-leepowe/blob/master/src/main/java/virtual_pet/VirtualPet.java">
                        <input type="button" class="projects__column_button" value="Virtual Pets Amok">
                    </a>
                </figure>
                <a href="https://github.com/2021-Spring-Part-Time/virtual-pet-leepowe/blob/master/src/main/java/virtual_pet/VirtualPet.java">
                    Virtual Pets Amok project file
                </a>
                <p>
                    The virtual pets that we remember from childhood have started to run amok!  Feeding, watering and petting isn't enough now.  It's time to start oiling your 
                    Tomawhoosie pets as mechanical pets join the fun.  Tick counters to keep the fun going even when you're done with the fun.  Hash maps for all your data loving needs. 
                    Interfaces because you always need a blueprint when building your mechanical friend or things might get lost or left out.
                </p>
            </article>
    
            <article class="projects__column">
                <h3 class="projects__column_title">Guessing Game</h3>
                <figure class="projects__column_figure">
                    <img src="assets/images/Guessing Game.JPG" alt="java guessing game app" class="projects__column_image">
                    <a href="https://github.com/leepowe/guessingGame">
                        <input type="button" class="projects__column_button" value="Guessing Game">
                    </a>
                </figure>
                <a href="https://github.com/leepowe/guessingGame">
                    Guessing Game project file
                </a>
                <p>
                    This project is more about team work ability and problem solving as.  This is one of the first projects we worked on in class and 
                    none of us knew eachother and we came from different background and skillsets.  We brought our strenghts together to complete a project 
                    where we didn't know how to complete the goals at hand creating a game that used random number generation and the user had 3 tries to 
                    guess what number was generated.  This is an example of a program that we had not had enough time to complete with our collective 
                    knowledge but through amazing teamwork and perserverance we obtained most goals and a few stretch goals.
                </p>
            </article> 
        </sections>
    `;
}