// Main JavaScript for Ethan (tragi.c) Developer Portfolio
// UV Mouse Trail Effect using p5.js
let particles = [];
let mouseTrail;

// Code snippets for rotation
const codeSnippets = [
    `// React Component Example
function DeveloperPortfolio() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(console.error);
  }, []);
  
  return (
    <div className="portfolio">
      <Hero />
      <ProjectGrid projects={projects} />
    </div>
  );
}`,
    `// Python Web Scraper
import requests
from bs4 import BeautifulSoup
import json

def scrape_developer_data(url):
    headers = {'User-Agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    
    soup = BeautifulSoup(response.content, 'html.parser')
    data = []
    
    for item in soup.find_all('div', class_='project'):
        title = item.find('h2').text
        description = item.find('p').text
        data.append({'title': title, 'description': description})
    
    return json.dumps(data, indent=2)`,
    `// Node.js Express API
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/projects', (req, res) => {
  const projects = [
    { id: 1, name: 'E-commerce Platform', tech: ['React', 'Node.js'] },
    { id: 2, name: 'Mobile Chat App', tech: ['React Native', 'Firebase'] },
    { id: 3, name: 'Game Development', tech: ['Unity', 'C#'] }
  ];
  res.json(projects);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
    `// Unity C# Game Script
using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour
{
    public float speed = 5f;
    public GameObject projectile;
    
    void Update()
    {
        float moveX = Input.GetAxis("Horizontal");
        float moveY = Input.GetAxis("Vertical");
        
        Vector3 movement = new Vector3(moveX, moveY, 0f);
        transform.position += movement * speed * Time.deltaTime;
        
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Instantiate(projectile, transform.position, Quaternion.identity);
        }
    }
}`,
    `// SQL Database Query
SELECT 
    p.project_name,
    p.start_date,
    p.status,
    GROUP_CONCAT(t.tech_name) as technologies
