Proposed page:
OPENING
   ↓
ROYAL HERO / COUPLE PHOTO
   ↓
INVITATION MESSAGE
   ↓
THE FAMILIES
   ↓
OUR STORY
   ↓
ENGAGEMENT DETAILS
   ↓
COUNTDOWN
   ↓
MEMORIES / GALLERY
   ↓
GOOD TO KNOW
   ↓
RSVP
   ↓
ROYAL FOOTER


---------------------------------------------

wedding-invitation/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── images/
    └── audio/


assets/
├── images/
│   ├── hero.jpg
│   ├── story.jpg
│   ├── gallery-01.jpg
│   ├── gallery-02.jpg
│   ├── gallery-03.jpg
│   ├── gallery-04.jpg
│   ├── gallery-05.jpg
│   └── gallery-06.jpg
│
└── audio/
    └── engagement.mp3

--------------------++++++++++++++++++---------------------------

wedding-invitation/
│
├── index.html
├── styles.css
├── script.js
│
└── assets/
    │
    ├── couple-hero.jpg       ← PLACE COUPLE PHOTO HERE
    ├── story.jpg             ← PLACE STORY PHOTO HERE
    ├── gallery-1.jpg         ← PLACE PHOTO HERE
    ├── gallery-2.jpg         ← PLACE PHOTO HERE
    ├── gallery-3.jpg         ← PLACE PHOTO HERE
    ├── gallery-4.jpg         ← PLACE PHOTO HERE
    ├── gallery-5.jpg         ← PLACE PHOTO HERE
    ├── gallery-6.jpg         ← PLACE PHOTO HERE
    └── music.mp3             ← OPTIONAL: PLACE MUSIC HERE
    └── background-decoration.jpg



When photographs arrive, I recommend changing it to:

clients/
│
├── index.html
├── styles.css
├── script.js
│
└── assets/
    ├── background-decoration.jpg   ← CLIENT'S DECORATION
    ├── couple.jpg                  ← later
    ├── story.jpg                   ← later
    ├── gallery/
    │   ├── photo-1.jpg             ← later
    │   ├── photo-2.jpg             ← later
    │   ├── photo-3.jpg             ← later
    │   ├── photo-4.jpg             ← later
    │   ├── photo-5.jpg             ← later
    │   └── photo-6.jpg             ← later
    └── music.mp3                   ← later

Where to put the real photos
In script.js, these are the important lines:

couplePhoto:
    "assets/couple.jpg",

storyImage:
    "assets/story.jpg",

and:

gallery: [

    "assets/gallery/photo-1.jpg",
    "assets/gallery/photo-2.jpg",
    "assets/gallery/photo-3.jpg",
    "assets/gallery/photo-4.jpg",
    "assets/gallery/photo-5.jpg",
    "assets/gallery/photo-6.jpg"

],

-------------------------------------------------
