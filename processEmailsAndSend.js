import { sendRegistrationEmail } from "./sendEmail.js"; 
import fs from 'fs'; 
import csv from 'csv-parser';

const processAndSend = () => {
  const recipients = []; 
  const batchSize = 50; 
  const delay = 1000;

  // Read the CSV file and extract email addresses
  fs.createReadStream('emails.csv')
    .pipe(csv())
    .on('data', (row) => {
      // Convert header keys to lowercase for case-insensitive matching
      const normalizedRow = Object.keys(row).reduce((acc, key) => {
        acc[key.toLowerCase()] = row[key]; // Normalize keys to lowercase
        return acc;
      }, {});

      // Use lowercase 'email' for accessing the email address
      if (normalizedRow.email) {
        const email = normalizedRow.email.replace(/"/g, '').trim(); // Clean the email
        recipients.push(email); // Add email to the recipients array
        console.log(`Email added: ${email}`); // Log the email being added
      }
    })
    .on('end', async () => {
      console.log('CSV file successfully processed. Sending emails...');

      if (recipients.length === 0) {
        console.log('No recipients found in the CSV file.'); // Log if no recipients were found
        return; // Exit if there are no recipients
      }

      // Send emails in batches
      for (let i = 0; i < recipients.length; i += batchSize) {
        const batch = recipients.slice(i, i + batchSize); // Get the current batch of emails
        
        // Send emails for the current batch
        await Promise.all(batch.map(recipient => sendRegistrationEmail(recipient)));

        console.log(`Sent ${Math.min(i + batchSize, recipients.length)} of ${recipients.length} emails...`);
        
        // Wait before sending the next batch
        if (i + batchSize < recipients.length) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }

      console.log('All emails have been sent.');
    })
    .on('error', (error) => {
      console.error('Error reading CSV file:', error); // Log any errors while reading the CSV
    });
};

processAndSend(); // Start processing and sending emails
