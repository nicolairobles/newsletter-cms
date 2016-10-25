![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/ratings_academy_logo.png "Ratings Academy Design")

#Table of Contents
*	[Getting Started](#getting-started)
*	[Folder Structure](#folder-structure)
*	[Features Explained](#features-explained-tbc)
	*	[Unique url TLDR modals](#unique-url-tldr-modals)
	*	[Interactive games](#interactive-games)
	*	[Feature-tour overlays](#feature-tour-overlays)
	*	[User authentication](#user-authentication)
	*	[User feedback rating/comment system](#user-feedback-rating/comment-system)
	*	[CMS Functionality](#cms-functionality)
*	[Contributing Process](#contributing)
	*	[Content Styling](#content-styling)
	*	[Create New Pages Tutorial](#create-new-pages)
		*	[Create Custom url Modals for each Page](#create-custom-url-modals-for-each-page)
		*	[Configure Clicked Links to be Stored in localStorage](#configure-clicked-links-to-be-stored-in-localstorage)
	*	[Custom Styling](#custom-styling)

#Getting Started

###Prerequisities
+ Node.js
+ MongoDB
+ Bower
+ Brew

## Installing Locally

### Install MongoDB and run it locally (OSX) 
* Install MongoDB - `brew install mongodb`
* Get MongoDB installation location -  `brew info mongo` to get the installed location of mongodb
* Get MongoDB run script -  Within the output of the previous command you should get a path with which to run mongo on your computer in the background. Something like -  `mongod --config /usr/local/etc/mongod.conf`
* Run MongoDB -  run the command in a new terminal window

###Installing
1. Clone repo: `git clone <https or ssh url>`
2. Go to app root
3. `npm install`
4. `sudo node app.js`
	+ Ensure .env.example, .travis.yml, and .gitignore have the appropriate keys
	+ If you run into issues, restart terminal and try again
	+ Check the version of node your computer is running. If this doesn't align with what's needed in package.json:
		+ `export NVM_DIR="$HOME/.nvm"`
		+ `[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"` # This loads nvm
		+ `nvm use node`
5. Go to http://localhost - no port needed; it will redirect to homepage

#Folder Structure

###Front-End
+ `public` folder
	+ `css` folder
		+ each module will have its own css sheet
	+ `tpl` folder
		+ each module is located in an appropriately named folder inside `tpl`
		+ homepage is also located here

###Back-End
+ `app.js` - instantiates all dependencies and currently hosts the routes for user authentication. This may change.
+ `.env.example` - contains secrete keys to interact with different apis if we choose to use them (ie, LinkedIn, Google, Twitter authentication)
+ dirs `config`, `controllers`, `models`, `test` - configuration for MongoDB to capture user data and corresponding functions




# Features Explained TBC

### Unique url TLDR modals
### Interactive games
### Feature-tour overlays
### User authentication
### User feedback rating/comment system
### CMS Functionality




#Contributing

###Create Your Own Branch
1. `git checkout -b <name of your branch>`
2. `git add .`
3. `git commit "<your commit message>"`
4. `git push origin <name of your branch>` **WARNING: Do NOT push to master**
5. Alert Nicolai of new branch push




#Content Styling

#####   1. Create the html page
1. Create a new directory in `public/tpl/module-1/<page>/` with the name of page
	* for example: `public/tpl/module-1/the-basics` 
	* This directory will house the html page, as well as other modals, or drag-drop components belonging to this page.
2. Create an html page for the page: eg. `the-basics.html`
3. Paste in the starter template code from another page
4. Paste in and customize the appropriate text for the page

#####   2. Create the custom url for the page
1. Go to `public/js/config.router.js`
2. For each new page that you add, follow the appropriate code syntax to add the page: ![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blo




#Create New Pages

#####   1. Create the html page
1. Create a new directory in `public/tpl/module-1/<page>/` with the name of page
	* for example: `public/tpl/module-1/the-basics` 
	* This directory will house the html page, as well as other modals, or drag-drop components belonging to this page.
2. Create an html page for the page: eg. `the-basics.html`
3. Paste in the starter template code from another page
4. Paste in and customize the appropriate text for the page

#####   2. Create the custom url for the page
1. Go to `public/js/config.router.js`
2. For each new page that you add, follow the appropriate code syntax to add the page: ![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/add-page-url.png "Add Page Url Tutorial")

#####   3. Add the link to the left-hand nav
1. Go to `public/tpl/blocks/nav.html`, search for `navigation bar page titles`
2. Insert the appropriate code for an additional li element with the below details: ![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/add-link-to-nav.png "Add Link to Nav Tutorial")
3. Pay particular attention to:
	* judge whether this page requires an icon, eg. a star, or not from the mock-up and in the id choose `"no-icon-page"` or `"icon-page"` appropriately
	* in `ng.click` only edit out `the-basics` for the appropriate title of the page you've been using
	* in `class` only edit out `the-basics`
	* match `ui-sref="module-1.the_basics"` to the state in the custom url `'module-1.the_basics'` in `config.router.js`
4. Test the link in the browser



# Create Custom url Modals for Each Page

#####   1. Add the custom url modal link
1. Go to the html file for the page you created, search for `custom url modal`
2. Edit the `ui-sref`, for example: `"module-1.the_basics.tldr"` and:
	* in `ng-click` only edit `the_basics`, NOTE: in this case I used underscore (_) and not a hyphen (-) 
	* in `class` only edit `the_basics_`, NOTE: also used underscore here
	![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/tldr-link.png "TLDR Link Tutorial")

#####   2. Create the custom url

1. Go to `public/js/config.router.js`, and search for `Sample deep-linked modal`
2. Edit out the state variable `'module-1.the_basics.tldr'`, the `url: '/tldr'`, and the `templateUrl: 'tpl/module-1/introduction/the-basics/tldr.html'`	
![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/custom-url-modal.png "Custom url Modal Tutorial")

#####   3. Create the modal html file
1. Create the `tldr.html` file in `public/tpl/module-1/introduction/the-basics/` and populate it with starter code from another tldr
2. Insert the appropriate text and customize accordingly
3. Test the modal in the browser




# Configure clicked links to be stored in `localStorage`

#####   1. Instantiate variables to track
1. Go to `/public/tpl/js/main.js`, and search for `click_history`
2. Create a new variable corresponding to the page or modal you created, eg: `the_basics_link` and set it to false 	
![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/click-history.png "click_history Tutorial")

#####   2. Tag the corresponding DOM elements with ng-click attributes
1. Go `/public/tpl/blocks/nav.html`, and search for `navigation bar page titles`
2. The links on the nav bar should have been configured when you [added the link to the left-hand nav](#3-add-the-link-to-the-left-hand-nav)
3. Make sure they match with the variables you declared in `/public/tpl/js/main.js`
4. Go `/public/tpl/module-1/introduction/the-basics/
3. The links for the modals should have been configured when you [edited the link for the modal](#1-add-the-custom-url-modal-link)

#####   3. Apply styles to respond to variables stored in localStorage.click_history
1. Go `/public/tpl/blocks/nav.html`, and search for `Declare variables for easy use`
2. Using jquery, declare appropriate variable that matches the class of the element with the link, NOTE: Beware the difference between #icon-page and #no-icon-page
![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/declare-jq-vars.png "declare jq vars Tutorial")
3. Add an if statement to add a style class "link-clicked"
![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/add-style-class.png "Add style class Tutorial")
4. Add event handler to add the style class
![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/add-event-handler.png "Add event handler Tutorial")


# Custom Styling

#####   Overall Strategy
1. Do not edit any files except for module's css file and make comments throughout
2. Recommended process:
	* Find whatever classes control a certain style in app.css
	* Overwrite it in module's css file
	* Test app to see if the styles are adopted throughout
	* Otherwise write a custom class or id in child.css and add it to the corresponding element you want to style


###Viewing Changes in the Browser
The application has a robust way of caching images, text, and formatting. In order to see your change in the browser:

1. `Command-Option-J` to open your Chrome Developer Tools (in Chrome obviously)
2. Click on `Network` and check `Disable cache`
3. When you make a change, you will still have to go check off `Disable cache`, reload, then turn `Disable cache` on again. 
![alt text](https://github.com/nielsen-digital-marketing/ratings-academy-beta/blob/master/readme_images/disable-cache.png "Disable Cache Tutorial")



#Built With
+ MongoDB
+ Express
+ Angular.js
+ Node.js
+ Angular UI Bootstrap


#Credits
+ Fitfull Anglr Admin Template
+ Alex G. - Graphic Design
+ Alex G., Graham B., Sam D. - CSS and content contributions
