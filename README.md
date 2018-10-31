# CV

[![Build Status](https://travis-ci.org/smddzcy/cv.svg?branch=master)](https://travis-ci.org/smddzcy/cv)
[![Build status](https://ci.appveyor.com/api/projects/status/nyqpn4ax25rkw1yf?svg=true)](https://ci.appveyor.com/project/Samed15956/cv)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://raw.githubusercontent.com/smddzcy/cv/master/LICENSE)

A simple, modern CV / resume template. Click [here](http://www.smddzcy.com/cv/) to see an example.

## Creating Your CV

(You need `npm` in order to build the project. If it's not installed, install npm from [here](https://www.npmjs.com/get-npm))

1. Install the dependencies:
   ```
   npm install
   ```

2. Fill in the `.json` files in `src/contents` with your information. [Click here to find out how to fill those files.](#filling-your-information)

3. Run `grunt build` and get your fresh CV in the HTML format from `dist/index.html`.

If you want it in the PDF format, you can print the page as a PDF from your browser, just like I do all the time.

**Note:** `src/contents/color_palette.json` contains the color settings of your CV. There is a fixed set of colors, and you can look at your options from that file (`colorOptions` field) or [here](https://raw.githubusercontent.com/smddzcy/cv/master/src/img/color-palette.jpg) or `src/img/color-palette.jpg` file.

## Filling Your Information

### personal_info.json
```
  {
    "name": "Hakan Turgay",
    "profession": "Software Engineering",
    "summary": "A confident, self-motivated and self-taught software engineer with 5 years of experience in back-end and front-end web development. A deep researcher and a passionate learner in every aspect of his life, with good analytical and verbal skills.",
    "mail": "hakantrg@outlook.com",
    "address": {
      "title": " Istanbul, TURKEY"
    },
    "personal_site": {
      "title": "",
      "url": ""
    },
    "github": {
      "title": "github.com/turgayh",
      "url": "https://github.com/turgayh"
    },
    "linkedin": {
      "title": "linkedin.com/in/hakan-turgay",
      "url": "https://www.linkedin.com/in/hakan-turğay"
    },
    "hackerrank": {
      "title": "hackerrank.com/hakantrg1",
      "url": "https://www.hackerrank.com/hakantrg1"
    },
    "google_analytics": "UA-11122333-4"
  }
```

Every field is optional, except `name` and `profession`. Also, you can include a photo with a `photo` field like this:

```
  {
    ... ,
    "photo": "src/photo.png OR A URL TO YOUR PHOTO"
  }
```

### experiences.json
```
[{
  "company": "ITU Cekirdek",
  "role": "Web Developer",
  "date": "07/2015 - 09/2015",
  "location": "Istanbul, Turkey",
  "description_bullets": [
    "Full-stack web development using modern technologies: HTML5, LESS, AngularJS",
    "Working in a team-based development environment using agile methodologies like Kanban and Scrum."
  ]
}, {
  ...
}]
```

You can also use `"description"` instead of `"description_bullets"` with a simple text value like:

```
[{
  "company": "Pisano",
  "role": "Software Engineer",
  "date": "06/2016 - Present",
  "location": "Istanbul, Turkey",
  "description": "Full-stack web development using modern technologies: HTML5, LESS, AngularJS, CoffeeScript, Ruby on Rails. Working in a team-based development environment using agile methodologies like Kanban and Scrum."
}, {
  ...
}]
```

Or you can use both, it's up to you.

`date`, `location`, `description` and `description_bullets` fields are optional.

### education.json
```
  [{
    "name": "Boğaziçi University",
    "degree": "B.S. Computer Engineering",
    "date": "09/2015 - Present",
    "description": "GPA: 3.67/4. Member of <a href=\"http://compec.boun.edu.tr/\" target=\"_blank\">COMPEC (Boğaziçi University IT Club)</a> and <a href=\"http://www.budak.boun.edu.tr\" target=\"_blank\">BÜDAK (Boğaziçi University Mountaineering Club)</a>."
  }, {
    ...
  }]
```

As you can see, **HTML is allowed inside description values**.

`date` and `description` fields are optional.

### skills.json
```
  [
    "Full-Stack Web Development",
    "Object-Oriented Analysis, Design, Programming (OOA/OOD/OOP)",
    "Algorithm Design and Analysis",
    ...
  ]
```

### projects.json
```
  [{
    "name": "BounCoursePlanner",
    "description": "Course schedule planner for Boğaziçi University students. Finds the best schedule, which has the less conflicts and most free hours they want.",
    "github": "https://github.com/smddzcy/BounCoursePlanner",
    "link": "http://www.smddzcy.com/BounCoursePlanner/"
  }, {
    ...
  }]
```

`github` and `link` fields are optional.

### certificates.json
```
  [{
    "title": "Adwords Certification",
    "authority": "Google",
    "date": "10/2015 - 10/2016",
    "description": "License: <a href=\"https://www.google.com/partners/?hl=tr#i_profile;idtf=108560574407568073059;\" target=\"_blank\">108560574407568073059</a>"
  }, {
    ...
  }]
```

`date` and `description` fields are optional.

### volunteering_experiences.json
```
  [{
    "organization": "Boğaziçi University, Entrepreneurship Center",
    "role": "Full Stack Developer",
    "date": "09/2016 - Present",
    "location": "Istanbul, Turkey",
    "description": "Volunteer member of the development team. Actively working on several projects as the key team member."
  }, {
    ...
  }]
```

You can use `description_bullets` instead of `description` just like in the `experiences.json`.

`date`, `location`, `description` and `description_bullets` fields are optional.

### honors.json
```
  [{
    "title": "Comodo Hackathon - 1st Place",
    "date": "12/2016",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    ...
  }]
```

`date` and `description` fields are optional.

### languages.json
```
  [{
    "name": "Turkish",
    "level": "Native"
  }, {
    "name": "English",
    "level": "C2, Proficient"
  }, {
    ...
  }]
```

`level` field is optional.

## Contributing

1. Fork the repo (By clicking the `"Fork"` button on the upper-right side of the page)
2. Clone the repo (`git clone https://github.com/-YOUR NAME-/cv.git`)
3. Install the dependencies with `npm install`.
4. Run `grunt` and keep it open while making your changes. Please keep the default JSON files while contributing, since I serve my CV to some places directly from this repo.
6. When you're done, commit (`git commit -am "YOUR COMMIT MESSAGE"`) and push (`git push`) your changes.
7. Make a pull request, from [here](https://github.com/smddzcy/cv/compare).

You can pick one of the TODO's below and start contributing right away. Thank you so much!

## TODO

- [ ] Element ordering - Places of the elements should be changed easily

## License

MIT
