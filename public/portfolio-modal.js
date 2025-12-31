// Portfolio Modal Data and Functions
const portfolioData = {
    'battle-of-apes': {
        title: 'Battle of Apes',
        image: 'images/icons/battle-of-apes/boa.png',
        screenshots: [
            'images/screenshots/battle-of-apes/boa_r1.webp',
            'images/screenshots/battle-of-apes/boa_r2.webp',
            'images/screenshots/battle-of-apes/boa_r3.webp'
        ],
        category: 'Action, Strategy',
        organization: 'Flick Game Studios',
        date: 'September, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.battle.of.apes',
        description: 'Battle of Apes is a strategic action game where players command troops of primates in intense battles. Featuring tactical gameplay, unit management, and strategic resource allocation in epic primate warfare.',
            rolesContributions: 'For Battle of Apes, I led game and level design while also contributing to development. I oversaw gameplay mechanics, level layouts, and collaborated with a 3D artist to shape the art style and design characters, enemies, and obstacles. I managed the transition from a fast-paced runner to a strategic merging grid, and crafted UI elements with backend integration for a smooth player experience. The biggest challenges were blending runner and merge mechanics, balancing pacing and difficulty, and designing an intuitive UI—all of which required creative problem-solving and attention to detail to deliver a cohesive, engaging game.'
    },
    'botster-brawl': {
        title: 'Botster Brawl',
        image: 'images/icons/botster-brawl/BB.jpg',
        screenshots: [
            'images/screenshots/botster-brawl/BB_Banner.png',
            'images/screenshots/botster-brawl/BB_1.png',
            'images/screenshots/botster-brawl/BB_2.png'
        ],
        category: 'Multiplayer, Shooter',
        organization: 'Independent Project',
        date: 'Re-work in Progress',
        url: '#',
        description: 'Botster Brawl is an ambitious multiplayer top-down shooter currently undergoing a complete rework. The game features intense robot combat with customizable mechs and strategic team-based gameplay in various arena environments.',
            rolesContributions: 'I am responsible for redesigning and developing the multiplayer networking, new combat mechanics, and robot customization. I am also building tools for arena design and progression. My goal is to deliver a stable, fair, and enjoyable multiplayer experience.'
    },
    'cube-survivor': {
        title: 'Cube Survivor',
        image: 'images/icons/cube-survivor/cs.png',
        screenshots: [
            'images/screenshots/cube-survivor/cst_p3.webp',
            'images/screenshots/cube-survivor/cst_p2.webp',
            'images/screenshots/cube-survivor/cst_p1.webp'
        ],
        category: 'Action, Survival',
        organization: 'Flick Game Studio',
        date: 'January, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.flickgames.cube.survivor',
        description: 'Cube Survivor is a fast-paced action game where players fend off waves of monsters using a magical cube with a range of powerups. With strategic combat and dynamic gameplay, players must survive against relentless hordes while mastering unique abilities to emerge victorious.',
            rolesContributions: 'As a game developer, I collaborated with the designer to create diverse power-ups and dynamic gameplay, and worked with the 3D artist to optimize monster models for both performance and immersion. I rebuilt the enemy horde system, fine-tuned enemy behaviors, and contributed to sound engineering and UI development for interactive, engaging experiences. Overcoming challenges like designing new power-ups, refining player movement, and learning sound design, I focused on delivering smooth, exciting, and immersive gameplay.'
    },
    'deliver3d': {
        title: 'Deliver 3D',
        image: 'images/icons/deliver3d/d3d.webp',
        screenshots: [
            'images/screenshots/deliver3d/d3_f.webp',
            'images/screenshots/deliver3d/d3_r1.webp',
            'images/screenshots/deliver3d/d3_r2.webp'
        ],
        category: 'Simulation, Delivery',
        organization: 'Flick Game Studio',
        date: 'March, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.flickgames.deliver3d',
        description: 'Deliver 3D is an engaging delivery simulation game where players navigate through challenging routes to complete deliveries on time. With realistic physics and intuitive controls, players must manage their delivery truck while avoiding obstacles and optimizing routes for maximum efficiency.',
            rolesContributions: 'As a game developer for Deliver 3D, I created core gameplay mechanics like the Tap move system and package collection and delivery, and designed dynamic boosters to keep players engaged. I tackled challenges such as building intricate track systems and developing the Investment Valley idle tycoon feature, which required careful planning and balancing. These efforts helped shape an immersive, rewarding experience for players.'
    },
    'lets-deliver': {
        title: 'Lets Deliver',
        image: 'images/icons/lets-deliver/ld.png',
        screenshots: [
            'images/screenshots/lets-deliver/ld_f.webp',
            'images/screenshots/lets-deliver/ld_r1.webp',
            'images/screenshots/lets-deliver/ld_r2.webp'
        ],
        category: 'Management, Strategy',
        organization: 'Flick Game Studio',
        date: 'May, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.flickgames.letsdeliver',
        description: 'Lets Deliver is a package delivery management game where players run their own delivery service. Features include route planning, package sorting, and time management challenges that test players\' organizational and strategic thinking skills.',
            rolesContributions: 'As my first studio project, I worked with the designer to create a visually soothing, puzzle-style delivery game. I was responsible for all gameplay mechanics, from fuel limits and package capacity to player movement and UI navigation. The biggest challenge was developing the car movement system—first by building custom splines with Bézier curves, which was time-consuming and tricky, then by switching to Path Creator for smoother, faster level design and better gameplay.'
    },
    'mega-suv': {
        title: 'Mega SUV Car Ramp',
        image: 'images/icons/mega-suv/msuv.webp',
        screenshots: [
            'images/screenshots/mega-suv/mr_r3.webp',
            'images/screenshots/mega-suv/mr_r2.webp',
            'images/screenshots/mega-suv/mr_r1.webp'
        ],
        category: 'Racing, Stunt',
        organization: 'Flick Game Studio',
        date: 'October, 2022',
        url: 'https://play.google.com/store/apps/details?id=com.mega.suv.car.ramp',
        description: 'Mega SUV Car Ramp is an adrenaline-fueled experience where players control an SUV through challenging ramps, loops, and obstacles. Perform daring stunts and complete levels in dynamic environments with customizable vehicles.',
            rolesContributions: 'As a game developer, I programmed vehicle controls, ramp physics, obstacles, and scoring systems. I worked closely with the designer to implement gameplay and assets in Unity, and developed intuitive menus and HUDs for a smooth player experience. Balancing level design with gameplay, integrating 3D assets while optimizing performance, and coordinating across a diverse team required strong communication and teamwork to deliver a polished final product.'
    },
    'mototrail': {
        title: 'Mototrail',
        image: 'images/icons/mototrail/moto.png',
        screenshots: [
            'images/screenshots/mototrail/moto_1.webp',
            'images/screenshots/mototrail/moto_2.webp',
            'images/screenshots/mototrail/moto_3.webp'
        ],
        category: 'Racing, Physics',
        organization: 'Flick Game Studio',
        date: 'July, 2023',
        url: 'https://play.google.com/store/apps/details?id=com.flickgames.mototrial',
        description: 'Mototrail delivers heart-pounding motorcycle action with realistic physics and challenging terrain. Players navigate through extreme landscapes, performing stunts and overcoming obstacles in this adrenaline-pumping racing experience.',
            rolesContributions: 'For Mototrail, I focused on building an intuitive, responsive bike controller and implemented a variety of obstacles, timed elements, and gravity modifiers to keep gameplay exciting. Working closely with the designer, I translated complex level designs and UI features into engaging mechanics. The biggest challenges were designing unique obstacles and UI elements that fit the game’s style, which required creative problem-solving and attention to detail to deliver a polished, immersive experience.'
    },
    'candy-world-sol': {
        title: 'Candy World Solitaire',
        image: 'images/icons/candy-world-sol/Solitaire_Candyland_1024.png',
        screenshots: [
            'images/screenshots/candy-world-sol/sol-1.webp',
            'images/screenshots/candy-world-sol/Gameplay_Harvest.mp4',
            'images/screenshots/candy-world-sol/Gameplay_Backpack.mp4',
            'images/screenshots/candy-world-sol/Gameplay_SeasonPass.mp4',
            'images/screenshots/candy-world-sol/Gameplay_Powerups.mp4',
            'images/screenshots/candy-world-sol/Gameplay_Album.mp4'
        ],
        category: 'Casual, Tripeaks',
        organization: 'Super Huge Studios',
        date: '2024',
        url: 'https://play.google.com/store/apps/details?id=com.superhugestudios.candyworld.free.harvest&hl=en_IN',
        description: 'Candy World Solitaire is a vibrant card adventure blending classic solitaire with delightful candy-themed Tripeak puzzles. Journey through hundreds of handcrafted levels, unlock new features, and meet charming characters in a relaxing, visually rich world.\n\n With over 50,000 downloads on the Play Store, Candy World Solitaire has delighted a growing community of players worldwide.',
            rolesContributions: 'As a core team member on Candy World Solitaire, I focused on designing and implementing progression systems, including win streaks, a season pass, power-ups, and collectible albums. I also worked to improve game performance and optimize load times, making sure the experience was smooth for players. In addition, I integrated analytics and notification systems to help the team better understand player engagement and retention. My efforts helped ensure the game was polished, reliable, and enjoyable for a growing player base.'
    },
    'cat-wool': {
        title: 'Cat Wool',
        image: 'images/icons/cat-wool/App-Icon_1024.png',
        screenshots: [
            'images/screenshots/cat-wool/cw_1.webp',
            'images/screenshots/cat-wool/cw_2.webp',
            'images/screenshots/cat-wool/cw-vid-1.mp4',
            'images/screenshots/cat-wool/cw-vid-2.mp4'
        ],
        category: 'Puzzle, Hyper-Casual',
        organization: 'Super Huge Studios',
        date: 'November, 2025',
        url: 'https://play.google.com/store/apps/details?id=com.superhuge.catwool&hl=en_IN',
        description: 'Cat Wool is a relaxing puzzle game where players sort colorful wool onto cute cats, aiming to complete each level with the best moves possible. The game features handcrafted levels, charming animations, and a soothing atmosphere, making it perfect for unwinding or enjoying a quick mental challenge. With its simple mechanics and delightful visuals, Cat Wool offers a satisfying experience for both casual players and puzzle enthusiasts.',
        rolesContributions: 'As one half of the duo behind Cat Wool’s core gameplay, I was responsible for bringing the game’s data to life on screen. While my teammate handled the backend logic and data, I took charge of translating that data into dynamic visuals—spawning the puzzle grid and wool, and animating every move and effect with care. I also built a custom toolkit for level creation, which made it much faster and easier for the team to design and test new puzzles. From prototype to release, I focused on making sure every interaction felt smooth and satisfying, helping create a polished, visually engaging experience that players could instantly enjoy.'
    },
    'shootopia': {
        title: 'Shootopia',
        image: 'images/icons/shootopia/shootopia.png',
        screenshots: [
            'images/screenshots/shootopia/arcade_shooter_shtpia.mp4',
            'images/screenshots/shootopia/shooting_range_shtpia.mp4',
            'images/screenshots/shootopia/Shootopia_Demo_21_Feb-2025.mp4',
            'images/screenshots/shootopia/Shootopia_Demo_15May2025.mp4'
        ],
        category: 'Arcade, Shooter',
        organization: 'Super Huge Studios',
        date: 'December, 2024',
        url: '#',
        description: 'Shootopia is an Immersive Virtual Arcade Shooting Games with Projection Project featuring Shooting Range (turn-based, precision scoring) and Arcade Shooter (real-time, rarity-based rewards). Each mode has unique gameplay and scoring.',
            rolesContributions: 'I built the core framework to support different arcade game modes. I created both Shooting Range and Arcade Shooter, each with their own gameplay, scoring, and interface. I added multiplayer turn management, round progression, and scoring for Shooting Range, and reward and movement systems for Arcade Shooter. I also made in-game calibration tools to help align the game with the play area. My focus was on making the experience smooth, reliable, and easy to expand.'
    }
};

