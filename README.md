# BulkMails

## Purpose

**BulkMails** is designed to facilitate the mass sending of emails to several users at the same time. By automating the email sending process, this utility enhances user engagement and ensures that new users receive timely information and invitations.

This utility reads a list of email addresses from a CSV file and sends personalized welcome emails to each recipient using the **Nodemailer** package for Node.js. 

## Features

- Sends emails to users in batches to avoid hitting provider limits.
- Customizable email subject and content.
- Easy integration with your existing Node.js application.
- Utilizes CSV files for efficient data handling.

## Requirements

- Node.js (v14 or later recommended)
- npm (Node Package Manager)

## Setup

1. **Clone the Repository**

   Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/jmariadlcs/BulkMails.git
   cd BulkMails
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary packages:

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory of your project and add your email credentials as follows:

   ```plaintext
   EMAIL_ADDRESS=your-email@gmail.com
   EMAIL_PASSWORD=your-email-password
   ```

   > **Note:** If you are using Gmail, you may need to enable "Less secure app access" or use an App Password if you have 2-Step Verification enabled.

4. **Prepare the CSV File**

   Create a file named `emails.csv` in the root directory of your project. This file should contain a list of email addresses in the following format:

   ```csv
   "email"
   "user1@example.com"
   "user2@example.com"
   "user3@example.com"
   ```

   Ensure that the header of the CSV file is `"email"` to match the code's expectations.

## Usage

To execute the email sending script, run the following command in your terminal:

```bash
node processEmailsAndSend.js
```

The script will read the email addresses from `emails.csv`, process them in batches, and send out the welcome emails as specified in the code.

## Customization

You can customize the email subject and content directly in the `processEmailsAndSend.js` file. Modify the `subject` and `htmlContent` variables to tailor the message that your recipients will receive.

## Error Handling

If there are any issues while reading the CSV file or sending emails, appropriate error messages will be logged to the console for debugging.

## Conclusion

This utility simplifies the process of welcoming new users, ensuring they receive important information and links to join your community. Customize the content as needed, and enjoy streamlined communication with your users!
# BulkMails
# BulkMails
# Bulk-Mails
# Bulk-Mails
# Bulk-Mails
