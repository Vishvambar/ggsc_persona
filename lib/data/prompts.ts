export interface Prompt {
    id: string;
    title: string;
    category: string;
    content: string;
}

export const PROMPTS: Prompt[] = [
    // Prompt to Picasso (Previously 31-52, now 1-22)
    { id: '1', title: 'Milky Way Coffee', category: 'Prompt to Picasso', content: 'A close-up of a cup of coffee, but the swirling cream on top is an exact, photo realistic replica of the Milky Way galaxy.' },
    { id: '2', title: 'Evolved Robots', category: 'Prompt to Picasso', content: 'Create a cinematic artwork of a dense forest where robots have evolved naturally and live like wildlife. Show how they adapt to nature instead of dominating it.' },
    { id: '3', title: 'Parallel Campus', category: 'Prompt to Picasso', content: 'Reimagine our college campus in a parallel universe (fantasy, cyberpunk, underwater, space colony, ancient civilization, etc.). Keep recognizable elements but transform the environment creatively.' },
    { id: '4', title: 'Sun Chariot Spacecraft', category: 'Prompt to Picasso', content: 'Reimagine the mythological Sun Chariot (Surya\'s Ratha) not as horses, but as a massive, futuristic spacecraft powered by divine solar energy sails, orbiting over the Indian subcontinent.' },
    { id: '5', title: 'Lunar Temple', category: 'Prompt to Picasso', content: 'An ISRO astronaut standing next to the Vikram lander on the lunar south pole, discovering an ancient, forgotten temple buried in the moon dust.' },
    { id: '6', title: '1920s Kerala Courtyard', category: 'Prompt to Picasso', content: 'Top-down view of a traditional open-roof courtyard (Aangan) in a Kerala ancestral home, 1920s. It is raining softly. An elderly grandmother sits alone on a wooden swing, reading a letter by the light of a brass oil lamp.' },
    { id: '7', title: 'Indian City 2050', category: 'Prompt to Picasso', content: 'Create a detailed futuristic Indian city in the year 2050 where technology and nature coexist. Include advanced transportation, green energy systems, and culturally rooted architecture.' },
    { id: '8', title: 'Earth Split-Scene', category: 'Prompt to Picasso', content: 'Create a split-scene artwork showing two versions of Earth: one destroyed by climate change and one thriving due to sustainable choices.' },
    { id: '9', title: 'Form of Intelligence', category: 'Prompt to Picasso', content: 'Design an original physical form of Artificial Intelligence as a character. It can be humanoid, abstract, robotic, divine, or alien — but it must visually represent intelligence and learning.' },
    { id: '10', title: 'Inside the Creative Mind', category: 'Prompt to Picasso', content: 'Visualize the inside of a highly creative mind as a physical world. Show ideas forming, memories stored, and imagination at work using symbolic elements.' },
    { id: '11', title: 'Time Seamless Blend', category: 'Prompt to Picasso', content: 'Create a single artwork showing the same place in the past, present, and future — blended into one seamless composition.' },
    { id: '12', title: 'World Collision', category: 'Prompt to Picasso', content: 'Combine two completely different worlds (e.g., mythology + cyberpunk, classical dance + space age technology) into one cohesive cinematic artwork.' },
    { id: '13', title: 'Altered Gravity Life', category: 'Prompt to Picasso', content: 'Design a world where gravity behaves differently from Earth. Show how buildings, transportation, and daily life adapt to this new physics.' },
    { id: '14', title: 'The First Conversation', category: 'Prompt to Picasso', content: 'Create a cinematic moment showing the first meaningful conversation between a human and artificial intelligence., no text allowed' },
    { id: '15', title: 'Alien Discovery', category: 'Prompt to Picasso', content: 'Illustrate Earth from the perspective of an alien civilization discovering it for the first time.' },
    { id: '16', title: 'Modern Issue Classical', category: 'Prompt to Picasso', content: 'Depict a modern-day issue (social media addiction, climate change, AI dependence, etc.) in the style of a classical painting.' },
    { id: '17', title: 'University 2100', category: 'Prompt to Picasso', content: 'Design a futuristic university campus in the year 2100 with AI-powered classrooms, sustainable infrastructure, and immersive learning environments.' },
    { id: '18', title: 'Three Color Cinema', category: 'Prompt to Picasso', content: 'Create a powerful cinematic scene using only three colors of your choice.' },
    { id: '19', title: 'Reclaimed by Nature', category: 'Prompt to Picasso', content: 'Illustrate a world where nature has taken over abandoned robots. Show vines, moss, roots, and wildlife interacting with old machines.' },
    { id: '20', title: 'Robotic Forest Ecosystem', category: 'Prompt to Picasso', content: 'Design an entire forest ecosystem where animals are robotic instead of biological. Include robotic predators, prey, and plant-like machines.' },
    { id: '21', title: 'Photosynthesizing Robots', category: 'Prompt to Picasso', content: 'Imagine robots that grow like plants. Design mechanical trees, flowers, and organisms that photosynthesize energy instead of using batteries.' },
    { id: '22', title: 'Robotic Forest Guardian', category: 'Prompt to Picasso', content: 'Design a robotic guardian created to protect forests from destruction. Show its interaction with wildlife and environment.' },

    // Surreal & Abstract Concepts (Previously 1-6, now 23-28)
    { id: '23', title: 'The Sound of Silence', category: 'Surreal & Abstract', content: 'Create a visual representation of silence using only colors and textures.' },
    { id: '24', title: 'A Memory of a Dream', category: 'Surreal & Abstract', content: 'An image that feels hazy, nostalgic, and physically impossible.' },
    { id: '25', title: 'Time in a Bottle', category: 'Surreal & Abstract', content: 'A literal glass bottle containing a swirling galaxy or a miniature civilization.' },
    { id: '26', title: 'Liquid Architecture', category: 'Surreal & Abstract', content: 'A city made entirely of flowing water and crystalline structures.' },
    { id: '27', title: 'The Edge of the Universe', category: 'Surreal & Abstract', content: 'What does the physical boundary of existence look like?' },
    { id: '28', title: 'Emotional Weather', category: 'Surreal & Abstract', content: 'A landscape where the weather is dictated by human feelings (e.g., "Thunderous Regret").' },

    // Reimagined History & Culture (Previously 7-12, now 29-34)
    { id: '29', title: 'Cyberpunk Varanasi', category: 'Reimagined History', content: 'The ancient city of Varanasi in the year 2099 with neon ghats and flying rickshaws.' },
    { id: '30', title: 'Ancient Astronauts', category: 'Reimagined History', content: 'Vedic scholars using holographic interfaces to map the stars.' },
    { id: '31', title: 'Steampunk Da Vinci', category: 'Reimagined History', content: 'An invention by Leonardo da Vinci, but built with Victorian steam technology.' },
    { id: '32', title: 'Victorian Mars', category: 'Reimagined History', content: 'A 19th-century human colony on the red planet.' },
    { id: '33', title: 'Modern Mythology', category: 'Reimagined History', content: 'Lord Ganesha as a futuristic tech deity in a high-tech lab.' },
    { id: '34', title: 'The Lost City of Atlantis', category: 'Reimagined History', content: 'Found today, integrated with modern deep-sea renewable energy tech.' },

    // Nature & Technology Fusion (Previously 13-18, now 35-40)
    { id: '35', title: 'Biomechanical Jungle', category: 'Nature & Tech', content: 'A forest where the trees are made of fiber optics and the leaves are solar panels.' },
    { id: '36', title: 'Mechanical Wildlife', category: 'Nature & Tech', content: 'A majestic tiger whose fur is made of intricate golden gears and clockwork.' },
    { id: '37', title: 'The Last Tree on Earth', category: 'Nature & Tech', content: 'A single tree preserved inside a high-tech glass skyscraper.' },
    { id: '38', title: 'Digital Pollination', category: 'Nature & Tech', content: 'Robotic bees pollinating holographic flowers in a monochrome world.' },
    { id: '39', title: 'Crystalline Evolution', category: 'Nature & Tech', content: 'A desert where the cacti have evolved into glowing amethyst formations.' },
    { id: '40', title: 'Oceanic Circuits', category: 'Nature & Tech', content: 'A coral reef made of motherboard components and glowing LED anemones.' },

    // Artistic Styles & Mastery (Previously 19-24, now 41-46)
    { id: '41', title: 'Van Gogh’s Mars', category: 'Artistic Styles', content: 'A landscape of the Martian surface painted in the style of "Starry Night."' },
    { id: '42', title: 'Origami Universe', category: 'Artistic Styles', content: 'A vast cosmos where planets and stars are made of folded paper.' },
    { id: '43', title: 'Stained Glass Cyberpunk', category: 'Artistic Styles', content: 'A futuristic street scene rendered as a medieval cathedral window.' },
    { id: '44', title: 'Ukiyo-e Astronaut', category: 'Artistic Styles', content: 'A Japanese woodblock print style image of an astronaut in space.' },
    { id: '45', title: 'Pencil Sketch Reality', category: 'Artistic Styles', content: 'A 3D world that is halfway transitioning into a 2D charcoal sketch.' },
    { id: '46', title: 'Knitted Galaxy', category: 'Artistic Styles', content: 'A cosmic nebula captured in the texture of colorful wool and crochet.' },

    // Sci-Fi & Future Visions (Previously 25-30, now 47-52)
    { id: '47', title: 'The First Martian Library', category: 'Sci-Fi Visions', content: 'An interior view of a library on Mars with a view of the red horizon.' },
    { id: '48', title: 'Solarpunk Utopia', category: 'Sci-Fi Visions', content: 'A city where nature and high-tech architecture live in perfect, green harmony.' },
    { id: '49', title: 'Intergalactic Bazaar', category: 'Sci-Fi Visions', content: 'A marketplace where different alien species trade glowing artifacts.' },
    { id: '50', title: 'Humanity 2.0', category: 'Sci-Fi Visions', content: 'A portrait showing a subtle, elegant integration of AI and human biology.' },
    { id: '51', title: 'Parallel Earth', category: 'Sci-Fi Visions', content: 'An Earth where the dinosaurs never went extinct and built a civilization.' },
    { id: '52', title: 'The Architect of Thoughts', category: 'Sci-Fi Visions', content: 'A person literally "building" a city out of golden light coming from their head.' }
];
