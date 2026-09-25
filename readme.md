# CourseGuide

CourseGuide is a free, purely JavaScript-based exam revision platform built to help South African Matriculants prepare for their NSC examinations. It provides up to 200 multiple-choice questions per subject, complete with instant feedback, accurate answers, and concise explanations, to help Grade 12 students revise as adequately as possible for their final exams.

The platform is aligned with the CAPS syllabus used by schools across South Africa. It currently covers six core subjects: Mathematics, Business Studies, Accounting, Physics, Life Sciences, and Geography. Each subject contains up to 200 revision questions that students can work through at their own pace, either in small sets or as a full 200-question revision run.

CourseGuide is free to use and requires no installation. It runs entirely in the browser using pure HTML, CSS, and JavaScript, with no frameworks, no build tools, and no backend. Students simply open the app, log in, and begin revising.

It is important to note that the questions on this platform are not a rip-off from the regulated DBE guidelines, and they are not the actual NSC exam questions. They are original revision questions designed to help students practice the concepts and skills tested in the Matric examinations.

To use the platform, open the project in your browser, log in with the username "learner" and password "learner123", read through the welcome screen, and select a subject to begin. Each quiz gives instant feedback on every answer, along with an explanation, so students can learn as they go. At the end of each quiz, a results screen shows the final score and a full review of every question.

The project is structured for clarity and ease of maintenance. Each subject lives in its own JavaScript file under the js/subjects folder, and the shared quiz engine handles the logic for all subjects. Styles are contained in a single stylesheet that supports two themes: a dark Glassmorphism theme and a light blue theme. The app is fully responsive and works on desktop, tablet, and mobile.

CourseGuide is deployed as a static site and is compatible with platforms such as Vercel and Render. To deploy, simply push the project to GitHub and connect the repository to your chosen hosting platform as a static site.

Contributions are welcome. To add or update questions, open the relevant subject file, follow the existing question format, and submit a pull request. To add a new subject, create a new file under js/subjects, register it in the global registry, and add the subject to the configuration in main.js.

This project is licensed under the MIT License.

All the best with your Matric exams. Study hard, revise smart, and enjoy the journey.