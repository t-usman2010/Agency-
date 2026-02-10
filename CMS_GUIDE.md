# Firebase CMS Setup Guide

Your website is now fully dynamic! All content (team members, services, testimonials, portfolio projects, and pricing) can be managed from the admin panel.

## Quick Start

### 1. Access Admin Panel
Navigate to `/admin/login` and sign in with your Firebase admin credentials.

### 2. Add Initial Content

The admin panel has 6 tabs:
- **Leads**: View and manage contact form submissions
- **Team**: Add/edit/delete team members
- **Services**: Manage your service offerings
- **Portfolio**: Add your projects and case studies
- **Testimonials**: Add client testimonials  
- **Pricing**: Create and manage pricing packages

### 3. Content Structure

#### Team Members
- Name, Role, Bio
- Skills (comma-separated)
- Display order

#### Services
- Title, Description
- Features (one per line)
- Display order

#### Portfolio Projects
- Title, Slug (URL), Category
- Description, Challenge, Solution
- Results (one per line)
- Technologies (comma-separated)
- Image URL (use Unsplash for free images)
- Display order

#### Testimonials
- Author name and role
- Testimonial text
- Star rating (1-5)

#### Pricing Packages
- Name, Price, Period (e.g., "/month")
- Description
- Features (one per line)
- Popular badge toggle  
- Display order

## Firestore Collections

Your Firebase database uses these collections:
- `team` - Team members
- `services` - Service offerings
- `projects` - Portfolio projects
- `testimonials` - Client testimonials
- `pricing` - Pricing packages
- `leads` - Contact form submissions

## Security Rules

Update your Firestore security rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read access for content
    match /{collection}/{document} {
      allow read: if collection in ['team', 'services', 'projects', 'testimonials', 'pricing'];
    }
    
    // Leads: allow write from public, read/update/delete for admin only
    match /leads/{lead} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    // Admin-only write access for content
    match /{collection}/{document} {
      allow write: if request.auth != null && collection in ['team', 'services', 'projects', 'testimonials', 'pricing'];
    }
  }
}
```

## Tips

1. **Images**: Use free stock photos from [Unsplash](https://unsplash.com) for consistent quality
2. **Slugs**: Use lowercase with hyphens (e.g., "ecommerce-platform")
3. **Order**: Lower numbers appear first (0, 1, 2, 3...)
4. **Popular Badge**: Mark one pricing package as "popular" for visual emphasis

## Next Steps

1. Add your team members in the Team tab
2. Create your services  
3. Add portfolio projects
4. Collect and add testimonials
5. Set up your pricing packages

The website will update in real-time as you add content!
