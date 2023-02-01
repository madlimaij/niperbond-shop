# Shoebert

Kingapood
VS Code uus folder

# Reacti ja typescripti installimine Shoebert poe projekti

`npx create-react-app shoebert --template` typescript

# edasi liigu projekti kausta sisse kasutades

`cd .\shoebert\`

# Käivita react brauseris (avab lehe localhost:3000)

`npm start`

# Kustuta ebavajalikud kaustad ja failid (nt public kaustas jääb alles favicon ja index.html(kust maha kommentaarid))

# Pane projektile pealkiri

public/index.html failis lisa title "Shoebert"

# reacter-router-dom installimine

`npm i react-router-dom`

# Projektis kasutada CSS

`npm i react-jss`

# Installi hook useForm jaoks (ankeedid inputiga)

npm i react-hook-form

# VSi projekti koodi ühendamine githubi repoga

`git init`
`git remote add origin http://github.com/pallliisi/Shoebert.git` (lisatud githubi repo link)
`git branch -M main`

...

# React apile fondi lisamine:

-mine https://fonts.google.com/,
-leia sobiv font, kliki peale
-vajuta parempoolsele ikoonile, et tekiks sidebar "selected family"
-vali alt stiil (nt "Regular 400")
-kopeeri kõik lingid, mis paremalt kastikesest leiad

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
-lisa lingid public/index.html lehe "head"-sektsiooni
-lisa index.css faili selektorile "body,html" CSS-i reegel: "font-family: "JetBrains Mono", monospace" (leiad google fontsist)
