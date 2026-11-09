# Sonali & Piers Wedding Website

Wedding website for **Sonali Gobin & Piers Kirk**.

**Wedding:** 26–28 June 2027  
**Location:** Mauritius

This guide explains how to edit the website using **Codex**, even if you don't know HTML, CSS, or JavaScript.

---

# How It Works

You don't need to edit the code yourself.

The normal process is:

1. Get the latest website from GitHub.
2. Start the website on your computer.
3. Open the project with Codex.
4. Tell Codex what you want changed.
5. Refresh the browser to see the changes.
6. When you're happy, ask Codex to commit and push the changes.

That's it.

---

# First-Time Setup

You only need to do this once.

## 1. Install Git

Install Git for Windows:

https://git-scm.com/download/win

The default installation options are fine.

---

## 2. Install Python

Install Python 3:

https://www.python.org/downloads/

During installation, make sure:

**Add Python to PATH**

is selected.

---

## 3. Install ChatGPT

Install the ChatGPT desktop application for Windows and sign into your ChatGPT account.

You'll use **Codex** inside ChatGPT to work on the website.

---

## 4. Download the Wedding Website

Open **PowerShell**.

Go to your Documents folder:

```powershell
cd $HOME\Documents
```

Clone the website:

```powershell
git clone https://github.com/piers-kirk/sonali-and-piers-wedding-website.git
```

Enter the project:

```powershell
cd sonali-and-piers-wedding-website
```

You now have your own local copy of the wedding website.

---

# Working on the Website

These are the steps to follow whenever you want to make changes.

## Step 1 — Open PowerShell

Go to the project:

```powershell
cd $HOME\Documents\sonali-and-piers-wedding-website
```

---

## Step 2 — Get the Latest Version

Before making any changes, run:

```powershell
git pull
```

This downloads any changes that have been made since you last worked on the website.

**Always do this before starting.**

---

## Step 3 — Start the Website

Run:

```powershell
py server.py
```

If that doesn't work, try:

```powershell
python server.py
```

The wedding website should automatically open in your browser.

If it doesn't, open:

```text
http://localhost:8000
```

Keep the PowerShell window open while you're working.

---

# Step 4 — Open the Project in Codex

Open ChatGPT and use **Codex**.

Open the local project folder:

```text
sonali-and-piers-wedding-website
```

Codex can now inspect and edit the website files directly.

At the beginning of a session, you can tell Codex:

> Work directly on this wedding website. The local Python development server is already running. When I ask for a change, edit the project files directly. Make sure the website still works after your changes. Do not commit or push anything unless I explicitly ask you to.

After that, just tell Codex what you want.

---

# Making Changes

You don't need to describe changes technically.

For example:

> Make our names larger on the homepage.

> Make the green section a little lighter.

> I don't like the spacing between these cards. Make them closer together.

> Make this section look more elegant.

> Add this photo to the wedding section.

> Move the RSVP button higher.

> This doesn't look good on my phone. Fix the mobile layout.

> Make this look more like this screenshot.

You can also give Codex screenshots or images to show it what you mean.

Codex will edit the HTML, CSS, or JavaScript for you.

---

# Seeing the Changes

After Codex makes a change, go back to the website in your browser and refresh the page:

```text
Ctrl + R
```

The Python server does **not** need to be restarted.

The process is simply:

```text
Tell Codex what you want
        ↓
Codex edits the website
        ↓
Refresh the browser
        ↓
See the change
        ↓
Ask for another change
```

You can repeat this as many times as you want.

---

# Don't Like a Change?

Just tell Codex.

For example:

> I don't like that. Undo the changes you just made.

or:

> Go back to how this section looked before the last change.

You can experiment locally without immediately changing the public website.

---

# Adding Photos

Website images should be placed in:

```text
assets/images/
```

For example:

```text
assets/
└── images/
    ├── hero.jpg
    ├── mehendi.jpg
    ├── wedding.jpg
    └── reception.jpg
```

You can give an image to Codex and tell it where you want the image used.

For example:

> Use this as the background image at the top of the website.

or:

> Replace the reception image with this photograph.

Codex can update the website code accordingly.

---

# Before Publishing Changes

When you're happy with the website, ask Codex:

> Review all of the changes we've made. Check that the website still works and show me a summary of what changed. Do not commit or push yet.

Look at the website one more time.

If everything looks correct, tell Codex:

> Commit these changes and push them to GitHub.

Codex can then handle the Git commands for you.

You may need to sign into GitHub the first time you push from your computer.

---

# Important: Pull Before You Start

Both Sonali and Piers can work on the website.

Because of this, **always run**:

```powershell
git pull
```

before starting a new editing session.

This makes sure you're working with the latest version.

If Git reports a conflict or error, don't try to guess how to fix it.

Copy the error into Codex and ask it to help.

---

# Important: Don't Push Until You're Happy

Changes made locally are only on your computer.

This means you can experiment freely.

The public website won't receive those changes until they are committed and pushed to GitHub.

A good workflow is:

```text
PULL
  ↓
START SERVER
  ↓
EDIT WITH CODEX
  ↓
REFRESH & REVIEW
  ↓
COMMIT
  ↓
PUSH
```

---

# Finishing for the Day

When you're finished:

1. Make sure any changes you want to keep have been committed and pushed.
2. Go back to the PowerShell window running the server.
3. Press:

```text
Ctrl + C
```

The local website server will stop.

---

# Starting Again Later

The next time you want to work on the website:

```powershell
cd $HOME\Documents\sonali-and-piers-wedding-website
git pull
py server.py
```

Then open the project in Codex.

That's the normal everyday workflow.

---

# Project Structure

The project looks like this:

```text
sonali-and-piers-wedding-website/
│
├── index.html      ← main wedding page (celebrations, travel, FAQ, RSVP)
├── explore.html    ← Explore Mauritius: nine days out and more things to do
├── food.html       ← Eat Mauritius: dishes, drinks, where to eat, markets
├── style.css       ← styles for index.html
├── explore.css     ← styles for explore.html
├── food.css        ← styles for food.html
├── script.js       ← countdown, RSVP message, departures board, FAQ tabs, island map
├── server.py
├── README.md
│
└── assets/
    └── images/
        ├── hero.jpg
        ├── palm-left.jpg
        ├── palm-right.jpg
        └── rsvp-bg.jpg
```

The illustrations on the cards are drawn in SVG inside the HTML files.

You generally don't need to edit these files yourself.

Codex can do that for you.

---

# Quick Reference

### Start working

Open PowerShell:

```powershell
cd $HOME\Documents\sonali-and-piers-wedding-website
git pull
py server.py
```

Then open the project in Codex.

### Make changes

Tell Codex what you want in normal language.

After each change:

```text
Ctrl + R
```

in the browser.

### Publish

Tell Codex:

> Review my changes before publishing.

Then, once you're happy:

> Commit and push these changes to GitHub.

### Stop working

In the PowerShell window:

```text
Ctrl + C
```

---

# If Something Goes Wrong

Give the error to Codex.

For example:

> I got this error when I tried to start the website. Figure out what's wrong and fix it.

or:

> The website stopped working after the last change. Inspect the project and fix the problem.

or:

> Git won't let me pull/push. Explain the problem and help me fix it.

You don't need to troubleshoot the code yourself.

---

# The Short Version

Every time you work on the website:

**Pull → Start Server → Open Codex → Make Changes → Refresh → Review → Push**

The local website is your safe place to experiment. Only push the changes to GitHub once you're happy with them.
