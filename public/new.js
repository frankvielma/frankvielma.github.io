const progressBars = document.querySelectorAll(".progressBar");
const profile = document.getElementById("profile");
const borderLines = document.querySelectorAll(".border-line");

// Progress bar animation
progressBars.forEach(progressBar => {
  const value = progressBar.dataset.value;
  const skill = progressBar.dataset.skill;
  const widthMax = progressBar.offsetWidth;
  
  progressBar.querySelectorAll("div").forEach(bar => {
    const barValue = bar.dataset.value;
    const marginLeft = bar.dataset.pos;
    const width = (barValue * widthMax) / 100;
    
    bar.style.marginLeft = marginLeft + "%";
    bar.style.width = "0%"; // Start with 0 width
    
    bar.animate([
      { width: '0px' }, 
      { width: width + 'px' } 
    ], { 
      duration: 1000, 
      fill: "forwards" // Ensure animation ends at target width
    });
    bar.textContent = skill; // Set text content after animation
  });
});

// Border line resizing
const resizeBorderLines = () => {
  const profileWidth = document.querySelector('li.opposite-side').offsetWidth;
  console.log(profileWidth);
  borderLines.forEach(borderLine => {
    if (borderLine.closest("li").classList.contains("opposite-side")) {
      borderLine.style.marginRight = `${(149.9554 - profileWidth)/11.33047}px`;
      borderLine.style.width = `${(profileWidth + 132.483870)/11.064516}px`;
    } else {
      borderLine.style.marginLeft = `${(145.268 - profileWidth)/11.384}px`;
      borderLine.style.width = `${(profileWidth - 337.247)/11.36470588}px`;
    }
  });
};

// Initial resizing
resizeBorderLines();

// Event listener for window resize
window.addEventListener('resize', resizeBorderLines);



document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    "Computers themselves, and software yet to be developed, will revolutionize the way we learn. Steve Jobs",
    "Natural science, does not simply describe and explain nature; it is part of the interplay between nature and ourselves. Werner Heisenberg",
    "You can mass-produce hardware; you cannot mass-produce software - you cannot mass-produce the human mind. Michio Kaku",
    "Software Engineering might be science; but that's not what I do. I'm a hacker, not an engineer. Jamie Zawinski",
    "It's hardware that makes a machine fast. It's software that makes a fast machine slow. Craig Bruce",
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. Linus Torvalds",
    "The human brain has 100 billion neurons, each neuron connected to 10 thousand other neurons. Sitting on your shoulders is the most complicated object in the known universe. Michio Kaku",
    "Insanity: doing the same thing over and over again and expecting different results. Albert Einstein",
    "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. Albert Einstein",
    "The true sign of intelligence is not knowledge but imagination. Albert Einstein",
    "The present is theirs; the future, for which I really worked, is mine. Nikola Tesla",
    "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. Nikola Tesla",
    "We can never obtain peace in the outer world until we make peace with ourselves. Dalai Lama",
    "Home is where you feel at home and are treated well. Dalai Lama",
    "Silence is sometimes the best answer. Dalai Lama",
    "Know the rules well, so you can break them effectively. Dalai Lama",
    "Share your knowledge. It is a way to achieve immortality. Dalai Lama",
    "When you realize you’ve made a mistake, take immediate steps to correct it. Dalai Lama",
    "It doesn't matter how beautiful your theory is, it doesn't matter how smart you are. If it doesn't agree with experiment, it's wrong. Richard Feynman"
  ];

  const quoteCount = quotes.length;
  const randomIndex = Math.floor(Math.random() * quoteCount);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
});



window.addEventListener('scroll', function() {
  if (window.scrollY > 250) {
    document.querySelector('.back-to-top').style.display = 'block';
  } else {
    document.querySelector('.back-to-top').style.display = 'none';
  }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
