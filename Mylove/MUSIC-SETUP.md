# Autoplay Information

## How It Works Now

The website is configured to autoplay music in three ways:

1. **HTML autoplay attribute** - Tells the browser to attempt autoplay
2. **JavaScript autoplay on page load** - Tries to start music when page loads
3. **Fallback on first interaction** - If autoplay is blocked, music will start on the first click, touch, or keypress anywhere on the page

## Browser Autoplay Policies

**Important:** Most modern browsers (Chrome, Firefox, Safari, Edge) block autoplay with sound by default to improve user experience. Here's what happens:

### Desktop Browsers:
- **Chrome/Edge**: Blocks autoplay unless user has interacted with your domain before
- **Firefox**: Blocks autoplay by default
- **Safari**: Blocks autoplay by default

### Mobile Browsers:
- **iOS Safari**: Always blocks autoplay with sound
- **Chrome Mobile**: Blocks autoplay with sound
- **Android browsers**: Usually block autoplay

## What This Means For Your Site

✅ **Good News**: 
- If someone visits your site and clicks ANYWHERE (the heart button, background, etc.), the music will start automatically
- Once started, the music will continue playing even when opening the letter
- The music toggle button always works to pause/play

⚠️ **Expected Behavior**:
- On first visit, user might need to interact with the page (click anywhere) for music to start
- The music icon will show "paused" state if autoplay was blocked
- This is normal browser behavior for user privacy and experience

## Testing Autoplay

To test if autoplay works in different scenarios:

1. **Fresh visit**: Clear browser cache and cookies, then visit the site
2. **Return visit**: Visit the site multiple times - Chrome may allow autoplay after user engagement
3. **Mobile**: Test on actual mobile devices (autoplay will likely be blocked)

## Workaround: User-Initiated Playback

The current code is set up so that:
- Music attempts to play immediately when page loads
- If blocked, it waits for ANY user interaction (click, touch, key press)
- Then automatically starts playing
- User can still manually control with the music button

This is the best approach that works across all browsers while respecting their autoplay policies!

## Volume Control

The music is set to 50% volume by default. You can adjust this in `script.js`:

```javascript
music.volume = 0.5; // Change to any value between 0.0 (mute) and 1.0 (full volume)
```

---

**Tip**: If you really need guaranteed autoplay, you could add a "Enter Site" button that users click first, which would allow music to start. But the current implementation is more elegant and user-friendly!