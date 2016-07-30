// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by multer.js.
import { name as packageName } from "meteor/ppillip:multer";

// Write your tests here!
// Here is an example.
Tinytest.add('multer - example', function (test) {
  test.equal(packageName, "multer");
});
