# Abilash S - DevOps Portfolio Setup Instructions

## Prerequisites

Before running this portfolio, make sure you have the following installed:

1. **Node.js** (version 14 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS version for Windows

2. **Git** (if you plan to deploy to GitHub Pages)
   - Download from: https://git-scm.com/

## Installation & Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## Customization Completed ✅

The following has been customized for Abilash S:

### ✅ Personal Information
- Name: Abilash S
- Title: Associate DevOps Engineer (Senior Specialist)
- Location: Coimbatore, India
- Email: abilash.work21@gmail.com
- Phone: +91-9566883316
- LinkedIn: https://www.linkedin.com/in/abilash-s-2aba3516b/

### ✅ Professional Experience
- Updated About section with DHL IT Services experience
- Added promotion history and Employee of the Quarter achievement
- Included specific project details (eCS-BRS Platform, Merlin AI/ML, Manhattan Active Migration)

### ✅ Technical Skills
- Azure Cloud focus (Azure DevOps, AKS, Synapse Analytics, Power BI)
- Infrastructure as Code (Terraform, ARM templates, Bicep)
- DevSecOps practices and security modules
- Data platform engineering skills

### ✅ Certifications
- AZ-400: Microsoft Certified DevOps Engineer Expert
- AZ-104: Microsoft Certified Azure Administrator Associate
- AZ-900: Microsoft Certified Azure Fundamentals
- AWS Cloud Practitioner
- Postman Student Expert
- Business English Certificate Preliminary
- Currently preparing for CKA

### ✅ Projects
- Replaced with real professional projects from DHL
- eCS – BRS Platform (BI Platform with DevSecOps)
- Merlin (AI/ML with AKS and Redis)
- Manhattan Active Migration (ETL and data transformation)

## Still Need Your Input 📝

### 1. GitHub Username
- Update GitHub links in Contact.jsx with your actual GitHub username
- Update package.json homepage URL for GitHub Pages deployment

### 2. Resume PDF
- Upload your resume PDF to Google Drive
- Get the shareable file ID
- Update the googleDriveFileId in Resume.jsx

### 3. Profile Photo
- Replace the profile photo in `frontend/src/assets/profile-photo.jpg` with your professional photo

### 4. Repository Setup
- Create a new GitHub repository for your portfolio
- Update the repository name in package.json
- Set up GitHub Pages for deployment

## Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. The site will be available at `https://your-username.github.io/repository-name`

### Option 2: Other Hosting Platforms
- Netlify
- Vercel
- AWS S3 + CloudFront
- Azure Static Web Apps

## Next Steps

1. Install Node.js if not already installed
2. Run `npm install` in the frontend directory
3. Update GitHub username and repository details
4. Add your resume PDF and profile photo
5. Test the application locally with `npm start`
6. Deploy to your preferred hosting platform

Your portfolio is now customized with your professional information and ready for deployment!
