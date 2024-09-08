document.addEventListener('DOMContentLoaded', function() {
    // Get all list items in the genealogy tree
    const listItems = document.querySelectorAll('.genealogy-tree li > a');
    
    listItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Find the next sibling <ul> which represents the child nodes
            const nextUl = this.nextElementSibling;
            
            if (nextUl && nextUl.tagName === 'UL') {
                // Toggle the 'active' class to show/hide the child nodes
                nextUl.classList.toggle('active');
            }
        });
    });
});
