// Determine days between stored date and visit date...today
// Determine todays date 

const millisecondsToDays = 8640000; 
//divide the difference by this to convert to days.
//last visit ... stored in localstorage

const lastVisit = localStorage.getItem('lastvisit');
//determine number of days (lastVisit - Date.now() / millisecondsToDays) 
//display on screen
//update the stored date
localStorage.setItem('lastVisit', Date.now());