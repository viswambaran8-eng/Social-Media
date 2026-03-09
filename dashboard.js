gsap.registerPlugin(ScrollTrigger);

// Palette: Goldenrod variations for depth
const socialColors = {
  gold: "goldenrod",
  darkGold: "#b8860b",
  mutedGold: "rgba(218, 165, 32, 0.2)",
  obsidian: "#050505",
  graphite: "#121212",
};

Chart.defaults.color = "#888";
Chart.defaults.font.family = "'Inter', sans-serif";

const initSocialDashboard = () => {
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  };

  // 1. Line: Hourly Engagement (Likes/Comments)
  new Chart(document.getElementById("chart1"), {
    type: "line",
    data: {
      labels: ["9am", "12pm", "3pm", "6pm", "9pm", "12am"],
      datasets: [{
        label: "Interactions",
        data: [1200, 1900, 1500, 2800, 3400, 2100],
        borderColor: socialColors.gold,
        backgroundColor: socialColors.mutedGold,
        fill: true,
        tension: 0.4,
      }],
    },
    options: commonOptions
  });

  // 2. Bar: Best Content Type Performance
  new Chart(document.getElementById("chart2"), {
    type: "bar",
    data: {
      labels: ["Reels", "Carousel", "Stories", "Posts"],
      datasets: [{
        data: [92, 78, 85, 64],
        backgroundColor: socialColors.gold,
      }],
    },
    options: commonOptions
  });

  // 3. Doughnut: Audience Gender/Demo
  new Chart(document.getElementById("chart3"), {
    type: "doughnut",
    data: {
      labels: ["Female", "Male", "Other"],
      datasets: [{
        data: [58, 32, 10],
        backgroundColor: [socialColors.gold, socialColors.darkGold, "#333"],
        borderWidth: 0,
      }],
    },
    options: { ...commonOptions, plugins: { legend: { display: true, position: 'bottom' } } }
  });

  // 4. Polar Area: Growth Channels
  new Chart(document.getElementById("chart4"), {
    type: "polarArea",
    data: {
      labels: ["Explore", "Hashtags", "Home", "Profile"],
      datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [socialColors.gold, "#aa8212", "#775b0d", "#443407"],
      }],
    },
    options: commonOptions
  });

  // 5. Line: Follower Growth (Weekly)
  new Chart(document.getElementById("chart5"), {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [{
        label: "New Followers",
        data: [400, 650, 590, 800, 1100, 950],
        borderColor: "#fff",
        borderDash: [5, 5],
        tension: 0.1
      }],
    },
    options: commonOptions
  });

  // 6. Bar: Global Reach (By Region)
  new Chart(document.getElementById("chart6"), {
    type: "bar",
    data: {
      labels: ["USA", "Brazil", "India", "UK", "Japan"],
      datasets: [{
        label: "Reach (K)",
        data: [85, 72, 94, 45, 30],
        backgroundColor: socialColors.gold,
      }],
    },
    options: commonOptions
  });

  // 7. Pie: Content Sentiment
  new Chart(document.getElementById("chart7"), {
    type: "pie",
    data: {
      labels: ["Positive", "Neutral", "Negative"],
      datasets: [{
        data: [75, 20, 5],
        backgroundColor: [socialColors.gold, "#444", "#111"],
      }],
    },
    options: commonOptions
  });

  // 8. Radar: Brand Affinity Score
  new Chart(document.getElementById("chart8"), {
    type: "radar",
    data: {
      labels: ["Trust", "Loyalty", "Virality", "Value", "Aesthetic"],
      datasets: [{
        label: "Current Score",
        data: [85, 90, 70, 95, 100],
        borderColor: socialColors.gold,
        backgroundColor: socialColors.mutedGold,
      }],
    },
    options: { ...commonOptions, scales: { r: { grid: { color: "#333" }, angleLines: { color: "#333" } } } }
  });
};

const animateDashboard = () => {
  gsap.from(".header-box", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
  gsap.from(".chart-card", {
    duration: 0.8,
    scale: 0.9,
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: { trigger: ".social-tech-grid", start: "top 80%" },
  });
};

window.addEventListener("DOMContentLoaded", () => {
  initSocialDashboard();
  animateDashboard();
});