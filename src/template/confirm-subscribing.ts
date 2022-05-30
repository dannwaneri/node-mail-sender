export default ({ unsubscribeToken }: { unsubscribeToken: string }) => `
<!DOCTYPE html>
 <html>
  <head>
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  <body>
   <a 
    href="http://localhost:3030/api/unsubscribe?token=${unsubscribeToken}" 
    style="font-size: 10px;">
      Click here to unsubscribe
   </a>
  </body>
 </html>
`;
