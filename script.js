
    // Sample arrays of lessons
    const lessonArrays = [
        { name: "Lesson 1", array: 
            [ {greek : "ἀγάπη, ἡ", gloss: "love"},
            {greek : "γῆ ἡ" , gloss: "earth, land, ground (geology)"},
            {greek : "ζωή ἡ", gloss: "life (zoo, zoology)"},
            {greek : "φωνή, ἡ ", gloss: "voice, sound (phonetics, phonograph, phone)"},
            {greek : "ἀλήθεια, ἡ", gloss: "truth"},
            {greek : "ἁμαρτία, ἡ", gloss:  "sin (hamartiology—the theological study of sin)"},
            {greek : "βασιλεία, ἡ" , gloss: "kingdom, reign (basilica)"},
            {greek : "δόξα, ἡ" , gloss: "glory, majesty (doxology)"},
            {greek : "ἐκκλησία, ἡ" , gloss: "congregation, assembly, church (ecclesiastical)"},
            {greek : "ἡμέρα, ἡ" , gloss: "day (ephemeral, “for a day”)"},
            {greek : "καρδία, ἡ", gloss:  "heart (cardiologist)"},
            {greek : "δέ" , gloss: "and, but, now"},
            {greek : "καί" , gloss: "and, even, also"},
            {greek : "μέν" , gloss: "on the one hand, indeed"},
            {greek : "ὁ, ἡ, τό" , gloss: "the"}] 
    },
        { name: "Lesson 2", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 3", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 4", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 5", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 6", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 7", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 8", array: [/* vocabulary for lesson 2 */] },
        { name: "Lesson 9", array: [/* vocabulary for lesson 2 */] },
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

