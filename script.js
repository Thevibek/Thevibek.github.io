// if stills is clicked
//      unhide the container2
// if not 
        //keep it hidden
        document.addEventListener('DOMContentLoaded', function () {
            // Initially hide the div with id white-space
            var whiteSpaceDiv = document.getElementById('white-space');
            whiteSpaceDiv.style.display = 'none';
        
            // Add click event listener to nav-stills
            document.getElementById('nav-stills').addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor action
        
                // Toggle the display of the white-space div upon click
                if (whiteSpaceDiv.style.display === 'none') {
                    whiteSpaceDiv.style.display = 'block';
                    // Auto-scroll to the top of the white-space div
                    whiteSpaceDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    whiteSpaceDiv.style.display = 'none';
                }
            });
        });
        