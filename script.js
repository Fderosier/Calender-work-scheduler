// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


 
  $(function () {
    //Variable containing all timeblocks container
    const calendarContainer = $('#calendar');
    //created a variable with the current hour
    const currentHour = dayjs().format('H')
    
    const numHour = Number(currentHour)
  
    const timeBlock = $(".time-block")
    const todaysDate = $("#todaysDate")
    //setting the date at the top of the page
    const today = dayjs().format('MMMM DD, YYYY');
    todaysDate.text(today);
  
  
    
    timeBlock.each(function() {
          // console.log(timeBlock)
          // console.log(Number(this.id))
          // console.log(currentHour)
          let timeId = parseInt($(this).attr("id"));//The id is the name of each block turned into a number
         
          if(timeId === numHour){
            $(this).addClass('present');
            $(this).removeClass('past');
          } else if (timeId < numHour) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
          } else {
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('past');
          }
          
          let localText = localStorage.getItem(timeId)
          if (localText) {
            $(this).children("textarea").val(localText);
          }
    });
  
    // This code snippet generates an event for every button within the container, assigning a tag that corresponds to each block.
  
    $(calendarContainer).on("click", ".saveBtn", function(event) {
      event.preventDefault();
      let eventId = $(this).data("event")
      let eventText = $(this).siblings("textarea").val();
  
      localStorage.setItem(eventId, (eventText));
  
      })
      
  
  
  });  
  
  