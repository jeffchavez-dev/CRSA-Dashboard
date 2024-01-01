
    // Sample arrays of lessons
    const lessonArrays = [
        { name: "Lesson 1", array: [/* vocabulary for lesson 1 */] },
        { name: "Lesson 2", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 3", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 3", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 3", array: [/* vocabulary for lesson 2 */] },
        // Add more lessons as needed
    ];


    console.log(lessonArrays)


    // Get the lessons list container
    const lessonsList = document.getElementById("lessonsList");

    // Function to dynamically create lesson elements
    function createLessonElement(lessonName, lessonId) {
        const listItem = document.createElement("li");
        listItem.className = "lesson";
        listItem.id = lessonId;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = lessonId;
        checkbox.value = lessonId;
        checkbox.id = lessonId + "-checkbox"; // Add a unique ID for the checkbox

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = lessonName;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        return listItem;
    }

    // Function to add lessons to the list
    function addLessonsToDOM() {
        lessonArrays.forEach((lesson, index) => {
            const lessonId = `lesson-${index + 1}`;
            const lessonElement = createLessonElement(lesson.name, lessonId);
            lessonsList.appendChild(lessonElement);
        });
    }

    // Call the function to add lessons to the DOM
    addLessonsToDOM();

