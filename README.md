# 🐄 Yakbee Farm Website

Welcome to Yakbee Farm - Premium Livestock & Animal Farming Website

## About Yakbee Farm

Yakbee Farm is a modern livestock farming operation located in **Dansoman Tunga**, featuring high-quality animals including:
- 🐄 Cattle
- 🥛 Dairy Cows
- 🐐 Goats
- 🐑 Sheep
- 🐔 Chickens
- 🦆 Ducks
- 🐪 Camels
- 🐾 Other Livestock

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/Quansco/Yakbee-farm.git
cd Yakbee-farm
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📸 Adding Photos and Videos

### Directory Structure
Create folders in `public/animals/` for each livestock type:

```
public/
└── animals/
    ├── cattle/
    │   ├── image1.jpg
    │   ├── image2.png
    │   └── video1.mp4
    ├── dairy-cows/
    ├── goats/
    ├── sheep/
    ├── chickens/
    ├── ducks/
    ├── camels/
    └── other/
```

### How to Upload Photos via GitHub

1. Go to your repository on GitHub
2. Navigate to `public` → `animals` → `{animal-folder}`
3. Click "Add file" → "Upload files"
4. Drag and drop your photos/videos
5. Commit changes
6. Photos appear on your website automatically!

### Supported Formats
- **Images**: JPG, JPEG, PNG, GIF, WebP
- **Videos**: MP4, WebM

## 📱 Contact Information

- **Phone**: 0542831214
- **Email**: Hamzamarco101@gmail.com
- **Location**: Dansoman Tunga
- **Facebook**: [Yakbee Farms](https://facebook.com/Yakbee-Farms)
- **Instagram**: [@Yakbee Farms](https://instagram.com/Yakbee-Farms)
- **TikTok**: [@yakbeefarms](https://tiktok.com/@yakbeefarms)

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Click "Deploy"
6. Your site is live! 🎉

### Option 2: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Automatic Deployments
Once connected to Vercel, your site automatically deploys every time you push to GitHub!

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: GitHub

## 📝 Customization

### Update Contact Info
Edit `src/components/Contact.js`:
```javascript
const contactInfo = {
  phone: '0542831214',
  email: 'Hamzamarco101@gmail.com',
  location: 'Dansoman Tunga',
  facebook: 'https://facebook.com/Yakbee-Farms',
  instagram: 'https://instagram.com/Yakbee-Farms',
  tiktok: 'https://tiktok.com/@yakbeefarms',
}
```

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  farm: {
    green: '#2d5016',    // Primary green
    light: '#f5f3f0',    // Light background
    accent: '#d4a574',   // Accent color
  },
}
```

## 📧 Support

For questions or support:
- **Email**: Hamzamarco101@gmail.com
- **Phone**: 0542831214

---

**Built with ❤️ for Yakbee Farm**
