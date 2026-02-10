# Admin Setup Guide

## Your Firebase project is already configured ✓
Project ID: `agency-taken`

## Steps to Create Admin Credentials

### 1. Go to Firebase Console
Visit: https://console.firebase.google.com/project/agency-taken/authentication/users

### 2. Enable Email/Password Authentication (if not already enabled)
- Click on **Authentication** in the left sidebar
- Go to the **Sign-in method** tab
- Find **Email/Password** and click it
- Enable it and click **Save**

### 3. Add an Admin User
- Go to the **Users** tab in Authentication
- Click **Add user**
- Enter your admin email (e.g., `admin@triforgestudio.com`)
- Enter a secure password
- Click **Add user**

### 4. Set up Firestore Database (for contact leads)
- Click on **Firestore Database** in the left sidebar
- Click **Create database**
- Choose **Start in production mode** (you can change rules later)
- Select your preferred location
- Click **Enable**

### 5. Configure Firestore Security Rules
After creating the database, go to the **Rules** tab and use these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to submit contact leads (write-only)
    match /leads/{leadId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    // Require authentication for blog posts and projects
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /projects/{projectId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Click **Publish** to save the rules.

### 6. Enable Firebase Storage (optional, for images)
- Click on **Storage** in the left sidebar
- Click **Get started**
- Use default security rules for now
- Click **Done**

---

## Login to Admin Dashboard

Once you've created your admin user, you can log in at:

**Local Dev:** http://localhost:3000/admin/login  
**Production:** https://yourdomain.com/admin/login

Use the email and password you created in step 3.

---

## Quick Test

1. Restart your dev server: `npm run dev`
2. Visit http://localhost:3000/contact and submit a test lead
3. Log in at http://localhost:3000/admin/login
4. You should see the test lead in the dashboard

---

## Troubleshooting

**Can't log in?**
- Verify the user was created in Firebase Console → Authentication → Users
- Check that Email/Password sign-in is enabled
- Make sure you're using the correct email and password

**Can't see leads?**
- Check Firestore security rules allow authenticated reads on `/leads`
- Verify the lead was actually submitted (check Firebase Console → Firestore)
- Check browser console for errors

**Production deployment:**
- Add your production domain to Firebase Authentication → Settings → Authorized domains
- Make sure environment variables are configured on Vercel/Firebase Hosting
