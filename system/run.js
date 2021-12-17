const fs = require('fs');
const path = require('path');

const templatePath = path.resolve(__dirname, '../template/basic.html')
const dataPath = path.resolve(__dirname, '../data/resume.json')
const outputPath = path.resolve(__dirname, '../public/basic.html')

const templateContent = fs.readFileSync(templatePath, 'utf8')
const templateData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// convert 

if (typeof templateData.objective.description === 'string') {
    templateData.objective.description = [templateData.objective.description]
}

const templateFunction = new Function('resume', `
    return \`${templateContent}\`;
`);

fs.writeFileSync(outputPath, templateFunction(templateData));