FROM projects p
LEFT JOIN project_technologies pt ON p.id = pt.project_id
LEFT JOIN technologies t ON pt.tech_id = t.id
WHERE p.status = 'active'
GROUP BY p.id
ORDER BY p.start_date DESC
LIMIT 10;`
];

// Snake Game Variables
let snake = [];
let food = {};
let direction = 'right';
let nextDirection = 'right';
let gameRunning = false;
let score = 0;
let gameSpeed = 100;
let gameInterval;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeUVTrail();
    initializeContactForm();
    initializeNavigation();
    
    // Check if we're on the projects page and initialize snake game
    if (document.getElementById('snake-game')) {
        initializeSnakeGame();
    }
});

// Initialize animations
function initializeAnimations() {
    // Animate page elements on load
    anime({
        targets: '.fade-in',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutQuart'
    });
    
    // Initialize code snippet rotation
    if (document.getElementById('code-display')) {
        rotateCodeSnippet();
        setInterval(rotateCodeSnippet, 5000);
    }
    
    // Initialize text splitting animations
    if (typeof Splitting !== 'undefined') {
        Splitting({ target: '.split-text', by: 'chars' });
        
        anime({
            targets: '.split-text .char',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 600,
            delay: anime.stagger(50),
            easing: 'easeOutExpo'
        });
    }
}

// UV Mouse Trail Effect - REMOVED to fix dark screen issue
function initializeUVTrail() {
    // UV trail effect has been removed to prevent the dark screen bug
    // This function is now a no-op
}

// Rotate code snippets with smooth transitions
let currentTypedInstance = null;

function rotateCodeSnippet() {
    const codeDisplay = document.getElementById('code-display');
    if (!codeDisplay) return;
    
    const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    
    if (typeof Typed !== 'undefined') {
        // Destroy existing instance if it exists
        if (currentTypedInstance) {
            currentTypedInstance.destroy();
        }
        
        // Create new instance
        currentTypedInstance = new Typed('#code-display', {
            strings: [randomCode],
            typeSpeed: 20,
            backSpeed: 10,
            backDelay: 3000,
            loop: false,
            showCursor: true,
            cursorChar: '|',
            preStringTyped: function(arrayPos, self) {
                // Smooth transition: fade out current content
                codeDisplay.style.opacity = '0';
                setTimeout(() => {
                    codeDisplay.style.opacity = '1';
                }, 100);
            },
            onComplete: function() {
                setTimeout(() => {
                    // Smooth transition to next snippet
                    codeDisplay.style.opacity = '0';
                    setTimeout(() => {
                        rotateCodeSnippet();
                    }, 300);
                }, 3000);
            }
        });
    } else {
        // Fallback without Typed.js
        codeDisplay.style.opacity = '0';
        setTimeout(() => {
            codeDisplay.textContent = randomCode;
            codeDisplay.style.opacity = '1';
        }, 300);
    }
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Validate required fields
        if (!data.name || !data.discord || !data.projectType) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Prepare Discord webhook payload
        const webhookUrl = 'https://discordapp.com/api/webhooks/1448118196745015367/Q-k8Bk4gm1MkB3MYBgrkciAR4VNRn5ZvJL4Q3jFDMKLlJ3LeXo_QVxBQLT9-DS_tPky2';
        
        const payload = {
            embeds: [{
                title: 'New Contact Form Submission',
                color: 0x8b5cf6,
                fields: [
                    { name: 'Name', value: data.name, inline: true },
                    { name: 'Discord Username', value: data.discord, inline: true },
                    { name: 'Payment Method', value: data.paymentMethod || 'Not specified', inline: true },
                    { name: 'Project Type', value: data.projectType, inline: true },
                    { name: 'Understanding Confirmed', value: data.understanding || 'No', inline: true }
                ],
                timestamp: new Date().toISOString()
            }]
        };
        
        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            if (response.ok) {
                showNotification('Message sent successfully! I\'ll contact you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification('Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            showNotification('Network error. Please try again later.', 'error');
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Snake Game Implementation
function initializeSnakeGame() {
    const canvas = document.getElementById('snake-game');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    
    // Set canvas size
    canvas.width = 400;
    canvas.height = 400;
    
    // Initialize game
    function initGame() {
        snake = [{ x: 10, y: 10 }];
        direction = 'right';
        nextDirection = 'right';
        score = 0;
        gameSpeed = 100;
        
        generateFood();
        
        if (scoreElement) {
            scoreElement.textContent = score;
        }
        
        gameRunning = true;
        gameInterval = setInterval(gameLoop, gameSpeed);
    }
    
    // Generate food
    function generateFood() {
        food = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
        };
        
        // Ensure food doesn't spawn on snake
        for (let segment of snake) {
            if (segment.x === food.x && segment.y === food.y) {
                generateFood();
                break;
            }
        }
    }
    
    // Game loop
    function gameLoop() {
        if (!gameRunning) return;
        
        // Update direction
        direction = nextDirection;
        
        // Move snake
        const head = { ...snake[0] };
        
        switch (direction) {
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
        }
        
        // Check walls
        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
            gameOver();
            return;
        }
        
        // Check self collision
        for (let segment of snake) {
            if (head.x === segment.x && head.y === segment.y) {
                gameOver();
                return;
            }
        }
        
        snake.unshift(head);
        
        // Check food
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            if (scoreElement) {
                scoreElement.textContent = score;
            }
            generateFood();
            
            // Speed up game slightly
            if (gameSpeed > 50) {
                gameSpeed -= 2;
                clearInterval(gameInterval);
                gameInterval = setInterval(gameLoop, gameSpeed);
            }
        } else {
            snake.pop();
        }
        
        draw();
    }
    
    // Draw game
    function draw() {
        // Clear canvas
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw snake
        ctx.fillStyle = '#8b5cf6';
        for (let segment of snake) {
            ctx.fillRect(segment.x * 20, segment.y * 20, 18, 18);
        }
        
        // Draw food
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(food.x * 20, food.y * 20, 18, 18);
    }
    
    // Game over
    function gameOver() {
        gameRunning = false;
        clearInterval(gameInterval);
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
        ctx.fillText('Press Space to restart', canvas.width / 2, canvas.height / 2 + 50);
    }
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!gameRunning && e.code === 'Space') {
            initGame();
            return;
        }
        
        if (!gameRunning) return;
        
        switch (e.key.toLowerCase()) {
            case 'arrowup':
            case 'w':
                if (direction !== 'down') nextDirection = 'up';
                break;
            case 'arrowdown':
            case 's':
                if (direction !== 'up') nextDirection = 'down';
                break;
            case 'arrowleft':
            case 'a':
                if (direction !== 'right') nextDirection = 'left';
                break;
            case 'arrowright':
            case 'd':
                if (direction !== 'left') nextDirection = 'right';
                break;
        }
    });
    
    // Start game
    initGame();
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            opacity: [1, 0],
            translateX: [0, 100],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Smooth page transitions
window.addEventListener('beforeunload', function() {
    anime({
        targets: 'body',
        opacity: [1, 0],
        duration: 300,
        easing: 'easeInQuart'
    });
});