# portfolio
Hosts my portfolio designed in React and maintained and deployed on guthub (Planned to be deployed on Azure DevOps) .

Following is the structure of Application :

Src/index.html - has a div with id "root" .

index.js - imports the App component , calls getelementbyId for the root id in index.html and renders the App component in that div.

landingpage.js - has the main code with all content and styling .

Commands ------------------
npm install - to install dependencies from package.json
npm run build - build the react app
npm start - start the app on localhost 
npm run deploy - to deploy the code on gh-pages as specified in pacakage.json -- Basically this deploy pushes the build artifact folder of react app i.e. build/static in a branch called gh-pages and creates and hosts it .
Can be accessed at url - https://udaybuilds.github.io/portfolio/
