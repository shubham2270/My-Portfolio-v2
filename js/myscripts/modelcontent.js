webProjectData = [{
    id: 0,
    imageUrl: './data/images/websites/smart-brain.jpg',
    description: 'Smart-Brain is a full-stack web application that detects face on any image using a Machine Learning API. It has a UI built with React, a RESTful Node/Express server and a PostgreSQL database. It lets users have thier own accounts through the Sign-Up and Sign-In features.',
    siteLink: 'https://smartbrain-front.herokuapp.com/'

},
{
    id: 1,
    imageUrl: './data/images/websites/cat-finder.jpg',
    description: 'Cat Pics Finder is a image API based pic finder website for finding Cat pictures in different image formats : jpeg, png and gif, created using HTML, CSS and Javascript',
    siteLink: 'https://shubham2270.github.io/cat-finder/'

},
{
    id: 2,
    imageUrl: './data/images/websites/astro.jpg',
    description: 'Astro World is a astrology themed website created by just using HTML and CSS 3',
    siteLink: 'https://shubham2270.github.io/astro-website/'

},
{
    id: 3,
    imageUrl: './data/images/websites/robo.jpg',
    description: 'RoboFriends is a React app where random images of robots are fetched using API and have search functionality for searching robots with Name and Email-id',
    siteLink: 'https://shubham2270.github.io/robofriends/'

},
{
    id: 4,
    imageUrl: './data/images/websites/realestate.jpg',
    description: 'A RealEstate responsive website created using Bootstrap 4 ',
    siteLink: 'https://shubham2270.github.io/realestate-website/'

},
{
    id: 5,
    imageUrl: './data/images/websites/onlinestore.jpg',
    description: 'A simple e-commerce website using HTML, CSS and Bootstrap. ',
    siteLink: 'https://shubham2270.github.io/online-store/'

},
{
    id: 6,
    imageUrl: './data/images/websites/watch.jpg',
    description: 'TimePiece is a watch store website created as a project work for my web development course. Created using HTML, CSS, Bootstrap.',
    siteLink: 'https://shubham2270.github.io/watch-website/'

},
{
    id: 7,
    imageUrl: './data/images/websites/backgroundgenerator.jpg',
    description: 'Background-generator is a random gradient color generator using HTML, CSS, JavaScript',
    siteLink: 'https://shubham2270.github.io/Background-generator/'

},
];

const openModelButton = document.getElementsByClassName('openModel');
const webProjectArea = document.getElementById('webProjects');

// Renders div for each website
webProjectArea.innerHTML = `
    ${webProjectData.map((item) => {
       return `<div class="col-md-3 col-sm-3 col-xs-6">
             <div class="websites"> 
                 <img src="${item.imageUrl}" alt="" class="img-responsive">
                <div class="img-overlay">
                    <a href="" target="_blank" class=" openModel animated">View Details</a>
                </div>
             </div>
         </div>`
    }).join('')}
   `




//Loops through list of buttons and display details corresponding to that website (button)
Array.from(openModelButton).forEach((item, index) => {

    const renderCorrespondingDetails = () => {
        //Matches the data id with index of website div. for displaying details corresponding to that div
        const result = webProjectData.find((items) => {
            return items.id === index
        })

        modelContent.innerHTML = `
        <div class="close-model">+</div>
        <img src="${result.imageUrl}" class="img-responsive" alt="face recognition app">
        <div class="model-wrapper">
        <div class="details">${result.description}</div>
        <a href="${result.siteLink}" target="_blank" class="model-btn">View Live</a>`;

        //Close the model window on clicking cross and add/remove the animate css class
        const close = document.getElementsByClassName('close-model')[0];
        const closeModel = () => {
            modelContent.classList.add('bounceOutUp');
            navbar.style.transform = 'translateY(0px)';

            setTimeout(() => {
                bgModel.style.display = 'none'
                modelContent.classList.remove('bounceOutUp');
            }, 500)
        }
        //Close the model window on clicking outside the model window and add/remove the animate css class
        const closeModelOnClickingOutside = (event) => {
            if (event.target == bgModel) {

                modelContent.classList.add('bounceOutUp');
                navbar.style.transform = 'translateY(0px)';

                setTimeout(() => {
                    bgModel.style.display = 'none'
                    modelContent.classList.remove('bounceOutUp');
                }, 500)

            }
        }

        close.addEventListener('click', closeModel);
        window.addEventListener('click', closeModelOnClickingOutside);
    }
    item.addEventListener('click', renderCorrespondingDetails)

})