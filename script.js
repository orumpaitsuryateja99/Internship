// window.addEventListener('DOMContentLoaded', function () {
//     const classContainer = document.getElementById('class-container');
//     console.log(classContainer);
// });


//task1
/*const classNames = [
    "Yoga",
    "Pilates",
    "Zumba",
    "Spin",
    "HIIT",
];


const container = document.querySelector(".class-container");

classNames.forEach(className => {
    const heading = document.createElement("h2");
    heading.textContent = className;
    container.appendChild(heading);
});*/

//task2


// const container = document.querySelector(".class-container");

// const classNames = [
//     {
//         name: "Yoga",
//         timing: "9:00 AM - 10:00 AM"
//     },
//     {
//         name: "Zumba",
//         timing: "11:00 AM - 12:00 PM"
//     },
//     {
//         name: "Pilates",
//         timing: "2:00 PM - 3:00 PM"
//     }
// ];

// // Updated code to generate HTML elements for class names and timings

// for (var i = 0; i < classNames.length; i++) {
//     var classObject = classNames[i];
//     var className = classObject.name;
//     var classTiming = classObject.timing;

//     // Create a div for the class name
//     var classNameWrapper = document.createElement("div");
//     classNameWrapper.classList.add("class-name");

//     var classElement = document.createElement("h2");
//     classElement.textContent = className;
//     classNameWrapper.appendChild(classElement);

//     // Append the class name div to the container
//     container.appendChild(classNameWrapper);

//     // Create a div for the class timing
//     var classTimingWrapper = document.createElement("div");
//     classTimingWrapper.classList.add("class-timing");

//     var timingElement = document.createElement("p");
//     timingElement.textContent = "Timing: " + classTiming;
//     classTimingWrapper.appendChild(timingElement);

//     // Append the class timing div to the container
//     container.appendChild(classTimingWrapper);
// }

// console.log(container);

// task - 3

// const container = document.querySelector(".class-container");
// var classNames = [
//     {
//         name: 'Yoga',
//         timing: '9:00 AM - 10:00 AM',
//         instructor: 'Jane Doe'
//     },
//     {
//         name: 'Zumba',
//         timing: '10:30 AM - 11:30 AM',
//         instructor: 'John Smith'
//     },
//     {
//         name: "Pilates",
//         timing: "2:00 PM - 3:00 PM",
//         instructor: 'john johan'
//     },
//     // Add more class entries if needed
// ];

// // Locate the section where you're creating HTML elements for class names and timings
// for (var i = 0; i < classNames.length; i++) {

//     var classObject = classNames[i];
//     var className = classObject.name;
//     var classTiming = classObject.timing;
//     var classInstructorName = classObject.instructor;



//     // Create a div for the class name
//     var classNameWrapper = document.createElement("div");
//     classNameWrapper.classList.add("class-name");

//     var classElement = document.createElement("h2");
//     classElement.textContent = className;
//     classNameWrapper.appendChild(classElement);

//     // Append the class name div to the container
//     container.appendChild(classNameWrapper);




//     // Create a div for the class timing
//     var classTimingWrapper = document.createElement("div");
//     classTimingWrapper.classList.add("class-timing");

//     var timingElement = document.createElement("p");
//     timingElement.textContent = "Timing: " + classTiming;
//     classTimingWrapper.appendChild(timingElement);

//     // Append the class timing div to the container
//     container.appendChild(classTimingWrapper);




//     // Create a div for the class instructor
//     var classInstructorNameWrapper = document.createElement("div");
//     classInstructorNameWrapper.classList.add("class-instructor");

//     var InstructorNameElement = document.createElement("p");
//     InstructorNameElement.textContent = "Instructor: " + classInstructorName;
//     classInstructorNameWrapper.appendChild(InstructorNameElement);

//     // Append the class timing div to the container
//     container.appendChild(classInstructorNameWrapper);

// }
// console.log(container);


//task-4
document.addEventListener('DOMContentLoaded', function () {
    // Find all toggle buttons
    var toggleButtons = document.querySelectorAll('.toggle-button');

    // Add click event listener to each toggle button
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Find the corresponding additional details element
            var details = button.nextElementSibling;

            // Toggle the visibility of additional details
            if (details.style.display === 'none') {
                details.style.display = 'block';
                button.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                button.textContent = 'View Details';
            }
        });
    });
});
