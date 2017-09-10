# Resume Builder 

A simple resume build system using mustache template engine

# install 
```
git clone https://github.com/easylogic/resume 
cd resume 
npm install 
``` 

# build 

```
npm run build 
```

# Add Npm Script 

build basic template with data/resume.json 

```
    "scripts" : {
        "basic": "mustache data/resume.json template/basic.mustache > public/basic.html"
    }
    
```

# Template 

## Basic 

