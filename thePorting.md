# Porting Pokus ca 2016 to Pokus Reloaded 2020

## The beginning

This demo project of the app was ported back in 2017 to create-react-app from the original webpack and node scripts of 2015 (maybe even 2016, uncertain), although the descriptive website showcasing what this device actually is was never included.

So, that's where we begin, adding on the website!

## Step-by-step

### What are all these errors, do I care?

I thought I'd begin by installing `react-router-dom`, as the old website was made with an early version of RRD and I do need routing now that I'm "combining" the website and app!

There's me thinking a `npm install react-router-dom` would work. Hah. A multitude of errors filled my terminal, as well as success messages at the very end telling me it had been added. I don't like a console filled with `node-pre-gyp` errors. Alas, I try something before investigating... I delete `package-lock.json` and `node-modules` seeing as I'll be updating most dependencies and it's just me poking about.

After doing a fresh install and marvelling at the amount of `npm WARN deprecated` and continued problems with `fsevents`, I think briefly about bumping `react-scripts`, `react` and `redux`, seeing as the older dependencies are probably tripping up the newer ones from RRD. RRD probably has later `react` version as a peer dependency. I'm saying probably lots of times because I don't want to put down the time to investigate when I can do something far quicker...

Copy all the files over into a fresh create-react-app project!
Let's do this!

_Although, I was able to confirm that the app still started._

### I don't care! Fresh create-react-app project here we come!

```
mv Pokus pokus_v1
npx create-react-app pokus
cd pokus
npm start
```

Cool, waiting for CRA to finish so I can jump in that directory and dump everything in there...

**Dear god, what have I done, now I've got to combine two legacy.....what about my git history.... BREATH, kick that impostor syndrome in the gut, git repo's are deprecated all the time... you're fine!**.

_Continues listening to crazy goa trance_.

Bang, let's spin this thing up!

Amazing, React logo spinning, we're good to port.

~~I create a workspace so I can have all the directories in the same VSC window.~~

Nope, I copy over the `src` and `public` files from the two old_repo's prefixed with `v1` and `website`.

OK – we're good to actually start copying things into files.

### Copying into the fresh CRA install

I begin with the demo, who's directories are prefixed with `v1`, seeing as it used to be a CRA and completing this step will kind of render me back at the beginning of this step-by-step.

Realise I'm still writing in this document in the `pokus_v1` directory and move it over along with the `README.md`.

Impress myself by remembering how to glob documents properly in zsh.

Right, here I am in the new pokus directory.

I decide to install the latest version of redux and radium first.

I start by moving over everything from the public folder, and just copy-paste the custom fonts into the index.html. Then begin with src. Literally just dragging and dropping and accepting any "are you sure you want to replace blabla", quite a nice approach as I immediatly see what's left to move over and seeing as I've got the CRA started – I can see if something breaks, as well as my own favicon. Neat.

Dear god, I've just come across the "Create a React Redux App" part of the redux documentation which recommends doing;

```
npx create-react-app my-app --template redux
```

Because, "[it] takes advantage of Redux Toolkit and React Redux's intregration with React components".

This calls for an orange, a little annoyance (and much impostor syndrome because I should have been poking about in docs first...), and further thought as to if I should scrap this too and "start over".

I'm back, the orange was rather satisfactory, and yes I will scrap this as it took me about 10-15 minutes including documenting time since `Copying into the fresh CRA install`, besides, it'll be interesting to see what this `--template redux` syntax does.

Moving out this document to my dev directory so I can just dump it into the fresh install after removing this directory (no need for it to stick around as everything was just copied into it anyway before moving things about).

### Here we go again, but with a fresh CRA + Redux install

So, I copy over the app and website src and public directories again, this time I write the `cp` statements in a document in VCS so I can make use of my VCS shortcut skills (like select all instances of...).

Bit of a panic attack comes and goes as the new Redux stuff looks... different. Excuse my language, but what the actual f\*ck, my mind manages to muster as I look into `src/features/counter`. **Whatever, I'm fine, the store setup looks normal and I kinda dig the new syntax**. I briefly look at the Redux Toolkit website and realise I probably didn't need it at all. Fine, so it goes, as my favourite book character would say.

So it goes.

I begin dragging and dropping again.

This time thou, I pause when looking at the actions and reducers directory, needing to figure out what's going on in the new redux style.

...and about 6 hours later, I return to this document, humbled and thoughtful as to what a "quick" porting actually entailed.

### Thoughts and loose ends

I ended up rewriting a lot of things, not just `/reducers` and `/actions` into the `*slice` file notation (which I like, it feels more intuitive and like less boilerplate) but also rewriting `extend React.Component` to pure functions with hooks like `useState`, `useEffect`. Nothing new to me really, as I dabbled with the "new" hooks notation at work last year – but, still, a very enjoyable result.

At this point, there's lots of lose ends, like I started moving things into CSS modules, aka just scoped css which resides next to the component, and I've also left some css-in-js which was written with Radium (to get keyframes working if I recall correctly) because I wanted something working basically and the styles porting is rudimentary.

I realised that I haven't written pure css for years, but that didn't seem to be a problem after a bit of trial and error. Like, I forgot to remove `"` from some of the `font-sizes` and was wondering if my text really was so small... Having a look in dev-tools let me know that the property value was incorrect and I immediatly clocked the misplaced quotes. Ooops...

Having tried `less`, `scss`, `Radium`, `CSS modules` and pure css-in-js, I realised that I'm truely in love with `styled-components` and will go back to it in future projects. Besides, I'm itching to get started with `styled-systems`, which I know pairs well with `styled-components`.

For now, the file structure is embarrasing, I ended up putting everything in src root because the `/feature` structure threw me.

Besides that, I've lost transitions between routes, something I wanted to do in pure-CSS, and couldn't figure out when just mucking about for a couple of minutes so I left that for now as well.

The actual Pokus, the device on the right panel, didn't have a timer on the website either. Now it's the same as the app demo Pokus, aka the center button needs to be clicked for the Pokus to start. Also, double-clicking the panel doesn't fill the viewport – it moves the pokus down a page and fills out... I want it to fill out to the left and over the information panel, I did a quick test with adding a `flex-direction: reverse`, but that didn't at all do what I'd hoped (obviously given a bit of thought, changing the panel ordering would be jerky). I reckon doing this "properly" would take another 20-30 minutes. But, quite unnecessary, so I've just removed the double click behaviour because it does fit better at the demo page.

Now that I've mentioned the demo page, that isn't here either! That'll just have to be viewed in the other repo for now.

Oh yeah – I spent a good long time being extremely confused as I'd found an old version of the website, and thought I'd merely amped up the design in my mind for a while... It took me a good hour to confirm I had the wrong version, and I found an old zipped version in the cloud somewhere. Not cool! I'm glad I've come so far that I put literally everything in my Github private repo's. And I mean everything, I even have my documents folder in a repo.
