// // 
// //
// // db.projects.insert({
// //   name: "reBound",
// //   completion_date: "06-15-2015",
// //   role: "FullStack Javascript developer",
// //   content: {
// //
// //     short: "Improve your memory and mental cognition by gauging the flight path of a ball across a table",
// //
// //     long: "This game, to be played in the pantheon of Lumosity and Fit-Brains mental training games, provides real memory enhancement through a fun (but difficult) two-player game. Memorize the path of a flying ball across a board as it careens off a series of bumpers, or set up a tough board to stump your friends. This game was built using pure javascript/jquery, comprising nearly two thousand lines of code. I personally found this to be a satisfying challenge, as I’ve enjoyed other iterations of reBound and embraced the requirement of creating a two-player game to create something fun and unique.",
// //
// //     problem: "To build a two-player game using javascript and jquery. Long a fan of cognition training games, I decided to narrow this challenge to rebuild an old favorite",
// //
// //     solution: "I designed and developed a this game using a minimum of technologies (just jQuery), and I knew that the biggest challenge would be to pre-track the path of the ball as it bounces off of the bumpers, as these are set by the player rather than by the board. The solution was to create a thorough model for our board that would be scanned through and read to create the flight path for the ball. This model is fed into a repeating function to analyze each leg of the balls journey, and ultimately it’s exit path from the board (which may or may not have been guessed by the opposing player). ",
// //
// //     technology_used: "javascript jquery html/css"
// //   },
// //   links: {
// //     github: "https://github.com/JackConnor/reBound",
// //     live: "http://rebound.bitballoon.com/"
// //   },
// //   media: [
// //     {"url":"http://s9.postimg.org/wty1cpbtr/Screen_Shot_2015_09_26_at_12_13_12_AM.png"},
// //     {"url": "http://s1.postimg.org/ov0rv1wv3/Screen_Shot_2015_09_26_at_12_15_27_AM.png"},
// //     {"url": "http://s9.postimg.org/i0jdry42n/Screen_Shot_2015_09_26_at_12_14_19_AM.png"},
// //     {"url": "http://s16.postimg.org/svhq9mvr9/Screen_Shot_2015_09_26_at_12_16_23_AM.png"},     {"url": "http://s23.postimg.org/5kmajxz4r/Screen_Shot_2015_09_26_at_12_16_28_AM.png"}
// //   ]
// // })
// /////end reBound
// ///
// /////////begin Now-Playing
// db.projects.insert({
//   name: "Now Playing",
//   completion_date: "09-10-2015",
//   role: "FullStack Javascript Developer",
//   content: {
//
//     short: "Find a movies playing near you now, with Now Playing",
//
//     long: "Now Playing was built and designed to solve one problem - how to find the movies playing near you fast and without extensive search. Current products on the market such as Fandango and MovieFone offer robust services, but aren't especially useful for quick, location-based search. Setting a goal to find your movie within two clicks, we used Google maps' api as well as the GraceNote TMSapi movie finder api, in order to build a dynamic map and listview, so our customers can find what's playing now.",
//
//     problem: "Build a mobile solution for consumers that would allow them to find movies playing in their area within a few clicks or less. For the film lover who has wants to see a movie in their area, Now Playin was to solve the current market gap in theater-technology",
//
//     solution: "With an Express Base and Angular frontend, we've created a browser-version of this mobile app. Meeting our specifications, this app opens to a customized map-view, popping up markers based on the users current location which dynamically show upcoming movie times. Clicking through will also provide directions to the theater, as well as a full information-view page for each movie with a slew of interesting details. Designed for elegance and ease of use, we've built a solution that provides pointed information to the user from any device.",
//
//     technology_used: "javascript angular express"
//   },
//   links: {
//     github: "https://github.com/JackConnor/now-playing",
//     live: "https://sheltered-cliffs-2863.herokuapp.com/#/list"
//   },
//   media: [
//     {"url": "http://s16.postimg.org/pq4xosd39/Screen_Shot_2015_09_25_at_10_49_30_PM.png"},
//     {"url": "http://s1.postimg.org/9s4sfa3z3/Screen_Shot_2015_09_25_at_11_01_21_PM.png"},
//     {"url": "http://s7.postimg.org/bx76qdpez/Screen_Shot_2015_09_25_at_10_54_27_PM.png"},
//     {"url": "http://s29.postimg.org/g3mqywkon/Screen_Shot_2015_09_25_at_10_55_35_PM.png"},     {"url": "http://s28.postimg.org/3qsvyp8nh/Screen_Shot_2015_09_25_at_10_57_52_PM.png"}
//   ]
// })
// ////end data for now playing, begin data for linkup
// ////////begin linkup
// db.projects.insert({
//   name: "Link Up",
//   completion_date: "08-18-2015",
//   role: "FullStack Javascript Developer",
//   content: {
//
//     short: "Web-Socket driven real-time person-to-person location finder",
//
//     long: "Using the powerful Socket.io module with an Express framework backend, we built this platform to (upon permission) send location data continuously back-and-forth with a peer, which is converted in realtime into an arrow rendered in 3D on the user's phone, pointing towards their partner. With uses for businesses, parents, and concert-goers (to name a few), Link Up uses Javascript browser technology to create real-world connections.",
//
//     problem: "Build a mobile solution that will allow users to find one-another in real time via a dynamic arrow, like a compass, which would point towards the others device.",
//
//     solution: "With an Express Base backend adn Facebook authentication using Passport, we used web-socket technology provided by Socket.io and plain Javascript for this app. Grabbing the users device-orientation data from their phone (latitude and longitude in this version), we could trnasmit this data in realtime to a partner, which would be rendered into a 3D, dynamically pointing arrow on each users screen, which they could follow to find the other.",
//
//     technology_used: "javascript node web-socket"
//   },
//   links: {
//     github: "https://github.com/JackConnor/location_master",
//     live: "https://warm-bayou-8573.herokuapp.com/"
//   },
//   media: [
//     {"url": "http://s3.postimg.org/ff2n9xq43/Screen_Shot_2015_09_25_at_11_24_43_PM.png"},
//     {"url": "http://s29.postimg.org/p6u289uwn/Screen_Shot_2015_09_25_at_11_26_33_PM.png"},
//     {"url": "http://s12.postimg.org/sx4lawllp/Screen_Shot_2015_09_25_at_11_29_43_PM.png"},
//     {"url": "http://s27.postimg.org/3z10gqyyb/Screen_Shot_2015_09_25_at_11_28_11_PM.png"},     {"url": "http://s14.postimg.org/6zetm6egx/Screen_Shot_2015_09_25_at_11_29_12_PM.png"}
//   ]
// })
