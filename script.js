$(document).ready(function() {
    // Function to update time-block styling based on the current time
    function updateHourStyles() {
      var currentHour = dayjs().hour();
  
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  
    // Function to display the current date in the header
    function displayCurrentDate() {
      var currentDate = dayjs().format("dddd, MMMM D");
      $("#currentDay").text(currentDate);
    }
  
    // Load current date on page load
    displayCurrentDate();
  
    // Update time-block styles every minute
    setInterval(updateHourStyles, 60000);
  
    // Event listener for save buttons
    $(".saveBtn").on("click", function() {
      var hourId = $(this).parent().attr("id");
      var description = $(this).siblings(".description").val();
  
      // Save data to localStorage or your preferred storage mechanism
      localStorage.setItem(hourId, description);
    });
  
    // Function to load saved data from localStorage
    function loadSavedData() {
      $(".time-block").each(function() {
        var hourId = $(this).attr("id");
        var savedDescription = localStorage.getItem(hourId);
  
        if (savedDescription) {
          $(this).find(".description").val(savedDescription);
        }
      });
    }
  
    // Load saved data on page load
    loadSavedData();
  });
  