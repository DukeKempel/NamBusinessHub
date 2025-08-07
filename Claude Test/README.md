# Namibian Business Specials Hub

A beginner-friendly web application designed specifically for Namibian businesses to create, share, and track daily specials and events. Built with HTML, CSS, JavaScript, and Firebase. All prices are displayed in Namibian Dollars (N$).

## Features

### 🎯 Core Functionality
- **Create Specials**: Add daily specials with title, description, photo, and price in N$
- **Instant Sharing**: Generate shareable images for WhatsApp, Facebook, and Instagram
- **Customer Notifications**: Send email/push notifications to subscribers
- **Analytics Dashboard**: Track views, shares, and engagement metrics
- **Subscriber Management**: Manage customer subscriptions and export lists
- **Supplier Directory**: Comprehensive supplier management with ratings and reviews
- **Namibian Categories**: Industry-specific categories for tourism, mining, agriculture, and more

### 🎨 User Experience
- Modern, responsive design that works on all devices
- Intuitive tab-based navigation
- Real-time updates and live data
- Beautiful preview system with instant image generation
- Drag-and-drop photo uploads

### 📊 Analytics & Tracking
- View count tracking for each special
- Share count monitoring
- Subscriber growth analytics
- Interactive charts showing performance over time
- Export capabilities for data analysis

## Setup Instructions

### 1. Firebase Setup

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   - Enable Google Analytics (optional but recommended)

2. **Enable Firebase Services**:
   - **Firestore Database**: Go to Firestore Database → Create database → Start in test mode
   - **Storage**: Go to Storage → Get started → Start in test mode
   - **Messaging**: Go to Cloud Messaging → Enable (for notifications)

3. **Get Your Configuration**:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click the web icon (</>) to add a web app
   - Copy the configuration object

4. **Update Configuration**:
   - Open `firebase-config.js`
   - Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

### 2. Security Rules Setup

#### Firestore Rules
Go to Firestore Database → Rules and update with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to all users under any document
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

#### Storage Rules
Go to Storage → Rules and update with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

### 3. Local Development

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Test** the application functionality

### 4. Deployment Options

#### Option A: Firebase Hosting (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Deploy
firebase deploy
```

#### Option B: GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch and deploy

#### Option C: Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be live instantly

## Project Structure

```
namibian-business-specials-hub/
├── index.html              # Main HTML file
├── demo.html               # Demo version (no Firebase required)
├── styles.css              # CSS styles and responsive design
├── app.js                  # Main JavaScript application
├── demo.js                 # Demo JavaScript (simulated data)
├── firebase-config.js      # Firebase configuration
└── README.md              # This file
```

## Usage Guide

### Creating a Special
1. Click "Create Special" tab
2. Fill in the title and description
3. Add a price in N$ (optional)
4. Select a category relevant to Namibian businesses
5. Upload a photo (optional)
6. Set expiry date (optional)
7. Click "Create Special", "Preview" to see how it looks, or "Notify All" to send to subscribers

### Sharing Specials
1. Create or select a special
2. Click "Preview" to see the generated image
3. Use the share buttons for:
   - **WhatsApp**: Opens WhatsApp with pre-filled message
   - **Facebook**: Opens Facebook share dialog
   - **Instagram**: Downloads image for manual posting
   - **Download**: Saves image to your device

### Managing Subscribers
1. Go to "Subscribers" tab
2. View all customer subscriptions
3. Export subscriber list as CSV
4. Send notifications to all subscribers

### Managing Suppliers
1. Go to "Suppliers" tab
2. View all suppliers with ratings and contact information
3. Add new suppliers with detailed information
4. Rate suppliers and leave reviews
5. Filter suppliers by category and rating
6. Export supplier list as CSV
7. Remove suppliers from the directory

### Analytics
1. Go to "Analytics" tab
2. View key metrics:
   - Total views across all specials
   - Total shares
   - Number of subscribers
   - Active specials count
3. Interactive chart shows views and shares over time

### Category Navigation
1. Use the "Categories" dropdown in the navigation
2. Select any category to filter specials by type
3. Choose "All Categories" to view all specials
4. Each category has a unique color-coded icon

## Customization

### Colors and Branding
The app uses a consistent color scheme defined in `styles.css`:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Background: Gradient from primary to secondary

To customize for your Namibian business:
1. Open `styles.css`
2. Find the color variables and update them
3. Update the gradient backgrounds to match your brand
4. Consider using colors that reflect Namibian landscapes (desert oranges, sky blues, etc.)

### Categories
The app includes Namibian-specific business categories:
- **Food & Beverage**: Restaurants, cafes, bars, breweries, dairies
- **Tourism & Hospitality**: Hotels, lodges, safari tours, travel services
- **Retail & Shopping**: Stores, markets, shopping centers
- **Services**: Professional services, maintenance, personal care, telecommunications
- **Agriculture & Farming**: Farming supplies, agricultural services
- **Mining & Resources**: Mining services, equipment, consulting
- **Transport & Logistics**: Transport services, warehousing, distribution
- **Construction**: Building materials, construction services
- **Events & Entertainment**: Events, entertainment, cultural activities
- **Other**: Additional business types

To add or modify categories:
1. Open `index.html`
2. Find the category select options
3. Add new options as needed
4. Update the `getCategoryName()` function in `app.js`

### Features
The app is modular and easy to extend:
- Add new tabs by copying existing tab structure
- Add new form fields by following the existing pattern
- Integrate additional social media platforms
- Add more analytics metrics

## Troubleshooting

### Common Issues

**"Firebase not initialized" error**
- Check that `firebase-config.js` has correct credentials
- Ensure Firebase services are enabled in console

**Photos not uploading**
- Verify Firebase Storage is enabled
- Check Storage security rules allow uploads

**Real-time updates not working**
- Ensure Firestore is enabled
- Check Firestore security rules

**Share buttons not working**
- Some social platforms require HTTPS
- Test on a deployed version rather than localhost

### Performance Tips
- Compress images before uploading
- Use appropriate image sizes (max 2MB recommended)
- Enable Firebase offline persistence for better performance

## Namibian Market Considerations

### Local Business Focus
- **Tourism Industry**: Perfect for lodges, tour operators, and hospitality businesses
- **Mining Sector**: Ideal for mining services, equipment suppliers, and consulting firms
- **Agriculture**: Great for farming supplies, agricultural services, and produce markets
- **Retail**: Suitable for local stores, markets, and shopping centers
- **Services**: Professional services, maintenance, and personal care businesses
- **Food & Beverage**: Restaurants, breweries, dairies, and food suppliers
- **Transport & Logistics**: Transport companies, warehousing, and distribution services
- **Construction**: Building materials, construction services, and contractors

### Currency and Pricing
- All prices are displayed in Namibian Dollars (N$)
- Pricing examples use realistic Namibian market values
- Supports both fixed prices and percentage discounts
- Free offers are clearly marked

### Local Connectivity
- Optimized for mobile use (important for Namibian market)
- Works well with limited internet connectivity
- Offline capabilities for basic functionality
- WhatsApp sharing optimized for local communication

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify your Firebase configuration
3. Test with a simple special first
4. Check browser console for error messages

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the application.

---

**Built with ❤️ for Namibian businesses** 