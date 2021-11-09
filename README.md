
## Template

I used an app-template from FullStack Academy as the starting point for this project. The auth set up and some other basic scaffolding was already in place so I want to be careful not to claim credit for that. To see what code was in the template when I started with you can take a look at the following repo.

https://github.com/brismol/FSA-App-Template

## Get Started

Run the following to take a look

* `npm install`
* Create a postgres database with the command `createdb flightpath`
* Run `npm run start:dev`
* navigate to http://localhost:8080/
* click sign up to choose a username and password


## Next Steps

There are MANY things I would like to do if I were to continue this project. 
However since the instructions mentioned it should take 3 - 5 hours, I have decided to stop it here.
Below are a couple of the next steps I would do if I were to continue working on this.

*To support multiple planes, I would probably refactor the rotation store to be an array of objects, with a key for the planeId, and another for the array of scheduled flights

*If I was allowed to edit the API, I would add support for filtering/searching/sorting on the back end. I set up a way to filter out unselectable planes on the front end, but the loading time is quite slow. It's not an optimal solution by any means but I wanted to have something in place.

*The rotation basically works as a stack at the moment, only allowing a flight to be added or removed from the end. I would be interested in trying to support editing the rotations at different points, but that would require a fair amount of rethinking how I set it up 

*Lots of CSS and layout improvements

*CSS for different screen sizes

*And tons of other stuff


## Thanks for your consideration!!
