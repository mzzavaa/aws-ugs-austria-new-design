# AWS User Groups Austria Website

A modern website for AWS User Groups in Austria built with Hugo.

## Project Overview

AWS User Groups Austria serves as the central hub for the Austrian AWS community, featuring:

- **Three AWS User Groups**: Vienna, Women's Vienna, and Linz
- **Event Listings**: Upcoming AWS events and meetups
- **Community Information**: About our mission and what we offer
- **Beautiful Design**: Modern, responsive design with consistent styling
- **Easy Navigation**: Clean layout with smooth scrolling

## User Groups

### AWS User Group Vienna
- **Frequency**: Monthly meetups
- **Focus**: AWS experts and enthusiasts in Vienna
- **Meetup**: [Join on Meetup.com](https://www.meetup.com/amazon-web-services-aws-vienna/)

### AWS Women's User Group Vienna
- **Frequency**: Quarterly events
- **Focus**: Diversity and inclusion in tech
- **Meetup**: [Join on Meetup.com](https://www.meetup.com/aws-womens-user-group-vienna/)

### AWS User Group Linz
- **Frequency**: Regular meetups
- **Focus**: AWS community in Upper Austria
- **Meetup**: [Join on Meetup.com](https://www.meetup.com/aws-user-group-linz/)

## Theme Structure

This project uses a custom Hugo theme located in `themes/aws-ugs-theme/` with the following structure:

```
aws-ugs-theme/
├── layouts/
│   ├── _default/
│   │   └── baseof.html
│   ├── partials/
│   │   ├── header.html
│   │   └── footer.html
│   └── index.html
├── static/
│   ├── css/
│   │   └── complete-styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── hexagon-pattern.svg
└── theme.toml
```

## Design Consistency

This project maintains strict design consistency through:

1. **Standardized Components**:
   - Buttons have consistent height, padding, and hover effects
   - Cards maintain equal heights within rows
   - Images are properly sized with consistent dimensions

2. **Visual Effects**:
   - Smooth animations and hover effects
   - Gradient text and backgrounds
   - Consistent color scheme with purple/blue gradients

3. **Responsive Design**:
   - Works seamlessly on desktop and mobile devices
   - Grid layouts adapt to different screen sizes

## Development

### Prerequisites
- Hugo (Extended version)
- Basic knowledge of HTML, CSS, and JavaScript

### Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/aws-ugs-austria-new-design.git
cd aws-ugs-austria-new-design
```

### Development Server
```bash
hugo server -D
```

### Build for Production
```bash
hugo --minify
```

## Design Guidelines

### Buttons
- Primary buttons: `.reinvent-button`
- Secondary buttons: `.reinvent-button-secondary`
- Always use `px-4 py-2` for consistent padding

### Cards
- Use `.reinvent-card` for standard cards
- Add `h-full` to ensure equal heights in grid layouts
- Maintain consistent padding with `p-6`

### Images
- Header/footer logos: `h-6` (24px)
- Card images: `w-16 h-16` (64px)
- User group icons: consistent sizing

## Features

### Homepage Sections
1. **Hero Section**: Main title with call-to-action buttons
2. **User Groups**: Three cards showcasing our AWS User Groups
3. **Events**: Upcoming events with registration links
4. **About**: Mission and what we offer (Learn, Connect, Grow)

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on cards and buttons
- Fade-in animations on scroll
- External link tracking

## Future Enhancements

Based on community feedback, we're considering:
- **Expanded Event Coverage**: Include multi-cloud and hybrid events where AWS community members participate
- **Related Communities**: Showcase other Austrian tech communities with AWS connections
- **Event Submission**: Allow community members to submit relevant events
- **Enhanced Filtering**: Filter events by type and relevance to AWS community

## Deployment

The site can be deployed to any static hosting service:

1. Build the site: `hugo --minify`
2. Deploy the contents of the `public` directory

Popular deployment options:
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Similar to Netlify with excellent Hugo support
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3 + CloudFront**: Native AWS hosting solution

## Contributing

We welcome contributions from the AWS community in Austria:
- Report bugs or suggest improvements via GitHub issues
- Submit pull requests for enhancements
- Share event information and community updates
- Help with content and translations

## Contact

- **Email**: linda.mohamed@icloud.com
- **Slack**: [Join AWS Community DE Slack](https://join.slack.com/t/awscommunityde/shared_invite/zt-1kejzwl1t-RjbKkOFHYjYYNPD2omEEeA)
- **Meetup**: [AWS User Group Vienna](https://www.meetup.com/amazon-web-services-aws-vienna/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Austrian AWS community organizers and members
- AWS for supporting user groups worldwide
- Hugo community for the excellent static site generator
- All speakers and participants who make our events possible

---

**Coded with ❤️ by the AWS community and Amazon Q CLI**
