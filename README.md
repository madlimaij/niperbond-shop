# Projekti loomine

Loo desktopile uus kaust Niperbond

Ava sama folder VS Code’is

# Reacti ja typescripti installimine kingapoe projekti

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
`git remote add origin https://github.com/madlimaij/Shoebert.git` (lisatud githubi repo link)
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

# Komponendid

Teha src kausta folder components, kuhu sisse luua vastavad .tsx failid (button, cart, listcard, footer, landingbody, log inbox, registerbox, navbar jne)

# Fotod

Teha src kausta folder images, kuhu laadida Figmast fotod, logo jne

# Kujundus

Teha src kausta folder theme ja sinna sisse fail index.ts, kuhu koondada kogu kujundus (colors, spacing, transition, typography).
Kasutada kujundamiseks createUseStyles.

# Leheküljed ja navigeerimine

Luua src kausta folder pages, kus ära määratleda veebilehe pea- ja alamlehed (LandingPage.tsx jne).
Lisaks tee folder routes ja sinna sisse fail NavigationPath.tsx

# Arendamine meeskonnas

Samal ajal on võimalik arendada meeskonnas projekti erinevaid komponente. Selleks tegime VS Code’is järgmised sammud:

Ole "main" kaustas, ava VS’is terminal ja tee git pull; (tõmbab githubist alla viimase koodi versiooni)
Loo "main" kaustas olles uus branch (Create new branch) ja asu sellel branchil;
Hakka arendama, kui valmis, pushi üles (loodud branchil asudes), vajutades VS Source Control tabi alt Staged Changes, message väljale sõnum ja Commit & Push;
Enne, kui arendamist jätkad, mine uuesti "main" kausta;
Tee git pull.
Loo "main" kaustas UUS branch, ära vali varasemalt loodud branchi.
Hakka arendama ja pushi üles, kui valmis ja siis hakka algusest peale.

Juhul kui peale pushimist tekib githubis konflikt, sest kaks arendajat on teinud muudatusi samasse faili, lahenda see enne githubis mergemist VS Code’is ,võrreldes tehtud muudatusi.

