# Test Napptilus Oompa Loompa

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm start
```
### Launches the test runner in the interactive watch mode.
```
npm test
```
### Compiles and minifies for production
```
npm run build
```
### Description of project

This project has the basics of React, including some external libraries from different authors, mentioned in the final section. It's my personal test/project to validate my knowledge/skills and get a job as a front-end developer at Napptilus tech labs.

### Semantic Commit Messages

This commit semantics is a personal implementation based on git flow

- FEAT: (new feature for the user and build script)
- FIX: (bug fix for the user and build script)
- DOCS: (changes to the documentation readme)
- STYLE: (styles, create/change classes names, formatting, missing semicolons, spaces in blanc, etc...)
- REFACTOR: (refactoring production/develop code, for example; renaming a variable)
- TEST: (adding missing tests, refactoring tests; no production code change)
- RELEASE: version closure (component, section or project)

## Conclusion and points to consider

After hours of work and study, I consider I have reached the mvp for successfully obtaining this test. I have learned a lot, I am happy with the work done and I am looking forward to having more similar challenges.
Many thanks to Napptilus tech labs for this incredible opportunity, I hope you like it.
Next I will briefly explain the points to take into account, errors and possible solutions:

```
▪ Point number 1 - Infinite scroll:

  I have considered not adding the infinite scroll due to an error in the loading of the next page, the error was that the scroll only reached page number 2 or 3  and did not advance further. I thoroughly investigated this bug and after many hours, the best solution was to add pagination with buttons, as this functionality had the expected behavior.
```

```
▪ Point number 2 - Request every 24 hours:

  After a long evaluation and for reasons of available time, I consider not to implement this functionality. 
  In the following I will briefly detail how I would do it: 

   Once the request is obtained, I would store this data in an array that I would compare when performing a new query, if the data exists in the storage, I do not perform the request and get the information from this storage, if the data does not exist, I would perform the request to store the new information. 
   Once I have the data complete, I would only make the query every 24 hours to check if new data is available.
```

```
▪ Point number 3 - Error when searching by gender:

  When we search for men, some characters appear that are women. 
  This is because the first or last name of these characters contains the word 'man' and therefore they appear in the search.
```

```
▪ Point number 4 - Double request error in the query:

  Due to the architecture of the project, there is a double request for the end-point data, which is not reflected in the views, since the first request replaces the second and only shows one.

  In summary:
   1 - React is loaded.
   2 - WorkersListPage is painted
   3 - Redux must be updated
   4 - WorkersListPage is repainted

  Possible solutions:
   1 - Implement request every 24 hours
   2 - Component life cycles
```

### Technologies/methodologies used

- BEM
- SASS
- Bootstrap
- Redux
- Thunk

### Libraries and external docs

```
normalize.css
Author: Nicolas Gallagher
```

```
node-sass
Author: Sass
```

```
bootstrap
Author: Bootstrap
```

```
react-bootstrap
Author: React-bootstrap
```

```
react-router-dom
Author: Remix
```

```
redux, reduxjs/toolkit, react-redux and redux-thunk
Author: Redux
```

```
redux-devtools-extensio
Author: Mihail Diordiev
```

```
axios
Author: Axios
```

```
react-loading
Author: Fakiolas Marios
```


