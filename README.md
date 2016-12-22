# CV

A simple, modern CV / resume template. Click [here](http://www.smddzcy.com/cv/) to see an example.

## Creating Your CV

(You need `npm` in order to build the project. If it's not installed, install npm from [here](https://www.npmjs.com/get-npm))

1. Install the dependencies:
   ```
   npm install
   ```

2. Fill in the `.json` files in `src/html/contents` with your information. 

3. Run `grunt build` and get your fresh CV in the HTML format from `index.html`.

If you want it in the PDF format, you can print the page as a PDF, just like I do all the time. (*Just do not use Chrome to print, that has some real problems with printing*)

**Note:** `src/html/contents/color_palette.json` contains the color settings of your CV. There are some fixed set of colors, and you can look at your options from that file (`colorOptions` field) or [here](https://raw.githubusercontent.com/smddzcy/cv/master/dist/img/color-palette.jpg) or `dist/img/color-palette.jpg` file.

## Contributing

1. Fork the repo (By clicking the `"Fork"` button on the upper-right side of the page)
2. Clone the repo (`git clone https://github.com/-YOUR NAME-/cv.git`)
3. Install the dependencies with `npm install`.
4. Run `grunt` and keep it open while making your changes. Please keep the default JSON files while contributing, since I serve my CV to some places directly from this repo.
6. When you're finished; run `grunt build`, commit (`git commit -am "YOUR COMMIT MESSAGE"`) and push (`git push`) your changes.
7. Make a pull request, from [here](https://github.com/smddzcy/cv/compare).

You can pick one of the TODO's below and start contributing right away. Thank you so much!

## TODO

- [ ] Carets on descriptions should be removed (or they should be optional), they're too distracting when the content is dense.
- [ ] "Honors & Awards" part should definitely have descriptions.
- [ ] Documentation for color palette (`src/html/contents/color_palette.json`)
- [ ] Element ordering - Places of the elements should be changed easily
- [ ] Font size - Font size should be optional, not hard-coded

## License

MIT
