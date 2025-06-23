// Main JavaScript file for AWS User Groups Austria

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
            this.style.borderColor = 'rgba(166, 111, 240, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.borderColor = '';
        });
    });
    
    // Fetch Meetup events if on homepage
    if (document.getElementById('meetup-event-placeholder')) {
        fetchMeetupEvents();
    }
});

// Function to fetch Meetup events
function fetchMeetupEvents() {
    // Use rss2json service to convert RSS to JSON
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.meetup.com%2Famazon-web-services-aws-vienna%2Fevents%2Frss%2F')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok' && data.items && data.items.length > 0) {
                const eventPlaceholder = document.getElementById('meetup-event-placeholder');
                if (eventPlaceholder) {
                    const event = data.items[0];
                    
                    // Extract date from the pubDate
                    let eventDate = new Date(event.pubDate);
                    let eventTitle = event.title;
                    
                    // Try to extract location from description
                    let locationMatch = event.description.match(/Location:\s*([^<]+)/);
                    let location = locationMatch ? locationMatch[1].trim() : "Check Meetup for details";
                    
                    // Extract only the first few lines we want to show
                    let description = event.description
                        .replace(/<br\s*\/?>/gi, '\n')
                        .replace(/<p>(.*?)<\/p>/gi, '$1\n\n')
                        .replace(/<h[1-6]>(.*?)<\/h[1-6]>/gi, '**$1**\n')
                        .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
                        .replace(/<em>(.*?)<\/em>/gi, '*$1*')
                        .replace(/<a href="(.*?)".*?>(.*?)<\/a>/gi, '[$2]($1)')
                        .replace(/<ul>(.*?)<\/ul>/gis, function(match) {
                            return match
                                .replace(/<li>(.*?)<\/li>/gi, '- $1\n')
                                .replace(/<\/?ul>/gi, '');
                        })
                        .replace(/<[^>]*>/g, '')
                        .trim();
                    
                    // Extract specific lines we want to show
                    let welcomeLine = description.match(/Welcome to our next AWS User Group Vienna meetup!/) ? 
                        "Welcome to our next AWS User Group Vienna meetup!" : "";
                    
                    let workshopLine = description.match(/Entry AWS Workshop: ([^\n]+)/) ? 
                        description.match(/Entry AWS Workshop: ([^\n]+)/)[0] : "";
                    
                    let meetupEntryLine = description.match(/Entry AWS Meetup: ([^\n]+)/) ? 
                        description.match(/Entry AWS Meetup: ([^\n]+)/)[0] : "";
                    
                    let startLine = description.match(/Start Meetup: ([^\n]+)/) ? 
                        description.match(/Start Meetup: ([^\n]+)/)[0] : "";
                    
                    // Combine the lines we want to show
                    let displayLines = [welcomeLine, workshopLine, meetupEntryLine, startLine]
                        .filter(line => line !== "")
                        .join("<br>");
                    
                    // Convert Markdown to HTML for display
                    function markdownToHtml(markdown) {
                        return markdown
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') // Bold
                            .replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic
                    }
                    
                    const eventHtml = `
                        <div class="bg-deep-purple text-white p-4 h-20 flex flex-col justify-center">
                            <span class="block text-sm">${eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            <h3 class="text-lg font-bold">${eventTitle}</h3>
                        </div>
                        <div class="p-4 flex-grow flex flex-col">
                            <div class="flex-grow">
                                <div class="text-sm mb-3 text-gray-300">${markdownToHtml(displayLines)}</div>
                                <p class="text-sm mb-3 text-gray-300"><strong class="text-white">Location:</strong> ${location}</p>
                            </div>
                            <a href="${event.link}" target="_blank" rel="noopener noreferrer" class="btn-secondary block text-center text-sm py-1 px-3 mt-3">RSVP on Meetup</a>
                        </div>
                    `;
                    eventPlaceholder.innerHTML = eventHtml;
                }
            }
        })
        .catch(error => {
            console.error('Error fetching Meetup events:', error);
        });
}
