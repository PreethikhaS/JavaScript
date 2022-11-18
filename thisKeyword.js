//THIS
//This represents the objects that is executing the current funtion

//If the function is part of object, this references the objec
//If the function is a regular function, this references to global object i.e window object in the browser

//play is a method, in video object. This keyword references the object itself
const video = {
    title: 'a',
    play (){
        console.log(this);
    }
}

video.play();

//stop is the method in video object
video.stop = function(){
    console.log(this);
}

video.stop();



//Regular function and This keywords

//the below function returns a window object
function playVideo(){
    console.log(this);
}
playVideo();

//Constructor function & this keyword
//If we call a funtion with new operater i.e in constructir function, this will reference a new empty object
//For the below function, we get the video object 'A' instead of window object

function Video(title){
    this.title=title;
    console.log(this);
}

const v = new Video("A");

//==================================================//

//Here this.title returns undefined, to solve this we have 2 solutions
// const videos = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title,tag);
//         })
//     }
// }
// videos.showTags();

//Sol:1 Use arrow funtion
// const videos = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags(){
//         this.tags.forEach((tag)=>{
//             console.log(this.title,tag);
//         })
//     }
// }
// videos.showTags();

//Sol:2 
const videos = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this,tag);
        },this);
    }
}
videos.showTags();