
## Template

I used an app-template from FullStack Academy as the starting point for this project. The auth set up and some other basic scaffolding was already in place so I want to be careful not to claim credit for that. To see what code was in the template I started with you can take a look at the following repo.

https://github.com/brismol/fs-app-template

## Get Started

Run the following to take a look

* `npm install`
* Create a postgres databases with the command `createdb flightpath`
* Run `npm run start:dev`
* navigate to http://localhost:8080/
* click sign up to choose a username and password


## Next Steps

There are MANY things I would like to do I were to continue this project. 
Since the instructions mentioned it should take 3 - 5 hours, I have decided to stop it here.
Below are a couple of the next steps I would do if I were to continue working on this.

*To support multiple planes, I would probably refactor the rotation store to be an array of objects, with a key for the planeId, and another for the array of scheduled flights
*If I was allowed to edit the API, I would add support for filtering and searching and enable the flights to be filterable by flights that are addable to the rotation. As well as sorting the flights by departure time or origin