// Portfolio Modal Functions
function initializePortfolioModal() {
    console.log('Initializing portfolio modal...');
    const modal = document.getElementById('portfolio-modal');
    const closeBtn = document.querySelector('.close-modal');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    console.log('Found modal:', modal);
    console.log('Found portfolio items:', portfolioItems.length);
    
    // Add click events to portfolio items
    portfolioItems.forEach((item, index) => {
        console.log(`Adding event to portfolio item ${index}:`, item);
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
            // Don't trigger modal if clicking on a link
            if (e.target.closest('a')) {
                return;
            }
            e.preventDefault();
            const projectId = item.getAttribute('data-project');
            if (projectId) {
                showProjectDetails(projectId);
            }
        });
    });

    // Also add delegation for dynamically loaded content
    document.addEventListener('click', (e) => {
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem && portfolioItem.hasAttribute('data-project')) {
            // Don't trigger modal if clicking on a link
            if (e.target.closest('a')) {
                return;
            }
            e.preventDefault();
            const projectId = portfolioItem.getAttribute('data-project');
            if (projectId) {
                showProjectDetails(projectId);
            }
        }
    });
    
    // Close modal events
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function showProjectDetails(projectId) {
        // Remove any old 'Role, Challenges' title if present
        const oldRoleChallengesTitle = Array.from(document.querySelectorAll('h3, h2, h4')).find(el => el.textContent && el.textContent.trim().toLowerCase().replace(/[^a-z]/g, '') === 'rolechallenges');
        if (oldRoleChallengesTitle && oldRoleChallengesTitle.parentElement) {
            oldRoleChallengesTitle.parentElement.removeChild(oldRoleChallengesTitle);
        }
    console.log('Showing project details for:', projectId);
    const project = portfolioData[projectId];
    if (!project) {
        console.log('Project not found:', projectId);
        return;
    }

    console.log('Project data:', project);

    // Update modal content
    const modalTitle = document.getElementById('modal-title');
    const mainScreenshot = document.getElementById('main-screenshot');
    const thumbnailsContainer = document.getElementById('screenshot-thumbnails');
    const modalCategory = document.getElementById('modal-category');
    const modalOrganization = document.getElementById('modal-organization');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');

    // Set title
    if (modalTitle) modalTitle.textContent = project.title;

    // Set main screenshot (support MP4)
    if (mainScreenshot && project.screenshots && project.screenshots.length > 0) {
        const first = project.screenshots[0];
        // Clear previous content
        mainScreenshot.style.display = 'none';
        if (mainScreenshot.nextElementSibling && mainScreenshot.nextElementSibling.classList.contains('main-video')) {
            mainScreenshot.nextElementSibling.remove();
        }
        if (first.toLowerCase().endsWith('.mp4')) {
            // Create video element
            const video = document.createElement('video');
            video.src = first;
            video.controls = true;
            video.className = 'main-video';
            video.style.width = '100%';
            video.style.maxHeight = '500px';
            video.style.borderRadius = getComputedStyle(mainScreenshot).borderRadius;
            video.style.objectFit = 'contain';
            mainScreenshot.parentNode.insertBefore(video, mainScreenshot.nextSibling);
        } else {
            mainScreenshot.src = first;
            mainScreenshot.alt = project.title;
            mainScreenshot.style.display = '';
        }
    }

    // Create thumbnail gallery (support MP4)
    if (thumbnailsContainer && project.screenshots) {
        thumbnailsContainer.innerHTML = '';
        project.screenshots.forEach((screenshot, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            if (screenshot.toLowerCase().endsWith('.mp4')) {
                // Video thumbnail with play icon overlay
                thumbnail.innerHTML = `
                    <div style="position:relative;display:inline-block;width:100%;height:100%;max-width:80px;max-height:80px;">
                        <video src="${screenshot}" muted playsinline style="width:100%;height:100%;object-fit:cover;border-radius:8px;"></video>
                        <span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="18" fill="rgba(0,0,0,0.5)"/>
                                <polygon points="16,13 28,20 16,27" fill="#fff"/>
                            </svg>
                        </span>
                    </div>
                `;
            } else {
                thumbnail.innerHTML = `<img src="${screenshot}" alt="${project.title} Screenshot ${index + 1}">`;
            }

            thumbnail.addEventListener('click', () => {
                // Remove any existing video in main screenshot
                if (mainScreenshot.nextElementSibling && mainScreenshot.nextElementSibling.classList.contains('main-video')) {
                    mainScreenshot.nextElementSibling.remove();
                }
                if (screenshot.toLowerCase().endsWith('.mp4')) {
                    mainScreenshot.style.display = 'none';
                    const video = document.createElement('video');
                    video.src = screenshot;
                    video.controls = true;
                    video.className = 'main-video';
                    video.style.width = '100%';
                    video.style.maxHeight = '500px';
                    video.style.borderRadius = getComputedStyle(mainScreenshot).borderRadius;
                    video.style.objectFit = 'contain';
                    mainScreenshot.parentNode.insertBefore(video, mainScreenshot.nextSibling);
                } else {
                    mainScreenshot.src = screenshot;
                    mainScreenshot.alt = project.title + ' Screenshot ' + (index + 1);
                    mainScreenshot.style.display = '';
                }
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });

            thumbnailsContainer.appendChild(thumbnail);
        });
    }

    // Set project info
    if (modalCategory) modalCategory.textContent = project.category;
    if (modalOrganization) modalOrganization.textContent = project.organization;
    if (modalDate) modalDate.textContent = project.date;

    // Set project URL
    const urlElement = document.getElementById('modal-url');
    if (urlElement) {
        if (project.url === '#') {
            urlElement.textContent = 'Coming Soon';
            urlElement.removeAttribute('href');
            urlElement.style.color = '#999';
            urlElement.style.cursor = 'default';
        } else {
            urlElement.textContent = 'Playstore';
            urlElement.href = project.url;
            urlElement.style.color = '';
            urlElement.style.cursor = '';
        }
    }

    // Set description
    if (modalDescription) modalDescription.textContent = project.description;
    

        // Set Roles and Contributions section in the static modal
        const rolesContribution = document.getElementById('modal-role-contribution');
        const rolesContributionSection = rolesContribution && rolesContribution.closest('.role-section');
    if(project.description)
{
    if(modalDescription){
        modalDescription.innerHTML = project.description.replace(/\n/g, '<br>');
    }
}
        if (rolesContribution) {
            if (project.rolesContributions) {
                // Replace \n with <br> for HTML line breaks
                rolesContribution.innerHTML = project.rolesContributions.replace(/\n/g, '<br>');
                if (rolesContributionSection) rolesContributionSection.style.display = '';
            } else {
                rolesContribution.textContent = '';
                if (rolesContributionSection) rolesContributionSection.style.display = 'none';
            }
        }

    // Show modal
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('Modal should be visible now');
    } else {
        console.log('Modal element not found');
    }
}

function closeModal() {
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initializePortfolioModal, 100);
    });
} else {
    setTimeout(initializePortfolioModal, 100);
}